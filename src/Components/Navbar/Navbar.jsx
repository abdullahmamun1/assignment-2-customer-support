import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="px-5 md:px-[100px] navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="font-bold text-black text-sm md:text-3xl">
          CS — Ticket System
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal hidden lg:flex px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <a
          href=""
          className="button text-white text-sm md:text-md px-4 py-2 rounded-lg"
        >
          <span className="text-sm mr-1">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          New Ticket
        </a>
      </div>
    </div>
  );
};

export default Navbar;
