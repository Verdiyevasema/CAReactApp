import "./index.css";
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Electrochip</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to = "/about">About</NavLink>
              </li>
              <li>
                <NavLink to = "/products">Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
