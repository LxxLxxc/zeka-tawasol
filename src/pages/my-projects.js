import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';
import VerifiedBadge from '../components/VerifiedBadge';
import UserNameWithBadge from '../components/UserNameWithBadge';

export default function MyProjects() {
  const role = 'admin'; // أو أي دور آخر حسب تسجيل الدخول
  const user = { name: 'Taha', role };

  const projects = [
    { name: 'Chat App', status: 'Published' },
    { name: 'AI Blog Generator', status: 'Draft' }
  ];

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>📁 My Projects</h2>
        <p>
          Owner: <UserNameWithBadge name={user.name} role={user.role} />
        </p>
        <ul>
          {projects.map((p, i) => (
            <li key={i}>
              <strong>{p.name}</strong> – {p.status}
            </li>
          ))}
        </ul>
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
