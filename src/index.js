import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from './admin/DashBoard';
import SkillsAdmin from './admin/SkillsAdmin';
import ProjectsAdmin from './admin/ProjectsAdmin';
import ResumeAdmin from './admin/ResumeAdmin'
import Login from './admin/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/skills" element={<SkillsAdmin />} />
        <Route path="/admin/projects" element={<ProjectsAdmin />} />
        <Route path="/admin/resume" element={<ResumeAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
