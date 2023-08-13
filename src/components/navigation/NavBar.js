import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import Logo from "../../images/logo.png";
import Cart from "../../images/cart-shopping-solid.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
        <NavLink className="navlink" exact to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="links-wrapper">
        <NavLink className="navlink" exact to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/products">
          Products
        </NavLink>
        <NavLink className="navlink" to="/about-us">
          About Us
        </NavLink>
        <NavLink className="navlink" to="/contact-us">
          Contact Us
        </NavLink>
        <NavLink className="cart-wrapper" to="/cart">
          <img src={Cart} alt="cart" />
        </NavLink>
      </div>
    </div>
  );
}
