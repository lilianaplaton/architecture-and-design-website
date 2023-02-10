import Despre from '../components/Despre';
import Portofoliu from '../components/Portofoliu';
import Contact from '../components/Contact';

export default function Home() {
  return <>
    <section className="home" id="home">

      <video src="/img/media/home.mp4" muted loop autoPlay></video>
      <div className="content">
        <div className="description">
          <h2>Servicii de arhitectură <br /> și design interior</h2>
          <a href="#portofoliu">Portofoliu</a>
        </div>
        <div className="social">
          <ul>
            <li><a href="https://www.facebook.com/valentina.honceru" target="_blank"
                   rel="noreferrer"><i
              className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.linkedin.com/in/valentina-honceru-7b4740120/"
                   target="_blank" rel="noreferrer"><i
              className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://ro.pinterest.com/honceru/" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/valehonceru/" target="_blank" rel="noreferrer"><i
              className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/40749817422" target="_blank" rel="noreferrer"><img
            src="/img/whatsapp.svg" /></a>
        </div>
      </div>
    </section>

    <Despre />

    <Contact />
    <Portofoliu/>
  </>
}
