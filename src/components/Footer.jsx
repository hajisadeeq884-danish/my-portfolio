function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>&lt;</span>
            YN
            <span>/&gt;</span>
          </a>

          <p>
            Building the web, securing what's next.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/hajisadeeq884-danish"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/danish-sadeeq-shah-922b453a0"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:hajisadeeq884@gmail.com">
            Email ↗
          </a>

            <a
              href="https://wa.me/916006606534"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Danish Sadeeq Shah
        </span>

        <span>
          Built with React
        </span>
      </div>

    </footer>
  );
}

export default Footer;