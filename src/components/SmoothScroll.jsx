import { useEffect } from 'react';
import { useLocation } from "react-router-dom"

const SmoothScroll = () => {
  let location = useLocation();

  function scrollTo(location) {
    setTimeout(() => {
      let target;

      if (location.hash) {
        target = document.querySelector(location.hash);
      }

      if (target) {
        window.scrollTo(
          {
            top: target.offsetTop,
            behavior: 'smooth'
          });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  }

  useEffect(() => {
    scrollTo(location);
  }, [location]);
}

export default SmoothScroll;
