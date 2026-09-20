import AdminLogoutButton from "@/components/admin/LogoutButton";
import { requireAdmin } from "@/lib/auth/admin";
import Logo from "@/components/global/logo";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />

          <AdminLogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-2 pb-4">{children}</main>
    </div>
  );
}
