import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Admin.css';
function Login() {
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (pass === 'admin123') {
      navigate('/admin');
    } else {
      alert('Wrong password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
