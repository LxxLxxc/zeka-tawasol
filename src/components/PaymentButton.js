export default function PaymentButton({ role }) {
  const handlePayment = () => {
    alert('Redirecting to payment...');
    // Replace with actual payment logic (e.g., Stripe redirect)
  };

  if (role !== 'admin' && role !== 'moderator') return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={handlePayment}
        style={{
          padding: '10px 20px',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out'
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Publish Your Project 🚀
      </button>
    </div>
  );
}
