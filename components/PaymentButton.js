export default function PaymentButton() {
  const handlePayment = () => {
    alert('Redirecting to payment...');
    // You can replace this with Stripe or other payment logic
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={handlePayment} style={{ padding: '10px 20px', background: '#0070f3', color: '#fff' }}>
        Publish Your Project 🚀
      </button>
    </div>
  );
}
