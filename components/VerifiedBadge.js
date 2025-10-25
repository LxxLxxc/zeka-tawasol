export default function VerifiedBadge({ role }) {
  const colors = {
    admin: '#FFD700',       // ذهبية
    moderator: '#FF0000',   // حمراء
    user1: '#00BFFF',
    user2: '#32CD32',
    user3: '#9370DB',
    user4: '#FFA500',
    user5: '#FF69B4',
    user6: '#40E0D0',
    user7: '#A9A9A9',
    user8: '#4169E1',
    user9: '#006400',
    user10: '#D2B48C',
    user11: '#F0E68C',
    user12: '#87CEEB',
    user13: '#4B0082',
    user14: '#C71585',
    user15: '#808000',
    user16: '#2F4F4F',
    user17: '#6699CC',
    user18: '#B87333',
    user19: '#FF00FF',
    user20: '#98FB98',
    user21: '#7DF9FF',
    user22: '#E6E6FA',
    user23: '#F4A460',
    user24: '#DC143C',
    user25: '#8FBC8F'
  };

  const color = colors[role] || '#ccc';

  return (
    <span
      style={{
        display: 'inline-block',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: color,
        marginLeft: '6px',
        border: '1px solid #fff',
        boxShadow: '0 0 2px rgba(0,0,0,0.3)',
        verticalAlign: 'middle'
      }}
      title={`Verified: ${role}`}
    />
  );
}
