import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ padding: '40px' }}>
      <h2>Your Dashboard</h2>
      <p>Welcome back! Manage your apps, payments, and AI builds here.</p>
      <ul>
        <li><Link href="/ai-builder">Build New App</Link></li>
        <li><Link href="/store">View App Store</Link></li>
        <li><Link href="/admin">Admin Panel</Link></li>
      </ul>
    </div>
  );
}
