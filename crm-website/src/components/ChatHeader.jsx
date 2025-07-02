import styles from './ChatHeader.module.css';
import CRMDashboardButton from './CRMDashboardButton';
// import Image from 'next/image'

export default function ChatHeader({ contact }) {
  return (
    <div className={styles.header}>
      <div className={styles.contactContainer}>
        <img src="/user.png" className={styles.contactProfile} alt="avatar" />
        {/* <Image src="/user.png" className={styles.contactProfile} alt="avatar" /> */}
        <div>
            <p className={styles.contact}>{contact}</p>
            <p className={styles.status}>Online</p>
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <CRMDashboardButton />
        <div className={styles.actions}>
          <button>📞</button>
          <button>🎥</button>
        </div>
      </div>
    </div>
  );
}
