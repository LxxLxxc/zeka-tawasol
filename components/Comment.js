export default function Comment({ author, text }) {
  return (
    <div style={{ padding: '5px 10px', borderTop: '1px solid #eee' }}>
      <p><strong>{author}</strong>: {text}</p>
    </div>
  );
}
