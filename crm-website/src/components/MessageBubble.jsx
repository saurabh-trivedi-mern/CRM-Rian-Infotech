import styles from './MessageBubble.module.css';

export default function MessageBubble({ from, time, text }) {
  const isUser = from === 'user';
  return (
    <div className={`${styles.message} ${isUser ? styles.user : styles.ai}`}>
      <div className={styles.bubble}>
        <p>{text}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
}
