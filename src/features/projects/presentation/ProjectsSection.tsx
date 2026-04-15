import { Link } from 'react-router-dom';
import styles from './ProjectsSection.module.css';

function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.grid}>

        {/* LEFT — case study teaser */}
        <div className={styles.teaser}>
          <div className={styles.teaserTop}>
            <div className={styles.tagRow}>
              <span className={styles.tag}>UX Research</span>
              <span className={styles.year}>2025</span>
            </div>
            <h2 className={styles.title}>
              Why Won&apos;t they use the<br />
              <span className={styles.titleUnderline}>official system</span>?
            </h2>
            <p className={styles.description}>
              Why people inside organizations bypass the tools built to help
              them —<br />and what it would take to design something they&apos;d
              actually choose to use.
            </p>
          </div>
          <div className={styles.teaserBottom}>
            <Link to="/case-studies/shadow-it" className={styles.caseStudyLink}>
              Case study
            </Link>
          </div>
        </div>

        {/* RIGHT — key findings card */}
        <div className={styles.findingsCard}>
          <div className={styles.findingsHeaderRow}>
            <span className={styles.findingsHeaderText}>KEY FINDINGS</span>
          </div>
          <div className={styles.findingItem}>
            <span className={styles.findingNum}>[ 1 ]</span>
            <span>SHADOW IT IS A TRUST PROBLEM, NOT A TECHNOLOGY PROBLEM.</span>
          </div>
          <div className={styles.findingItem}>
            <span className={styles.findingNum}>[ 2 ]</span>
            <span>6 SOURCES. 6 ANSWERS. NO CONSENSUS AFTER 11 YEARS.</span>
          </div>
          <div className={styles.findingItem}>
            <span className={styles.findingNum}>[ 3 ]</span>
            <span>FINANCE IS THE ONLY LEVER SYSADMINS ACTUALLY TRUST.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
