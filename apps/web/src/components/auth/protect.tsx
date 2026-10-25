"use client";

import { ReactNode } from "react";
import { useAuth } from "@/hooks/use-auth";

interface ProtectProps {
    roles: string[];
    children: ReactNode;
    fallback?: ReactNode;
}

export function Protect({ roles, children, fallback = null }: ProtectProps) {
    const { user, loading } = useAuth();

    if (loading || !user) return null;

    const hasAccess = roles.includes(user.role) || user.roles.some((r) => roles.includes(r));

    if (!hasAccess) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}