export default function Post({ author, content }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p><strong>{author}</strong></p>
      <p>{content}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button>Comment</button>
        <button>Like</button>
      </div>
    </div>
  );
}
