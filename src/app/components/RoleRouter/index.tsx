"use client";

import { redirect } from "next/navigation";
import { getRole } from "@/app/shared/getRole";
import { isAllowForRole } from "@/app/shared/isAllowForRole";

export type RoleRouterProps = {
  children: React.ReactNode;
  roles?: string[];
};

const RoleRouter: React.FC<RoleRouterProps> = ({ children, roles }) => {
  const isAllow = isAllowForRole(roles);

  if (!isAllow) {
    redirect("/");
  }

  return children;
};

export default RoleRouter;
