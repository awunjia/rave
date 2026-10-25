import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { ClientDashboard } from "@/components/portal/dashboards/client-dashboard";
import { ConsultantDashboard } from "@/components/portal/dashboards/consultant-dashboard";
import { ReviewerDashboard } from "@/components/portal/dashboards/reviewer-dashboard";
import { AdminDashboard } from "@/components/portal/dashboards/admin-dashboard";
import { SuperAdminDashboard } from "@/components/portal/dashboards/super-admin-dashboard";

export const instant = false;

export default async function PortalDashboardPage() {
    const user = await getCurrentUser();
    const locale = await getLocale();

    if (!user) {
        redirect(`/${locale}/auth/signin`);
    }

    switch (user.role) {
        case "SUPER_ADMIN":
            return <SuperAdminDashboard user={user} locale={locale} />;
        case "ADMIN":
            return <AdminDashboard user={user} locale={locale} />;
        case "CONSULTANT":
            return <ConsultantDashboard user={user} locale={locale} />;
        case "REVIEWER":
            return <ReviewerDashboard user={user} locale={locale} />;
        case "CLIENT":
        default:
            return <ClientDashboard user={user} locale={locale} />;
    }
}