import MessageBubble from './MessageBubble';
import styles from './ChatWindow.module.css';

export default function ChatWindow({ messages }) {
  return (
    <div className={styles.window}>
      {messages.map((msg, i) => (
        <MessageBubble key={i} {...msg} />
      ))}
    </div>
  );
}
