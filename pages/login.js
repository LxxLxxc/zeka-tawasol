import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // محاكاة تسجيل الدخول
    if (email && password) {
      alert('Login successful');
      router.push('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Login to ZekaTawasol</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
