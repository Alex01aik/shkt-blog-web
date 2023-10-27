import RoleRouter from "@/app/components/RoleRouter";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RoleRouter roles={["Admin"]}>{children}</RoleRouter>;
}
