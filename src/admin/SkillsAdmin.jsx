import { useState } from 'react';
//import './SkillsAdmin.css'; // Optional if you want separate CSS
import '../styles/Admin.css';


export default function SkillsAdmin() {
  const [skills, setSkills] = useState(['Java', 'React']);
  const [newSkill, setNewSkill] = useState('');
  const [error, setError] = useState('');

  const addSkill = () => {
    if (!newSkill.trim()) {
      setError('Skill cannot be empty');
      return;
    }
    if (skills.includes(newSkill.trim())) {
      setError('Skill already exists');
      return;
    }
    setSkills([...skills, newSkill.trim()]);
    setNewSkill('');
    setError('');
  };

  const deleteSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  return (
    <div className="admin-container">
      <h2>Manage Skills</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      {skills.length === 0 ? (
        <p>No skills added yet.</p>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              <button onClick={() => deleteSkill(index)} style={{ backgroundColor: 'red' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
