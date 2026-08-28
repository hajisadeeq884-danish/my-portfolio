import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero section">

      <div className="hero-content">

        <div className="availability">
          <span></span>
            Available for internships & remote jobs
        </div>

        <h1>
          Building the web,
          <br />
          <span>securing what's next.</span>
        </h1>

        <p className="hero-description">
          I'm <strong>Danish Sadeeq Shah</strong>, a B.Tech Computer Science
          Engineering student at Baba Ghulam Badshah University (BGSBU)
          and an aspiring Full-Stack Developer interested in Cyber Security
          and Networking.
        </p>

        <div className="hero-buttons">

          <a href="https://studentportal-one-wheat.vercel.app/"
           className="btn primary">
            View Projects
            <ArrowUpRight size={18} />
          </a>

          <a href="mailto:hajisadeeq884@gmail.com" 
           className="btn secondary">
            Let's Connect
            <Mail size={18} />
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/hajisadeeq884-danish"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon">GH</span>
            GitHub
          </a>

          <a
            href="https:www.linkedin.com/in/danish-sadeeq-shah-922b453a0"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon">in</span>
            LinkedIn
          </a>

        </div>

      </div>

      <div className="code-card">

        <div className="code-header">

          <div className="window-buttons">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <small>developer.js</small>

        </div>

        <div className="code-content">

          <p>
            <span className="blue">const</span> developer = {"{"}
          </p>

          <p className="indent">
            name: <span className="green">"Danish Sadeeq Shah"</span>,
          </p>

          <p className="indent">
            role:{" "}
            <span className="green">
              "Full-Stack Developer"
            </span>,
          </p>

          <p className="indent">
            university:{" "}
            <span className="green">
              "BGSBU"
            </span>,
          </p>

          <p className="indent">
            focus: [
            <span className="green">"Web"</span>,
            <span className="green">"Security"</span>
            ],
          </p>

          <p className="indent">
            learning: <span className="blue">true</span>
          </p>

          <p>
            {"};"}
          </p>

          <p className="comment">
            // Build. Learn. Secure. Repeat.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;