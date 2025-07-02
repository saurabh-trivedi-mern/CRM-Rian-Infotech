import styles from './CRMDashboardTable.module.css';

export default function CRMDashboardTable({ data }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Contacted Person</th>
            <th>Chat Link</th>
            <th>Action Taken</th>
            <th>Status</th>
            <th>Summary</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i}>
              <td>
                <div className={styles.person}>
                  <img src={entry.avatar} className={styles.avatar} alt="avatar" />
                  <div className={styles.personDetails}>
                    <strong>{entry.number}</strong>
                    <p>{entry.status}</p>
                  </div>
                </div>
              </td>
              <td><a className={styles.chatLink}>💬 View Chat</a></td>
              <td><span className={styles.badge}>{entry.action}</span></td>
              <td><span className={styles.status}>{entry.chatStatus}</span></td>
              <td className={styles.summary}>{entry.summary}</td>
              <td className={styles.updated}>{entry.updated}</td>
              <td><span className={styles.more}>⋯</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <p>Showing 1 to 5 of 25 entries</p>
        <div className={styles.pages}>
          <button>{'<'}</button>
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
          <button>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
