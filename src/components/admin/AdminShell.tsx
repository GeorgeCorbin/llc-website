import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import LogoutButton from "@/components/admin/LogoutButton";
import { Mail } from "lucide-react";

export default async function AdminShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  // Middleware already guards this, but double-check server-side for defense in depth.
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#EDEDED]/30 flex">
      <aside className="w-64 bg-white border-r border-[#EDEDED] flex flex-col">
        <div className="px-6 py-5 border-b border-[#EDEDED]">
          <span className="text-xl font-bold text-[#1A1A1A]">
            Corbin<span className="text-[#FF6B2C]">.</span>
          </span>
          <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#1A1A1A] font-medium hover:bg-[#FF6B2C]/10 hover:text-[#FF6B2C] transition-colors"
          >
            <Mail className="w-5 h-5" />
            Messages
          </Link>
        </nav>

        <div className="px-4 py-4 border-t border-[#EDEDED]">
          <p className="text-sm text-gray-500 mb-3 truncate">
            Signed in as <span className="font-medium text-[#1A1A1A]">{session.username}</span>
          </p>
          <LogoutButton />
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
