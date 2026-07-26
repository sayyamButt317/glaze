"use client";

import { useEffect, useState, type ReactNode } from "react";
import Sidebar, {
  SidebarLayoutProvider,
  useSidebarLayout,
} from "@/components/custom/sidebr";
import { AdminHeader } from "@/components/admin/shell/admin-header";

function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMdUp(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMdUp;
}

function AdminMain({ children }: { children: ReactNode }) {
  const { contentOffset } = useSidebarLayout();
  const isMdUp = useIsMdUp();

  return (
    <div
      className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-[#F7F7F5] transition-[margin] duration-300 ease-out"
      style={{ marginLeft: isMdUp ? contentOffset : 0 }}
    >
      <AdminHeader />
      <main
        data-admin-scroll
        className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain"
      >
        {children}
      </main>
    </div>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const { documentElement: html, body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);

  return (
    <SidebarLayoutProvider>
      <div className="fixed inset-0 flex overflow-hidden bg-[#F7F7F5]">
        <Sidebar />
        <AdminMain>{children}</AdminMain>
      </div>
    </SidebarLayoutProvider>
  );
}
