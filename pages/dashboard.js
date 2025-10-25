import Link from 'next/link';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';
import UserNameWithBadge from '../components/UserNameWithBadge';

export default function Dashboard() {
  const role = 'admin'; // أو 'moderator' أو أي دور آخر
  const user = { name: 'Taha', role: role };

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>Your Dashboard</h2>
        <p>
          Welcome back, <UserNameWithBadge name={user.name} role={user.role} />!<br />
          Manage your apps, payments, and AI builds here.
        </p>
        <ul>
          <li><Link href="/ai-builder">🚀 Build New App</Link></li>
          <li><Link href="/store">🛍️ View App Store</Link></li>
          <li><Link href="/admin">🔐 Admin Panel</Link></li>
        </ul>
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
