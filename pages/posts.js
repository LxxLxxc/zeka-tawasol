import { useState } from 'react';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';
import UserNameWithBadge from '../components/UserNameWithBadge';

export default function PostsPage() {
  const role = 'admin'; // أو أي دور آخر حسب تسجيل الدخول
  const [posts, setPosts] = useState([
    { author: 'User1', role: 'user1', content: 'Welcome to ZekaTawasol!' },
    { author: 'User2', role: 'user2', content: 'AI Builder is amazing!' }
  ]);

  const addPost = (newPost) => {
    setPosts([{ ...newPost, role: role }, ...posts]);
  };

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>📝 Community Posts</h2>
        <NewPost onPost={addPost} role={role} />
        {posts.map((post, index) => (
          <Post
            key={index}
            author={<UserNameWithBadge name={post.author} role={post.role} />}
            content={post.content}
          />
        ))}
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
