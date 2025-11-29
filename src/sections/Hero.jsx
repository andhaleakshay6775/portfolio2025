import '../styles/Hero.css';

export default function Hero() {
  const previewResume = () => {
    window.open(
      '/Akshay_Andhale_Resume.pdf', // PDF path in public folder
      'Akshay_Andhale_Resume'       // window name (optional)
    );
  };

  return (
    <section id="hero">
      <h2>Hi, I’m Akshay Andhale</h2>
      <p>SDET</p>

      <div className="hero-buttons">
        {/* Preview Resume Button */}
        <button className="preview-btn" onClick={previewResume}>
          Preview Resume
        </button>

        {/* Download Resume Button */}
        <a
          href="/Akshay_Andhale_Resume.pdf"
          download="Akshay_Andhale_Resume.pdf"
        >
          <button className="download-btn">Download Resume</button>
        </a>
      </div>
    </section>
  );
}
