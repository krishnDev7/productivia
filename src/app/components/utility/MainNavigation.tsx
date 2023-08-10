import Link from "next/link";
import React from "react";
import NavButton from "../ui/Nav-Button";
import classes from "./MainNavigation.module.css";
import home_icon from "@/app/Assets/Home_Icon.png";

export const MainNavigation: React.FC = (props) => {
  return (
    <nav className={classes.nav}>
      <div>Logo</div>
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
