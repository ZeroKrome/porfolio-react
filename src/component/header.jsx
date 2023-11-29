import { Link } from "react-router-dom";

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
            to="/contact"
          >
            contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
