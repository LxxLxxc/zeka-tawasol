export default function Store() {
  const apps = [
    { name: 'AI Portfolio', creator: 'User1' },
    { name: 'Smart Blog', creator: 'User2' }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>App Store 🛍️</h2>
      <ul>
        {apps.map((app, index) => (
          <li key={index}>
            <strong>{app.name}</strong> by {app.creator}
            <button style={{ marginLeft: '10px' }}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
