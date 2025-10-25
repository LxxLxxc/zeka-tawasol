import Comment from './Comment';
import VerifiedBadge from './VerifiedBadge';

export default function Post({ author, role = 'user', content }) {
  const comments = [
    { author: 'UserA', role: 'user2', text: 'Nice post!' },
    { author: 'UserB', role: 'moderator', text: 'Agreed!' }
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p>
        <strong>{author}</strong>
        <VerifiedBadge role={role} />
      </p>
      <p>{content}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button>Comment</button>
        <button>Like</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {comments.map((c, i) => (
          <Comment key={i} author={c.author} role={c.role} text={c.text} />
        ))}
      </div>
    </div>
  );
}
