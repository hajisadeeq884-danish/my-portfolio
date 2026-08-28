function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-label">
        SKILLS
      </div>

      <div className="skills-grid">
        <div className="skills-heading">
          <h2>
            Technologies I
            <br />
            <span>work with.</span>
          </h2>
        </div>

        <div className="skills-content">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p><div className="skill-tags">
               <span>HTML</span>
               <span>CSS</span>
               <span>JavaScript</span>
               <span>React</span>
               </div></p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p><div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              </div></p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p><div className="skill-tags">
              <span>Python</span>
              <span>JavaScript</span>
              </div></p>
          </div>

          <div className="skill-card">
            <h3>Security & Networking</h3>
            <p><div className="skill-tags">
              <span>Cyber Security</span>
              <span>Networking</span>
              <span>Linux</span>
              </div></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;