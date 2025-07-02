import styles from './TopFilters.module.css';

export default function TopFilters() {
  return (
    <div className={styles.filters}>
      <div className={styles.leftFilters}>
        <input type="text" placeholder="Search by contact name or phone..." />
        <select><option>All Agents</option></select>
        <select><option>All Status</option></select>
        <select><option>Last 7 days</option></select>
      </div>
      <div>
        <button className={styles.export}>⬇ Export CSV</button>
      </div>
    </div>
  );
}
