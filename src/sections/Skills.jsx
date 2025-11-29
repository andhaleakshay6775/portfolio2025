import skills from '../data/skills';
import '../styles/Skills.css';
import '../styles/Globals.css';

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
