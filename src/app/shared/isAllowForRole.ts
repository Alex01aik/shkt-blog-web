import { getRole } from "./getRole";

export const isAllowForRole = (roles?: string[]): boolean => {
  let isAllow = false;

  if (roles?.length) {
    const tokens = localStorage.getItem("tokens");
    if (tokens) {
      const role = getRole(tokens);

      if (role) {
        isAllow = roles.includes(role);
      }
    }
  } else {
    isAllow = true;
  }

  return isAllow;
};
