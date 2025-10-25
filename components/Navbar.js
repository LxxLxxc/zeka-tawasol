import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
      <div><strong>ZekaTawasol</strong></div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/ai-builder">AI Builder</Link>
        <Link href="/store">App Store</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
