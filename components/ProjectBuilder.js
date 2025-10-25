import { useState } from 'react';
import axios from 'axios';

export default function ProjectBuilder() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBuild = async () => {
    if (!description.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('/api/ai', { prompt: `Build a full-stack app: ${description}` });
      setResult(res.data.result);
    } catch (err) {
      console.error('Build error:', err);
      setResult('Failed to generate project.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>🛠️ Build Your App</h3>
      <textarea
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your app idea, tech stack, or folder structure..."
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleBuild} disabled={loading}>
        {loading ? 'Building...' : 'Generate App'}
      </button>
      {result && (
        <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px' }}>
          <strong>AI Output:</strong>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}
