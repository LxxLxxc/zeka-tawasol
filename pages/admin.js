export default function Admin() {
  const users = ['User1', 'User2', 'User3'];

  return (
    <div style={{ padding: '40px' }}>
      <h2>Admin Panel 🔐</h2>
      <p>Manage users, apps, and platform settings.</p>
      <h4>Registered Users:</h4>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
