import Comment from './Comment';

export default function Post({ author, content }) {
  const comments = [
    { author: 'UserA', text: 'Nice post!' },
    { author: 'UserB', text: 'Agreed!' }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p><strong>{author}</strong></p>
      <p>{content}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button>Comment</button>
        <button>Like</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {comments.map((c, i) => (
          <Comment key={i} author={c.author} text={c.text} />
        ))}
      </div>
    </div>
  );
}
