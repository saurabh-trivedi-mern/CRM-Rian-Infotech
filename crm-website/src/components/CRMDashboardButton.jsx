import styles from './CRMDashboardButton.module.css';
import Link from 'next/link';

export default function CRMDashboardButton() {
  return (
    <div className={styles.buttoncontainer}>
      <Link href="/crm-dashboard"><button className={styles.crmbutton}>📊 CRM Dashboard</button></Link>
    </div>
  );
}
