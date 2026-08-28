function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-label">
        ABOUT ME
      </div>

      <div className="about-content">
        <div>
          <h2>Turning ideas into useful solutions.</h2>
        </div>

        <div>
          <p>
            I'm Danish Sadeeq Shah, a B.Tech Computer Science Engineering
            student at Baba Ghulam Shah Badshah University (BGSBU). I'm
            focused on building modern web applications while developing
            my knowledge in Cyber Security and Networking.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and
            turning ideas into practical software.
          </p>
        </div>
      </div>

      <div className="about-focus-grid">

        <div className="focus-card">
          <span>01</span>
          <h3>FULL-STACK</h3>
          <p>
            Building modern and responsive web applications.
          </p>
        </div>

        <div className="focus-card">
          <span>02</span>
          <h3>SECURITY</h3>
          <p>
            Learning to build secure and reliable systems.
          </p>
        </div>

        <div className="focus-card">
          <span>03</span>
          <h3>NETWORKING</h3>
          <p>
            Exploring networks, infrastructure, and connectivity.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;