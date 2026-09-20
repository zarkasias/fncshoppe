import SiteShell from "@/components/SiteShell";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteShell>
      <main>{children}</main>
    </SiteShell>
  );
}
