import { auth } from './firebase';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          // Handle successful login
        })
        .catch(error => {
          // Handle login error
        });
    };
  
    return (
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  
  export default Login;
  