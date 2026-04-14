import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.leftPanel}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>
            UX UI designer fueled by <span className={styles.underline}>research</span> and one <span className={styles.underline}>bossy</span> cat
          </h1>
          <p className={styles.subtitle}>
            I research real problems before designing anything. Currently studying
            MSc in AI Solutions Management — and keeping one British Longhair in
            the lifestyle he expects.
          </p>
        </div>
        <div className={styles.bottomContent}>
          <a href="#projects" className={styles.viewMyWork}>View my work</a>
          <hr className={styles.divider} />
        </div>
      </div>
      <div className={styles.rightPanel}>
        <img
          src={`${process.env.PUBLIC_URL}/cat3.png`}
          alt=""
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}

export default HeroSection;
