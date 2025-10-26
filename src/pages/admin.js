import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';
import UserNameWithBadge from '../components/UserNameWithBadge';

export default function Admin() {
  const role = 'admin'; // أو 'moderator'
  const users = [
    { name: 'User1', role: 'user1' },
    { name: 'User2', role: 'user2' },
    { name: 'User3', role: 'user3' }
  ];

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>Admin Panel 🔐</h2>
        <p>Manage users, apps, and platform settings.</p>
        <h4>Registered Users:</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <UserNameWithBadge name={user.name} role={user.role} />
            </li>
          ))}
        </ul>
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
