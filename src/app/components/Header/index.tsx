import "./styles.css";
import LangToggler from "../LangToggler";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const HeaderNav = dynamic(() => import("./HeaderNav"), { ssr: false });

const Header: React.FC = () => {
  return (
    <header>
      <Link className="button" href="/">
        <h1>SHAKITA BLOG</h1>
      </Link>
      <div id="tools">
        <HeaderNav />
        <LangToggler />
        <Link className="button" href="/login">
          <Image src="/login.svg" width={12} height={12} alt="login" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
