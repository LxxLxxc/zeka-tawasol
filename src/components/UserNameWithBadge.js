import VerifiedBadge from './VerifiedBadge';

export default function UserNameWithBadge({ name, role }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <strong>{name}</strong>
      <VerifiedBadge role={role} />
    </span>
  );
}
