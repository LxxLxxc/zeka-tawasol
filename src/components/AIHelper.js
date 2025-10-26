import { useState } from 'react';
import axios from 'axios';

export default function AIHelper() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const res = await axios.post('/api/ai', { prompt: input });
      setResponse(res.data.result);
    } catch (err) {
      console.error('AI error:', err);
      setResponse('Something went wrong.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>🤖 Ask Zeka AI</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
        style={{ width: '80%' }}
      />
      <button onClick={handleSend} style={{ marginLeft: '10px' }}>Send</button>
      {response && (
        <div style={{ marginTop: '15px', background: '#f1f1f1', padding: '10px' }}>
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
}
