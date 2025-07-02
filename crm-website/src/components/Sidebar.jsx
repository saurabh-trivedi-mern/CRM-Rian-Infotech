import CRMDashboardButton from './CRMDashboardButton';
import styles from './Sidebar.module.css';
import { contacts } from '@/lib/data3';

export default function Sidebar() {

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1 className={styles.conversationsheading}>Conversations</h1>
        <h2 className={styles.createchat}>📝</h2>
      </div>
      <input className={styles.search} placeholder="Search conversations..." />
      <CRMDashboardButton />
      <div className={styles.contacts}>
        {contacts.map((contact, i) => (
          <div key={i} className={styles.contact}>
            <img src={contact.avatar} className={styles.contactProfile} alt="avatar" />
            <div>
                <strong>{contact.number}</strong>
                <p>{contact.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
