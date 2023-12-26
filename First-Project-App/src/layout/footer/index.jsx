import './index.css'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footerYDiv">
            <nav>
              <ul>
                <li>
                  <a href="Passages">Passages of Lorem Ipsum available</a>
                </li>
                <li>
                  <a href="Call">Call:+012334567890</a>
                </li>
                <li>
                  <a href="Gmail">demo@gmail.com</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footerADiv">
            <div className="wrapper">
              <div className="input-data">
                <input type="email" className="input" placeholder="Enter your email" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer