import AIHelper from '../components/AIHelper';
import Navbar from '../components/Navbar';
import FloatingAIIcon from '../components/FloatingAIIcon';

export default function AssistantPage() {
  const role = 'admin'; // أو 'moderator' أو أي دور آخر

  return (
    <>
      <Navbar role={role} />
      <div style={{ padding: '40px' }}>
        <h2>🧠 Zeka Assistant</h2>
        <p>Talk to your AI assistant. Ask questions, get help, and execute tasks.</p>
        <AIHelper />
      </div>
      <FloatingAIIcon role={role} />
    </>
  );
}
