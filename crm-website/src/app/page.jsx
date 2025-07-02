import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ChatHeader from '@/components/ChatHeader';
import ChatWindow from '@/components/ChatWindow';
import InputBox from '@/components/InputBox';
import styles from './dashboard.module.css';
import { messages } from '@/lib/data';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.chatSection}>
          <ChatHeader contact="+91 82945 26021" />
          <ChatWindow messages={messages} />
          <InputBox />
        </div>
      </div>
    </div>
  );
}
