import { useState } from 'react';
import NewPost from './NewPost';

export default function ChatBox() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [posts, setPosts] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { sender: 'You', text: message }]);
      setMessage('');
    }
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={{ border: '1px solid #aaa', padding: '10px', marginTop: '20px' }}>
      <h3>Live Chat</h3>
      <div style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '10px' }}>
        {chat.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '80%' }}
      />
      <button onClick={sendMessage} style={{ marginLeft: '10px' }}>Send</button>

      <div style={{ marginTop: '20px' }}>
        <h4>Quick Post</h4>
        <NewPost onPost={addPost} />
        {posts.map((post, index) => (
          <p key={index}><strong>{post.author}:</strong> {post.content}</p>
        ))}
      </div>
    </div>
  );
}
