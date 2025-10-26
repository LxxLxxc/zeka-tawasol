import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // محاكاة تسجيل الدخول
    if (email && password) {
      alert('Login successful');

      // محاكاة تحديد الدور بناءً على البريد
      const role = email.includes('admin') ? 'admin' : email.includes('mod') ? 'moderator' : 'user';

      // حفظ الدور في التخزين المحلي (اختياري)
      localStorage.setItem('userRole', role);
      localStorage.setItem('userName', email.split('@')[0]);

      router.push('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <>
      <Navbar />
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
      <FloatingAIIcon />
    </>
  );
}
