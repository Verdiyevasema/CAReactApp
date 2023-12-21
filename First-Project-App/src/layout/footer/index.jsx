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
            <div class="wrapper">
              <div class="input-data">
                <input type="email" class="input" placeholder="Enter your email" />
                <label for=""></label>
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