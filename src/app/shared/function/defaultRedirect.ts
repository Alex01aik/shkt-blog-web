import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { getRole } from "../getRole";

export const defaultRedirect = (router: AppRouterInstance) => {
  const tokens = localStorage.getItem("tokens");
  if (tokens) {
    const role = getRole(tokens);
    if (role === "Admin") {
      router.push("/admin/posts");
    } else {
      router.push("/");
    }
  } else {
    router.push("/");
  }
};
