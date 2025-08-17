import React, { useState } from "react";

import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="/logo.png" alt="logo" className=" w-9 h-9 object-contain" />

          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span className="sm:block hidden">Shreyas | Kallurkar</span>
          </p>
        </Link>

        {/* Desktop Mode */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Mode */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative z-50">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <IoClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } fixed inset-0 z-40 bg-black bg-opacity-90 flex-col items-center justify-center gap-8`}
        >
          <ul className="list-none flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-purple-400" : "text-white"
                } font-poppins font-semibold cursor-pointer text-[22px] transition-colors duration-300 hover:text-purple-400`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
