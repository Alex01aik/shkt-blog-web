import "./styles.css";
import HeaderNav from "./HeaderNav";
import LangToggler from "../LangToggler";

const Header: React.FC = () => {
  return (
    <header>
      <h1>SHAKITA BLOG</h1>
      <div id="tools">
        <HeaderNav />
        <LangToggler />
      </div>
    </header>
  );
};

export default Header;
