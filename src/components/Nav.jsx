import React from "react";
import { Link } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import "./componentStyles/Nav.css";

export const Nav = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="z-1 fixed left-0 right-0">
      <nav className="max-w-[1080px] m-auto pr-[2rem] pl-[2rem] pt-[1rem] pb-[1rem] flex justify-between">
        <div className="z-2 flex items-center" href="#hero">
          <Link to="#hero">
            <h1 className="text-[1.25rem] font-medium">
              {" "}
              &lt;<span className="text-[--color-main]">Bharath </span>/&gt;
            </h1>
          </Link>
        </div>
        <ul>
          <li>
            <a
              href="#about"
              className="uppercase text-[--color-header] link text-[0.8rem]"
            >
              <span className="uppercase text-[--color-main] link text-[0.8rem]">
                01.{" "}
              </span>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="uppercase text-[--color-header] link text-[0.8rem]"
            >
              <span className="uppercase text-[--color-main] link text-[0.8rem]">02. </span>Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="uppercase text-[--color-header] link text-[0.8rem]"
            >
              <span className="uppercase text-[--color-main] link text-[0.8rem]">03. </span>Contact
            </a>
          </li>
          <li>
            <div onClick={toggleTheme} className="text-[1.1rem] cursor-pointer">
              {theme === "light" ? <HiMoon /> : <HiSun />}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
