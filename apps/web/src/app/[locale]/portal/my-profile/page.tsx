import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { ProfileForm } from "@/components/portal/profile-form";

export const instant = false;

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const locale = await getLocale();

  if (!user) {
    redirect(`/${locale}/auth/signin`);
  }

  return <ProfileForm user={user} locale={locale} />;
}