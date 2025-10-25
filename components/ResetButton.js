export default function ResetButton({ role }) {
  const handleReset = async () => {
    const confirmed = confirm('هل تريد استعادة الترتيب الافتراضي؟');
    if (!confirmed) return;

    try {
      await fetch('/api/layout', { method: 'DELETE' });
      location.reload();
    } catch (err) {
      console.error('Reset failed:', err);
      alert('فشل الاستعادة.');
    }
  };

  if (role !== 'admin' && role !== 'moderator') return null;

  return (
    <button
      onClick={handleReset}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '10px 14px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        zIndex: 1000,
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease-in-out'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      🔄 استعادة الإعدادات
    </button>
  );
}
