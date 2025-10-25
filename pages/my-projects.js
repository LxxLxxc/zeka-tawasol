export default function MyProjects() {
  const projects = [
    { name: 'Chat App', status: 'Published' },
    { name: 'AI Blog Generator', status: 'Draft' }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>📁 My Projects</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> – {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
