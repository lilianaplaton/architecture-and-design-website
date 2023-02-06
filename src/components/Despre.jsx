export default function Despre() {

  // accordion for architecture and design section
  const faqs = document.querySelectorAll(".services");
  faqs.forEach(services => {
    services.addEventListener("click", () => {
      services.classList.toggle("active");
    })
  })

  return (
    <section className="despre" id="despre">
      <h1>Despre</h1>
      <div className="about-container">
        <div className="architecture-design">
          {/* <!--architecture--> */}
          <div className="services">
            <div className="question-services">
              <img src="/img/arhitectura.svg" alt="" className="arch" /> <i
              className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="answer-services">
              <p>Oferim servicii de arhitectură pentru toate fazele: CU, DTAC, SF, DALI, PTh, pentru
                funcțiuni rezidențiale, culturale, învățământ și spații publice.</p>
            </div>
          </div>
          {/* <!--design--> */}
          <div className="services">
            <div className="question-services">
              <img src="/img/design.svg" alt="" />
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="answer-services">
              <p>Concept și dezvoltarea proiectului tehnic pentru implementare, consultanță și
                asistență tehnică pe perioada implementării.</p>
            </div>
          </div>
        </div>
        {/* <!--about--> */}
        <div className="about">
          <p>
            <hr />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eligendi non, sit
            voluptatum nihil nemo, officiis maiores doloribus ducimus quas, totam esse
            consequuntur distinctio laudantium! Iste odit similique neque labore! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Illum eligendi atque amet,
            molestias cum unde? Ipsa laborum, consequatur recusandae ea repudiandae magnam quos
            obcaecati dolorem sapiente reprehenderit. Dolor, esse aliquam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            <hr />
          </p>
        </div>
        <img src="/img/avatar.png" loading="lazy" alt="avatar" className="avatar" />
      </div>
    </section>
  )
}
