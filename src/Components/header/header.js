import "./header.css";
import HeaderLogo from "./header-logo.tsx";

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <HeaderLogo id="svg" />
        </div>

        <a className="link-header" href="#">
          Coffee house
        </a>
        <a className="link-header" href="#">
          Our coffee
        </a>
        <a className="link-header" href="#">
          For your pleasure
        </a>
      </header>
    </div>
  );
};

export default Header;
