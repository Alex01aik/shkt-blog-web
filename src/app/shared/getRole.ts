import jwt_decode from "jwt-decode";

export const getRole = (tokens: string): string => {
  const accessToken = JSON.parse(tokens).accessToken;
  const decoded = jwt_decode(accessToken);
  const role = (decoded as any).role;

  return role;
};
