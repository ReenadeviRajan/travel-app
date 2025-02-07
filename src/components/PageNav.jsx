import styles from "./pagenav.module.css";
import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/app">Layout</NavLink>
        </li>
      </ul>
    </nav>
  );
}
