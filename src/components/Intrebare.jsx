import { useState } from 'react';

export default function Intrebare(props) {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => setActive(!isActive);

  return <>
    <div className={`faq ${isActive ? 'active' : ''}`} onClick={toggleActive}>
      <div className="question">
        <h3>{props.question}</h3>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className="answer">
        {props.children}
      </div>
    </div>
  </>;
}
