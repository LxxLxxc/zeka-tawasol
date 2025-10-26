import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';
import UserNameWithBadge from '../components/UserNameWithBadge';

export default function Profile() {
  const role = 'admin'; // أو 'Founder' أو أي دور آخر
  const user = {
    name: 'Taha',
    email: 'taha@example.com',
    role: role,
    appsBuilt: 3
  };

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>👤 Your Profile</h2>
        <p><strong>Name:</strong> <UserNameWithBadge name={user.name} role={user.role} /></p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Apps Built:</strong> {user.appsBuilt}</p>
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
