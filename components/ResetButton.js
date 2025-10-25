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
        marginTop: '20px',
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      🔄 استعادة الإعدادات
    </button>
  );
}
