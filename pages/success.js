import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function Success() {
  const role = 'admin'; // أو أي دور آخر حسب تسجيل الدخول

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>✅ Payment Successful</h2>
        <p>Your AI app has been published successfully!</p>
        <a href="/dashboard" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          🔁 Go to Dashboard
        </a>
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
