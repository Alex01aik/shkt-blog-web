"use client";

import { redirect } from "next/navigation";
import { isAllowForRole } from "@/app/shared/isAllowForRole";
import { useEffect } from "react";

export type RoleRouterProps = {
  children: React.ReactNode;
  roles?: string[];
};

const RoleRouter: React.FC<RoleRouterProps> = ({ children, roles }) => {
  useEffect(() => {
    const isAllow = isAllowForRole(roles);

    if (!isAllow) {
      redirect("/");
    }
  }, [roles]);

  return children;
};

export default RoleRouter;
