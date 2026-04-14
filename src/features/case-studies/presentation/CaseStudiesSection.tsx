import { Link } from 'react-router-dom';
import styles from './CaseStudiesSection.module.css';

function CaseStudiesSection() {
  return (
    <>
      {/* Floating pink accent tag */}
      <div className={styles.accentTag} aria-hidden="true">UX &amp; Research</div>

      {/* Post-it notes */}
      <div className={styles.postits}>
        <Link to="/case-studies/shadow-it" className={`${styles.postit} ${styles.postitYellow}`}>
          <div className={styles.postitLabel}>Case study I</div>
          <div className={styles.postitTitle}>Shadow IT Research</div>
          <div className={styles.postitMeta}>
            75+ Reddit threads<br />
            5 academic papers
          </div>
          <span className={styles.postitArrow} aria-hidden="true">→</span>
        </Link>

        <div className={`${styles.postit} ${styles.postitPink} ${styles.postitDisabled}`}>
          <div className={styles.postitLabel}>Case study II</div>
          <div className={styles.postitTitle}>Jira Onboarding</div>
          <div className={styles.postitMeta}>
            New hire first-login<br />
            Wireframes + Figma
          </div>
          <span className={styles.postitArrow} aria-hidden="true">→</span>
        </div>
      </div>
    </>
  );
}

export default CaseStudiesSection;
