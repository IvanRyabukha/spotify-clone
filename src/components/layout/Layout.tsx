import type { PropsWithChildren } from "react";
import { RightSidebar } from "./right-sidebar/RightSidebar";
import { LeftSidebar } from "./left-sidebar/LeftSidebar";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen h-full grid grid-cols-[1fr_4fr_1.1fr]">
      <LeftSidebar />
      <main className="px-12 py-layout">
        {children}
      </main>
      <RightSidebar />
    </div>
  );
}
