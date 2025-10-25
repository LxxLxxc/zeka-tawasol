import { useState, useEffect } from 'react';
import ResetButton from './ResetButton';

export default function LayoutManager({ role }) {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    fetch('/api/layout')
      .then(res => res.json())
      .then(data => setLayout(data));
  }, []);

  const moveItem = (fromIndex, toIndex) => {
    const updated = [...layout];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setLayout(updated);

    fetch('/api/layout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>📐 ترتيب الواجهات</h3>
      <ul>
        {layout.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <button onClick={() => moveItem(index, index - 1)} disabled={index === 0}>⬆️</button>
            <button onClick={() => moveItem(index, index + 1)} disabled={index === layout.length - 1}>⬇️</button>
            <span style={{ marginLeft: '10px' }}>{item}</span>
          </li>
        ))}
      </ul>
      <ResetButton role={role} />
    </div>
  );
}
