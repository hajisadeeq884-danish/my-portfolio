function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-label">
        PROJECTS
      </div>

      <div className="projects-grid">

        <article className="project-card">
          <span className="project-number">01</span>

          <h2>Student Portal</h2>

          <p>
            A full-stack student management system designed to manage
            student information and provide a practical web-based platform.
          </p>

          <div className="tech-list">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

          <a
            href="https://studentportal-one-wheat.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Live Demo ↗
          </a>
        </article>


        <article className="project-card">
          <span className="project-number">02</span>

          <h2>Personal Portfolio</h2>

          <p>
            A responsive developer portfolio showcasing my skills,
            projects, education, and interests in web development,
            cybersecurity, and networking.
          </p>

          <div className="tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </article>


        <article className="project-card">
          <span className="project-number">03</span>

          <h2>Cybersecurity Projects</h2>

          <p>
            Practical cybersecurity and networking projects focused on
            understanding secure systems, Linux, networks, and security
            fundamentals.
          </p>

          <div className="tech-list">
            <span>Cyber Security</span>
            <span>Linux</span>
            <span>Networking</span>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Projects;