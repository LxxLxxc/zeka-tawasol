import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';
import ProjectBuilder from '../components/ProjectBuilder';

export default function AIBuilderPage() {
  const role = 'admin'; // أو 'moderator'

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleBuild = async () => {
    if (!prompt.trim()) return;

    try {
      const response = await axios.post('/api/ai', { prompt });
      setResult(response.data.result);
    } catch (error) {
      console.error('AI build error:', error);
      setResult('Something went wrong.');
    }
  };

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>Build Your App with AI 🤖</h2>
        <textarea
          rows={4}
          placeholder="Describe the app you want to build..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button onClick={handleBuild}>Build Now</button>
        {result && (
          <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px' }}>
            <h4>AI Output:</h4>
            <pre>{result}</pre>
          </div>
        )}
        <ProjectBuilder role={role} />
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
