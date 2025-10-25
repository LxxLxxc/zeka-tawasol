import LayoutManager from '../components/LayoutManager';

export default function AdminLayoutPage() {
  const role = 'admin'; // أو 'moderator' حسب تسجيل الدخول

  return (
    <div style={{ padding: '40px' }}>
      <h2>🧩 إدارة ترتيب الواجهات</h2>
      <LayoutManager role={role} />
    </div>
  );
}
