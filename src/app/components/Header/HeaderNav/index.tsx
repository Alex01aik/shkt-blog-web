"use client";

import Link from "next/link";
import "./styles.css";
import { isAllowForRole } from "@/app/shared/isAllowForRole";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HeaderNav: React.FC = () => {
  const path = usePathname();
  const [isAllow, setIsAllow] = useState<boolean>(isAllowForRole(["Admin"]));
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    setIsShow(false);
    setIsAllow(isAllowForRole(["Admin"]));
  }, [path]);

  return (
    <>
      <nav id="desktopNav">
        {isAllow && (
          <Link className="button" href="/admin/posts">
            Admin Panel
          </Link>
        )}
        <Link className="button" href="/">
          Home
        </Link>
        <Link className="button" href="/about">
          About
        </Link>
      </nav>
      <Image
        id="burger"
        className="button"
        src="/burger.svg"
        width={24}
        height={24}
        alt="menu"
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      />
      {isShow && (
        <div id="mobileNavContainer">
          <nav id="mobileNav">
            {isAllow && (
              <Link
                className="button"
                href="/admin/posts"
                onClick={() => setIsShow(false)}
              >
                Admin Panel
              </Link>
            )}
            <Link className="button" href="/" onClick={() => setIsShow(false)}>
              Home
            </Link>
            <Link
              className="button"
              href="/about"
              onClick={() => setIsShow(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default HeaderNav;
