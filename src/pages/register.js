import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    // محاكاة إنشاء الحساب
    if (email && password) {
      alert('Account created');

      // محاكاة تحديد الدور بناءً على البريد
      const role = email.includes('admin') ? 'admin' : email.includes('mod') ? 'moderator' : 'user';

      // حفظ البيانات مؤقتًا
      localStorage.setItem('userRole', role);
      localStorage.setItem('userName', email.split('@')[0]);

      router.push('/dashboard');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '40px' }}>
        <h2>Create Account</h2>
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
        <button onClick={handleRegister}>Register</button>
      </div>
      <FloatingAIIcon />
    </>
  );
}
