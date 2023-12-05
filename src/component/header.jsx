import { Link } from "react-router-dom";
import MenuMobileOpen from "./lib/nav/menu-mobile-open.jsx";

const Header = () => {
  return (
    <header className="bg-zinc-700 text-white flex w-full justify-between h-18 items-center ">
      <div>
        <img src="/img/logo2.png" alt="logo" className="" />
      </div>
      <nav className="w-full">
        <ul className="md:flex hidden justify-around  ">
          <Link
            className="bg-sky-500 hover:bg-sky-700 rounded-lg w-20 text-center "
            to="/"
          >
            accueil
          </Link>
          <Link
            className="bg-sky-500 hover:bg-sky-700 rounded-lg w-24 text-center"
            to="/a-propos"
          >
            à-propos
          </Link>

          <Link
            className="bg-sky-500 hover:bg-sky-700 rounded-lg w-32 text-center"
            to="/experiences"
          >
            expériences
          </Link>
          <Link
            className="bg-sky-500 hover:bg-sky-700 rounded-lg w-20 text-center"
            to="/projet"
          >
            Projet
          </Link>
          <Link
            className="bg-sky-500 hover:bg-sky-700 rounded-lg w-20 text-center"
            to="mailto:kronnetv83390@gmail.com"
          >
            contact
          </Link>
        </ul>
      </nav>
      <MenuMobileOpen width={"24px"} height={"24px"} colors={"#FFFFFF"} />
    </header>
  );
};

export default Header;
