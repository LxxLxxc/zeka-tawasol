import { useState } from 'react';
import ResetButton from './ResetButton';

export default function LayoutManager({ role }) {
  const [layout, setLayout] = useState([
    'الرئيسية', 'المتجر', 'المشاريع', 'المجموعات', 'المحادثات', 'البريد'
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updated = [...layout];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setLayout(updated);
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
