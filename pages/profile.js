export default function Profile() {
  const user = {
    name: 'Taha',
    email: 'taha@example.com',
    role: 'Founder',
    appsBuilt: 3
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>👤 Your Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Apps Built:</strong> {user.appsBuilt}</p>
    </div>
  );
}
