import './index.css'

export default function TopSection() {
  return (
    <div className="container-top-section">
      <section className="header-top">
        <p className="greetings-top">Hi there! My name is</p>
        <h4 className="name">Romain BASLY.</h4>
        <p className="description">Fullstack Developer based in Paris.</p>
        <p className="goal">Specialized in ReactJS / NextJS and NodeJS.</p>
      </section>
      <section className="buttons-container-about">
        <a href="/projects">
          <button className="show-me">Show me some projects</button>
        </a>
        <a
          className="resume-container"
          href="/CV/CV_Romain_Basly_septembre2024.pdf"
          download
        >
          <button className="resumé">Download my resume</button>
        </a>
      </section>
    </div>
  )
}
