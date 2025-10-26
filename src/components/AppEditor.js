import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AppEditor({ app }) {
  const [features, setFeatures] = useState(app.features || []);
  const [status, setStatus] = useState(app.status || 'Draft');

  const toggleFeature = (feature) => {
    const updated = features.includes(feature)
      ? features.filter((f) => f !== feature)
      : [...features, feature];

    setFeatures(updated);

    axios.post('/api/apps/update', {
      projectName: app.projectName,
      features: updated
    }).catch((err) => {
      console.error('Failed to update features:', err);
    });
  };

  const toggleStatus = () => {
    const newStatus = status === 'Published' ? 'Draft' : 'Published';
    setStatus(newStatus);

    axios.post('/api/apps/update', {
      projectName: app.projectName,
      status: newStatus
    }).catch((err) => {
      console.error('Failed to update status:', err);
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h4>🛠️ Edit Features for {app.projectName}</h4>
      {['Chat', 'Notifications', 'Payments', 'Analytics'].map((feature) => (
        <div key={feature}>
          <label>
            <input
              type="checkbox"
              checked={features.includes(feature)}
              onChange={() => toggleFeature(feature)}
            />
            {feature}
          </label>
        </div>
      ))}
      <p><strong>Current Features:</strong> {features.join(', ')}</p>
      <p><strong>Status:</strong> {status}</p>
      <button onClick={toggleStatus} style={{ marginTop: '10px' }}>
        {status === 'Published' ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
}
