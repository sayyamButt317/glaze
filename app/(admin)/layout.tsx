import type { ReactNode } from "react";
import { AdminShell } from "@/components/Layout/Admin/admin_layout";

export default function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
