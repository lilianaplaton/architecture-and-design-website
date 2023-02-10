import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Intrebari from './pages/Intrebari';
import Portofoliu from './components/Portofoliu';
import NotFound404 from './pages/NotFound404';
import CookiePolicy from './pages/legal/CookiePolicy';
import ConfidentialityPolicy from './pages/legal/ConfidentialityPolicy';
import TermsAndConditions from './pages/legal/TermsAndConditions';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return <>
    <Header />

    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="intrebari" element={<Intrebari />} />
        <Route path="portofoliu" element={<Portofoliu />} />
        <Route path="legal">
          <Route path="cookie" element={<CookiePolicy />} />
          <Route path="confidentialitate" element={<ConfidentialityPolicy />} />
          <Route path="termeni-si-conditii" element={<TermsAndConditions />} />
        </Route>

        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
    <Footer />
    <SmoothScroll />
  </>
}
