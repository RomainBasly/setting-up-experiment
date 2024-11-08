import './index.css'

export default function TopSection() {
  return (
    <div className="container-top-section">
      <section className="header-top">
        <p className="greetings-top">Hi there! My name is</p>
        <h4 className="name">Romain BASLY.</h4>
        <p className="description">I build stuff on the internet</p>
        <p className="goal">
          I am looking for a job in web project management: IT Project Manager,
          Product Owner, Product Manager.
        </p>
      </section>
      <section className="buttons-container-about">
        <a href="/projects">
          <button className="show-me">Show me some projects</button>
        </a>
        <a
          className="resume-container"
          href="/assets/Images/image-resume.png"
          download
        >
          <button className="resumé">Download my resume</button>
        </a>
      </section>
    </div>
  )
}
