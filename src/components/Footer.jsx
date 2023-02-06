import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer">
          {/* <!--footer-1--> */}
          <div className="footer-heading footer-1">
            <Link to="/#home"><img src="/img/logo.svg" alt="logo" width="120px"/></Link>
            <a href="tel:40749817422">(+40) 749 817 422</a>
            <a href="https://www.vhondesign.ro">www.vhondesign.ro</a>
            <a href="mailto:vhondesign@gmail.com">vhondesign@gmail.com</a>
          </div>
          {/* <!--footer-2--> */}
          <div className="footer-heading footer-2">
            <h2>Legal</h2>
            <Link to="/legal/cookie">Politica cookies</Link>
            <Link to="/legal/termeni-si-conditii">Termeni și condiții</Link>
            <Link to="/legal/confidentialitate">Politica de confidențialitate</Link>
          </div>
          {/* <!--footer-3--> */}
          <div className="footer-heading footer-3">
            <h2>Social media</h2>
            <ul className="footer-icons">
              <li><a href="https://www.facebook.com/valentina.honceru" target="_blank"><i
                className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="https://www.linkedin.com/in/valentina-honceru-7b4740120/"
                     target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="https://ro.pinterest.com/honceru/" target="_blank"><i
                className="fa-brands fa-pinterest-p"></i></a></li>
              <li><a href="https://www.instagram.com/valehonceru/" target="_blank"><i
                className="fa-brands fa-instagram"></i></a></li>
              <li><a href="mailto:vhondesign@gmail.com" target="_blank"><i
                className="fa-solid fa-envelope"></i></a></li>
            </ul>
            <a href="#">Copyright &copy VHON, {new Date().getFullYear()}</a>
            <a href="https://lilianaplaton.github.io/Portfolio-website/" target="_blank">
              Dezvoltat de Liliana Platon
            </a>
          </div>
        </div>
      </div>
    </footer>
)
}
