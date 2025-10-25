import { useState } from 'react';

export default function AppEditor({ app }) {
  const [features, setFeatures] = useState(app.features);

  const toggleFeature = (feature) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
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
    </div>
  );
}
