
import "dotenv/config";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

import { PrismaClient, Prisma } from "../src/generated/prisma/client.js";
import { DefaultUserRole } from "../src/generated/prisma/enums.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured.");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const demoUsers = [
  {
    name: "Demo Client",
    email: "client@example.test",
    password: "ClientDemo2026!",
    role: "CLIENT",
  },
  {
    name: "Demo Consultant",
    email: "consultant@example.test",
    password: "ConsultantDemo2026!",
    role: "CONSULTANT",
  },
  {
    name: "Demo Reviewer",
    email: "reviewer@example.test",
    password: "ReviewerDemo2026!",
    role: "REVIEWER",
  },
  {
    name: "Demo Admin",
    email: "admin@example.test",
    password: "AdminDemo2026!",
    role: "ADMIN",
  },
  {
    name: "Demo Super Admin",
    email: "superadmin@example.test",
    password: "SuperAdminDemo2026!",
    role: "SUPER_ADMIN",
  },
] as const;

const permissions = [
  ["user.read", "Read permitted user profiles"],
  ["user.update", "Update permitted user profiles"],
  ["user.manage", "Manage users within authorized scope"],

  ["organization.read", "Read organization details"],
  ["organization.manage", "Manage organizations"],

  ["consultant.read", "Read consultant profiles"],
  ["consultant.manage", "Manage consultant profiles"],

  ["service.read", "Read published services"],
  ["service.manage", "Create and manage services"],

  ["availability.read", "Read consultant availability"],
  ["availability.manage", "Manage consultant availability"],

  ["booking.create", "Create bookings"],
  ["booking.read", "Read authorized bookings"],
  ["booking.update", "Update authorized bookings"],
  ["booking.cancel", "Cancel authorized bookings"],
  ["booking.review", "Review bookings"],

  ["meeting.read", "Read authorized meeting details"],
  ["meeting.manage", "Manage meetings"],

  ["payment.read", "Read authorized payment records"],
  ["payment.refund", "Issue authorized refunds"],
  ["payment.manage", "Manage payment operations"],

  ["blog.read", "Read blog content"],
  ["blog.create", "Create blog posts"],
  ["blog.update", "Update blog posts"],
  ["blog.publish", "Publish blog posts"],
  ["blog.delete", "Delete blog posts"],
  ["blog.review", "Review blog submissions"],

  ["analytics.read", "Read authorized analytics"],

  ["settings.read", "Read organization settings"],
  ["settings.manage", "Manage organization settings"],
  ["system_settings.manage", "Manage global settings"],

  ["role.read", "Read role assignments"],
  ["role.manage", "Manage role assignments"],
  ["permission.manage", "Manage permission definitions"],
  ["audit.read", "Read authorized audit logs"],
] as const;

type PermissionKey = (typeof permissions)[number][0];

const rolePermissions: Record<DefaultUserRole, readonly PermissionKey[]> = {
  CLIENT: [
    "service.read",
    "consultant.read",
    "availability.read",
    "booking.create",
    "booking.read",
    "booking.update",
    "booking.cancel",
    "meeting.read",
    "payment.read",
    "blog.read",
  ],

  CONSULTANT: [
    "service.read",
    "consultant.read",
    "availability.read",
    "availability.manage",
    "booking.read",
    "booking.update",
    "meeting.read",
    "meeting.manage",
    "payment.read",
    "blog.read",
    "analytics.read",
  ],

  REVIEWER: [
    "service.read",
    "consultant.read",
    "booking.read",
    "booking.review",
    "blog.read",
    "blog.review",
    "analytics.read",
  ],

  ADMIN: [
    "user.read",
    "user.update",
    "user.manage",
    "organization.read",
    "organization.manage",
    "consultant.read",
    "consultant.manage",
    "service.read",
    "service.manage",
    "availability.read",
    "availability.manage",
    "booking.create",
    "booking.read",
    "booking.update",
    "booking.cancel",
    "booking.review",
    "meeting.read",
    "meeting.manage",
    "payment.read",
    "payment.refund",
    "payment.manage",
    "blog.read",
    "blog.create",
    "blog.update",
    "blog.publish",
    "blog.delete",
    "blog.review",
    "analytics.read",
    "settings.read",
    "settings.manage",
    "role.read",
    "audit.read",
  ],

  SUPER_ADMIN: permissions.map(([key]) => key),
};

