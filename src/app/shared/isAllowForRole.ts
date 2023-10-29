import { getRole } from "./getRole";

export const isAllowForRole = (roles?: string[]): boolean => {
  let isAllow = false;

  if (roles?.length) {
    try {
      const tokens = localStorage.getItem("tokens");
      if (tokens) {
        const role = getRole(tokens);

        if (role) {
          isAllow = roles.includes(role);
        }
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    isAllow = true;
  }

  return isAllow;
};
