import styles from './HeroSection.module.css';

function HeroSection() {
  function handleMoreBelow(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={styles.hero}>
      <div className={styles.leftPanel}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>
            UX/UI designer fueled by research and one bossy cat
          </h1>
          <hr className={styles.subtitleDivider} />
          <p className={styles.star}>✳</p>
          <p className={styles.subtitle}>
            I research real problems before designing anything. Currently studying
            MSc in AI Solutions Management — and keeping one British Longhair in
            the lifestyle he expects.
          </p>
        </div>
        <div className={styles.bottomContent}>
          <a href="#projects" className={styles.moreBelow} onClick={handleMoreBelow}>PROJECTS BELOW</a>
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
