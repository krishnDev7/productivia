import Link from "next/link";
import React from "react";
import NavButton from "../ui/Nav-Button";
import classes from "./MainNavigation.module.css";
import Image from "next/image";
import Productivia_Logo from "../../Assets/Productivia_Logo.png";

export const MainNavigation: React.FC = (props) => {
  return (
    <nav className={classes.nav}>
      <div >
        <Link href="/" className={classes.projectLogo}>
          <Image 
            src={Productivia_Logo}
            alt="Productivia Logo"
            width={75}
            height={75}
          />
          <p>Productivia</p>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <NavButton text="Home" />
          </Link>
        </li>
        <li>
          <Link href="/notes">
            <NavButton text="Notes" />
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <NavButton text="Todo" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
