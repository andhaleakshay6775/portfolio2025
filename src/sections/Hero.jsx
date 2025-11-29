import '../styles/Hero.css';

export default function Hero() {
  const previewResume = () => {
    window.open('/Akshay_Andhale_Resume.pdf', 'Akshay_Andhale_Resume');
  };

  return (
    <section id="hero">
      <div className="hero-image"></div>

      <div className="hero-content">
        <h2>Hi, I’m Akshay Andhale</h2>
        <p>SDET</p>

        <div className="hero-buttons">
          <button className="preview-btn" onClick={previewResume}>
            Preview Resume
          </button>
          <a href="/Akshay_Andhale_Resume.pdf" download="Akshay_Andhale_Resume.pdf">
            <button className="download-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}