const systemSettings: {
  key: string;
  value: Prisma.InputJsonValue;
  description: string;
}[] = [
  {
    key: "platform.name",
    value: "Consultancy Platform",
    description: "Public platform name",
  },
  {
    key: "booking.default_duration_minutes",
    value: 60,
    description: "Default consultation duration",
  },
  {
    key: "booking.hold_duration_minutes",
    value: 15,
    description: "Unpaid booking hold duration",
  },
  {
    key: "booking.minimum_notice_minutes",
    value: 60,
    description: "Minimum advance booking notice",
  },
  {
    key: "booking.cancellation_cutoff_hours",
    value: 24,
    description: "Default cancellation cutoff",
  },
  {
    key: "booking.default_timezone",
    value: "Africa/Douala",
    description: "Default timezone for displaying appointments",
  },
  {
    key: "payments.enabled_providers",
    value: ["STRIPE", "MTN_MOMO_CM", "ORANGE_MONEY_CM"],
    description: "Configured payment provider identifiers",
  },
  {
    key: "security.mfa_required",
    value: true,
    description: "Require MFA for authenticated users",
  },
  {
    key: "security.admin_mfa_required",
    value: true,
    description: "Require MFA for administrators",
  },
  {
    key: "content.blog_requires_review",
    value: true,
    description: "Require review before publication",
  },
];

async function seedPermissions(): Promise<void> {
  for (const [key, description] of permissions) {
    await prisma.permission.upsert({
      where: { key },
      update: { description },
      create: { key, description },
    });
  }

  console.log(`Seeded ${permissions.length} permissions.`);
}

async function seedRolePermissions() {
  console.log("Seeding role permissions...");

  const roleNames = [
    "CLIENT",
    "CONSULTANT",
    "REVIEWER",
    "ADMIN",
    "SUPER_ADMIN",
  ] as const;

  const roleIds = new Map<string, string>();

  // Find or create platform roles.
  for (const roleName of roleNames) {
    let role = await prisma.role.findFirst({
      where: {
        name: roleName,
        scope: "PLATFORM",
        organizationId: null,
      },
    });

    if (!role) {
      role = await prisma.role.create({
        data: {
          name: roleName,
          scope: "PLATFORM",
          organizationId: null,
        },
      });
    }

    roleIds.set(roleName, role.id);
  }

  // Load permission IDs.
  const allPermissions = await prisma.permission.findMany({
    select: {
      id: true,
      key: true,
    },
  });

  const permissionIds = new Map(
    allPermissions.map(({ id, key }) => [key, id]),
  );

  // Build role-permission assignments.
  const assignments = Object.entries(rolePermissions).flatMap(
    ([roleName, permissionKeys]) => {
      const roleId = roleIds.get(roleName);

      if (!roleId) {
        throw new Error(`Missing role: ${roleName}`);
      }

      return permissionKeys.map((permissionKey) => {
        const permissionId = permissionIds.get(permissionKey);

        if (!permissionId) {
          throw new Error(
            `Missing permission: ${permissionKey}`,
          );
        }

        return { roleId, permissionId };
      });
    },
  );

  // Add assignments without deleting existing ones.
  const result = await prisma.rolePermission.createMany({
    data: assignments,
    skipDuplicates: true,
  });

  console.log(
    `Created ${result.count} role-permission assignments.`,
  );
}


async function seedSystemSettings(): Promise<void> {
  for (const setting of systemSettings) {
    await prisma.systemSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log(`Seeded ${systemSettings.length} system settings.`);
}

async function seedDemoUsers() {
  console.log("Seeding demo users...");

  for (const demo of demoUsers) {
    const passwordHash = await bcrypt.hash(demo.password, 12);

    // Create or update the user by their unique email.
    const user = await prisma.user.upsert({
      where: { email: demo.email },
      update: {
        name: demo.name,
        passwordHash,
        status: "ACTIVE",
        emailVerifiedAt: new Date(),
      },
      create: {
        name: demo.name,
        email: demo.email,
        passwordHash,
        status: "ACTIVE",
        emailVerifiedAt: new Date(),
      },
    });

    // Find the corresponding platform role.
    const role = await prisma.role.findFirst({
      where: {
        name: demo.role,
        scope: "PLATFORM",
        organizationId: null,
      },
    });

    if (!role) {
      throw new Error(
        `Platform role ${demo.role} not found. Seed roles first.`,
      );
    }

    // Avoid duplicate role assignments.
    const existingAssignment = await prisma.userRole.findFirst({
      where: {
        userId: user.id,
        roleId: role.id,
        organizationId: null,
      },
    });

    if (!existingAssignment) {
      await prisma.userRole.create({
        data: {
          userId: user.id,
          roleId: role.id,
          organizationId: null,
        },
      });
    }

    console.log(`Seeded ${demo.role}: ${demo.email}`);
  }

  console.log("Demo users seeded successfully.");
}

async function main(): Promise<void> {
  console.log("Starting database seed...");

  await seedPermissions();
  await seedRolePermissions();
  await seedSystemSettings();
  await seedDemoUsers();

  console.log("Database seed completed successfully.");
}

main()
  .catch((error: unknown) => {
    console.error("Database seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
