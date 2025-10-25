export default function AdminProjects() {
  const allProjects = [
    { user: 'Taha', name: 'Chat App', status: 'Published' },
    { user: 'Ali', name: 'Store Builder', status: 'Pending' }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>🛡️ Admin Project Panel</h2>
      <ul>
        {allProjects.map((p, i) => (
          <li key={i}>
            <strong>{p.user}</strong>: {p.name} – {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
