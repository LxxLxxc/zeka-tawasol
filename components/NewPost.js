import { useState } from 'react';

export default function NewPost({ onPost }) {
  const [content, setContent] = useState('');
  const author = 'Taha';       // يمكن ربطه بـ user.name
  const role = 'admin';        // يمكن ربطه بـ user.role

  const handleSubmit = () => {
    if (content.trim()) {
      onPost({ author, role, content });
      setContent('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <textarea
        rows={3}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}
