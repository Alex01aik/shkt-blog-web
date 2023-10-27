"use client";

import Link from "next/link";
import "./styles.css";
import { isAllowForRole } from "@/app/shared/isAllowForRole";

const HeaderNav: React.FC = () => {
  const isAllow = isAllowForRole(["Admin"]);
  return (
    <nav>
      {isAllow && <Link href="/admin/posts">Admin Panel</Link>}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default HeaderNav;
