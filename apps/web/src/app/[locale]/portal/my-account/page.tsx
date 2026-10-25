import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { AccountForm } from "@/components/portal/account-form";

export const instant = false;

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const locale = await getLocale();

  if (!user) {
    redirect(`/${locale}/auth/signin`);
  }

  return <AccountForm user={user} locale={locale} />;
}