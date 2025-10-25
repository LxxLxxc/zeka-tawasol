import Navbar from '../components/Navbar';
import Post from '../components/Post';
import ChatBox from '../components/ChatBox';
import PaymentButton from '../components/PaymentButton';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to ZekaTawasol 🧠</h1>
        <ChatBox />
        <PaymentButton />
        <div style={{ marginTop: '40px' }}>
          <h2>Latest Posts</h2>
          <Post author="User1" content="Just launched my AI app!" />
          <Post author="User2" content="Exploring ZekaTawasol features!" />
        </div>
      </main>
    </div>
  );
}
