'use client';
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [persona, setPersona] = useState('Agent abcd (Sales)');
  const [showDropdown, setShowDropdown] = useState(false);

  const personas = ['Agent abcd (Sales)', 'Agent xyz (Support)', 'Agent 123 (Admin)'];

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.brand}>🤖 Wallpaper CRM</div>
       
       <div className={styles.persona}>
        <label>Agent Persona:</label>
        <div className={styles.dropdown} onClick={() => setShowDropdown(!showDropdown)}>
          <span>{persona} ⬇</span>
          {showDropdown && (
            <ul className={styles.dropdownList}>
              {personas.map((p, i) => (
                <li key={i} onClick={() => { setPersona(p); setShowDropdown(false); }}>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
       </div>
      </div>

      <div className={styles.profile}>
        <button title="Notifications">🔔</button>
        <button title="Settings">⚙️</button>
        <button title="User Profile">👤</button>
      </div>
    </div>
  );
}
