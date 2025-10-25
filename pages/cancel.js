import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function Cancel() {
  const role = 'admin'; // أو 'moderator' أو أي دور آخر

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>❌ Payment Cancelled</h2>
        <p>Your payment was cancelled. You can try again anytime.</p>
        <a href="/ai-builder" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          🔙 Back to AI Builder
        </a>
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
