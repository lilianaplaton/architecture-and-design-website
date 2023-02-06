import { Link } from 'react-router-dom';

export default function Header() {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return <>
    <header>
      <nav className="navbar">
        <Link to="/#home"><img src="/img/logo.svg" alt="logo" width="160px" /></Link>
        <ul>
          <li><Link to="/#home">Home</Link></li>
          <li><Link to="/#despre">Despre</Link></li>
          <li><Link to="/#portofoliu">Portofoliu</Link></li>
          <li><Link to="/intrebari">Întrebări</Link></li>
        </ul>
        <Link to="/#contact" className="nav-contact">Contact</Link>
      </nav>

      {/* <!--navbar mobile-->*/}
      <div className="nav-toggle">
        <Link to="/#home">
          <img src="/img/logo.svg" alt="logo" width="150px" />
        </Link>
        <span onClick={openNav}>
        <img src="/img/open.svg" alt="" width="60px" />
      </span>
      </div>
    </header>

    {/* <!--sidenav mobile|toggle--> */}
    <div id="mySidenav" className="sidenav">
      <ul>
        <li>
          <a className="closebtn" onClick={closeNav}>
            <img src="/img/close.svg" alt="" width="60px" />
          </a>
        </li>
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#despre">Despre</Link></li>
        <li><Link to="/#portofoliu">Portofoliu</Link></li>
        <li><Link to="/intrebari">Întrebări</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </div>
  </>
}
