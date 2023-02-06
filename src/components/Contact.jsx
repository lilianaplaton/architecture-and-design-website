import { Link } from 'react-router-dom';

export default function Contact() {
  return <section className="contact" id="contact">
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="personalinfo">
        <div className="media">
          <video src="/img/media/desktop.mp4" loop autoPlay muted></video>
          <img src="/img/mobile.svg" alt="" loading="lazy" />
        </div>
        <div className="info">
          <h4>Telefon</h4>
          <p>(+40) 749 817 422</p>
          <h4>Email</h4>
          <p>vhondesign@gmail.com</p>
          <h4>Locații</h4>
          <p><b>Cluj-Napoca</b><br />Str. Profesor Tudor Ciortea, nr.9</p><br />
          <p><b>Alba-Iulia</b><br />Sebeș, loc. Petrești, jud. Alba</p>
          <h4>Social media</h4>
          <ul className="icons">
            <li><a href="https://www.facebook.com/valentina.honceru" target="_blank"
                   rel="noreferrer"><i
              className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.linkedin.com/in/valentina-honceru-7b4740120/"
                   target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            </li>
            <li><a href="https://ro.pinterest.com/honceru/" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/valehonceru/" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-instagram"></i></a></li>
            <li><a href="mailto:vhondesign@gmail.com" target="_blank" rel="noreferrer"><i
              className="fa-solid fa-envelope"></i></a></li>
          </ul>

        </div>
      </div>

      {/* Newsletter */}
      <div className="form-container">
        <form action="#">
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Abonează-te pentru a primi cele mai recente noutăți.</p>
            <div className="newsletter-field">
              <i className="fa-solid fa-envelope"></i><input type="email" name="email"
                                                             placeholder="Adresa ta de email"
                                                             required />
              <button type="submit">Abonare</button>
            </div>
          </div>
        </form>

        {/* contact-form */}
        <form action="#">
          <div className="contact-form">
            <div className="field-box">
              <input className="field" type="text" name="name" placeholder="Nume" required />
              <input className="field" type="email" name="email" placeholder="Email" required />
              <input className="field" type="number" name="phone" placeholder="Telefon" required />
              <textarea className="field" name="message" placeholder="Mesaj" required
                        style={{ height: '100px' }} />
            </div>
            <div className="sendbtn">
              <button type="submit">Trimite</button>
              <div className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Am citit și sunt de acord cu <Link
                  to="/legal/confidentialitate" target="_blank"> <b>Politica
                  de confidențialitate</b> a site-ului.</Link></label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
}
