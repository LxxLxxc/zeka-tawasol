import Link from 'next/link';

export default function FloatingAIIcon() {
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
      zIndex: 999
    }}>
      <Link href="/assistant">🤖</Link>
    </div>
  );
}
