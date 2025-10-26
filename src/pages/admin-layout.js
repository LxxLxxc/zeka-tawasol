import LayoutManager from '../components/LayoutManager';
import ResetButton from '../components/ResetButton';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function AdminLayoutPage() {
  const role = 'admin'; // أو 'moderator' حسب تسجيل الدخول

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>🧩 إدارة ترتيب الواجهات</h2>
        <LayoutManager role={role} />
      </div>
      <ResetButton role={role} />
      <FloatingAIIcon role={role} />
    </>
  );
}
