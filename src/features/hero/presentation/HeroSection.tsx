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
            UX/UI designer. Research first, screens second, cat always.
          </h1>
          <hr className={styles.subtitleDivider} />
          <p className={styles.star}>✳</p>
          <p className={styles.subtitle}>
            I study why things don&#8217;t work before I design anything new. Pursuing a master&#8217;s in AI Solutions Management because designing with AI means nothing if you don&#8217;t understand what&#8217;s underneath - the cat, naturally, has no interest in any of this but expects results regardless.
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
