import VerifiedBadge from './VerifiedBadge';

export default function Comment({ author, role, text }) {
  return (
    <div style={{ padding: '5px 10px', borderTop: '1px solid #eee' }}>
      <p>
        <strong>{author}</strong>
        <VerifiedBadge role={role} />: {text}
      </p>
    </div>
  );
}
