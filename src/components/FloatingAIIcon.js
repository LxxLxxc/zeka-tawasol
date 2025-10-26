import Link from 'next/link';

export default function FloatingAIIcon({ role }) {
  if (role !== 'admin' && role !== 'moderator') return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#0070f3',
      color: '#fff',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      zIndex: 999,
      transition: 'transform 0.2s ease-in-out',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Link href="/assistant">🤖</Link>
    </div>
  );
}
