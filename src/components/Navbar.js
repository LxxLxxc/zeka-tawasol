import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar({ role = 'user' }) {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    fetch('/api/layout')
      .then(res => res.json())
      .then(data => setLayout(data));
  }, []);

  return (
    <nav style={{
      padding: '10px',
      background: '#f0f0f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div><strong>ZekaTawasol</strong></div>
      <div style={{ display: 'flex', gap: '15px' }}>
        {layout.map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase()}`}>{item}</Link>
        ))}
        {role === 'admin' || role === 'moderator' ? (
          <Link href="/admin">Admin</Link>
        ) : null}
      </div>
    </nav>
  );
}
