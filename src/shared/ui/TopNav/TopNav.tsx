import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNav.module.css';

function TopNav() {
  const [copied, setCopied] = useState(false);
  const email = 'ritavaitkunaite@gmail.com';

  function handleEmailClick() {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>RITA VAITKŪNAITĖ</Link>
      <div className={styles.right}>
        <button className={styles.email} onClick={handleEmailClick}>
          {copied ? 'COPIED!' : email}
        </button>
        <a
          className={styles.contactBtn}
          href="https://www.linkedin.com/in/rita-vaitkūnaitė-62b0981b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  );
}

export default TopNav;
