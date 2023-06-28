import { Metadata } from "next";
import { Separator } from "@/components/ui/Separator";
import { SidebarNav } from "@/components/admin/sidebar";

export const metadata: Metadata = {
  title: "Admin",
  description: "Manage your website",
};

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "users",
    href: "/admin/users",
  },
  {
    title: "create user",
    href: "/admin/users/create",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
];

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Manage your website</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
