import Navbar from '../components/Navbar';
import Post from '../components/Post';
import ChatBox from '../components/ChatBox';
import PaymentButton from '../components/PaymentButton';
import FloatingAIIcon from '../components/FloatingAIIcon';
import UserNameWithBadge from '../components/UserNameWithBadge';

export default function Home() {
  const role = 'admin'; // أو أي دور آخر حسب تسجيل الدخول

  const posts = [
    { author: 'User1', role: 'user1', content: 'Just launched my AI app!' },
    { author: 'User2', role: 'user2', content: 'Exploring ZekaTawasol features!' }
  ];

  return (
    <>
      <Navbar role={role} />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to ZekaTawasol 🧠</h1>
        <ChatBox />
        <PaymentButton />
        <div style={{ marginTop: '40px' }}>
          <h2>Latest Posts</h2>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={<UserNameWithBadge name={post.author} role={post.role} />}
              content={post.content}
            />
          ))}
        </div>
      </main>
      <FloatingAIIcon role={role} />
    </>
  );
}
