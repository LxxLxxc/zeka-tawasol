import AppEditor from '../components/AppEditor';

export default function StorePage() {
  const apps = [
    {
      projectName: 'Chat App',
      user: 'Taha',
      features: ['Chat', 'Notifications'],
      icon: '💬',
      status: 'Published'
    },
    {
      projectName: 'AI Blog Generator',
      user: 'Taha',
      features: ['Analytics'],
      icon: '📝',
      status: 'Draft'
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>🛍️ Zeka App Store</h2>
      <p>Explore, manage, and customize your AI-generated apps.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {apps.map((app, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            background: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <h3>{app.icon} {app.projectName}</h3>
            <p><strong>Owner:</strong> {app.user}</p>
            <p><strong>Status:</strong> {app.status}</p>
            <AppEditor app={app} />
          </div>
        ))}
      </div>
    </div>
  );
}
