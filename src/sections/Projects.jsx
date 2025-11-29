
import '../styles/Projects.css';


const projects = [
  {
    title: "Kentucky Eligibility System (KES)",
    description: `The Kentucky Eligibility System (KES) is a web-based insurance and healthcare eligibility platform developed for the Kentucky state government. 
It helps determine individuals' eligibility for various health programs such as Medicaid, SNAP, and other welfare services. The system handles 
data intake, eligibility evaluation, policy approvals, and renewals. 
As part of the QA automation team, I was responsible for ensuring the reliability and accuracy of critical application workflows by creating 
end-to-end automated test scripts.`,
    image: "/images/movie-app.png",
    github: "#",
    live: "#",
  },
  {
    title: "Dragon Application",
    description: `The Dragon Application is a comprehensive insurance platform developed by AWAC Services to streamline policy management, underwriting, and 
claims processing. It supports 11 different insurance categories, offering end-to-end digital solutions for agents, underwriters, and customers. 
The application ensures regulatory compliance and efficient policy lifecycle management.`,
    image: "/images/api-gateway.png",
    github: "#",
    live: "#",
  },
  {
    title: "CAFRAL (Centre for Advanced Financial Research and Learning)",
    description: `CAFRAL is an initiative by the RBI aimed at advancing financial research and training for banking and financial sector professionals. 
The system involves managing online courses, research papers, events, participant registrations, approvals, and reporting functionalities. 
The application supports multiple user roles including Admin, Participants, and Researchers.`,
    image: "/images/java-app.png",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
