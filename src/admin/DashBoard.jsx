import { Link } from 'react-router-dom';

import '../styles/Admin.css';

export default function Dashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/skills">Manage Skills</Link><br />
      <Link to="/admin/projects">Manage Projects</Link><br />
      <Link to="/admin/resume">Manage Resume</Link>
    </div>
  );
}
