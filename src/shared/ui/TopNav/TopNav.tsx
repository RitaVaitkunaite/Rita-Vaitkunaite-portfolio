import styles from './TopNav.module.css';

function TopNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <span className={styles.brand}>
          Rita Vaitkūnaitė
        </span>
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.links}>
          <a href="/">Work</a>
        </div>
      </div>
      <div className={styles.right}>
        <a
          href="https://www.linkedin.com/in/rita-vaitkūnaitė-62b0981b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <span className={styles.email}>ritavaitkunaite@gmail.com</span>
      </div>
    </nav>
  );
}

export default TopNav;
