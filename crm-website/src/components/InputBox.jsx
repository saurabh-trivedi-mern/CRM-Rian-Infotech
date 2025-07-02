import styles from './InputBox.module.css';

export default function InputBox() {
  return (
    <div className={styles.inputBox}>
      <button className={styles.attach}>📎</button>
      <input className={styles.input} placeholder="Type a message..." />
      <button className={styles.send}>➤</button>
    </div>
  );
}
