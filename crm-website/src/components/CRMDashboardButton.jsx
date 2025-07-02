import styles from './CRMDashboardButton.module.css';

export default function CRMDashboardButton() {
  return (
    <div className={styles.buttoncontainer}>
      <button className={styles.crmbutton}>📊 CRM Dashboard</button>
    </div>
  );
}
