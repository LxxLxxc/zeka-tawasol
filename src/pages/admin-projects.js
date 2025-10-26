import AdminProjects from '../components/AdminProjects';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function AdminProjectsPage() {
  const role = 'admin'; // أو 'moderator' حسب تسجيل الدخول

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <AdminProjects />
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
