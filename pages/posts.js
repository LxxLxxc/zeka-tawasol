import { useState } from 'react';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

export default function PostsPage() {
  const [posts, setPosts] = useState([
    { author: 'User1', content: 'Welcome to ZekaTawasol!' },
    { author: 'User2', content: 'AI Builder is amazing!' }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>📝 Community Posts</h2>
      <NewPost onPost={addPost} />
      {posts.map((post, index) => (
        <Post key={index} author={post.author} content={post.content} />
      ))}
    </div>
  );
}
