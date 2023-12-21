import "./index.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Electrochip</h1>
          <nav>
            <ul>
              <li>
                <a href="Home">HOME</a>
              </li>
              <li>
                <a href="About">ABOUT</a>
              </li>
              <li>
                <a href="Service">SERVICE</a>
              </li>
              <li>
                <a href="Service">BLOG</a>
              </li>
              <li>
                <a href="Service">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </header>

  );
}

export default Header;
