import styles from './TopNav.module.css';

function TopNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <span className={styles.brand}>
          Rita Vaitkūnaitė
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.email}>ritavaitkunaite@gmail.com</span>
        <a
          href="https://www.linkedin.com/in/rita-vaitkūnaitė-62b0981b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </nav>
  );
}

export default TopNav;
