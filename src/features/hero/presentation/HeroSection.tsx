import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const NAV_ITEMS = [
  { label: 'Shadow IT Research', to: '/case-studies/shadow-it', numeral: 'I' },
  { label: 'Jira Onboarding', to: null, numeral: 'II' },
  { label: 'About', to: null, numeral: 'III' },
  { label: 'Process', to: null, numeral: 'IV' },
  { label: 'Research Method', to: null, numeral: 'V' },
  { label: 'Wireframes', to: null, numeral: 'VI' },
  { label: 'Figma Prototypes', to: null, numeral: 'VII' },
  { label: 'Contact', to: 'mailto:ritavaitkunaite@gmail.com', numeral: 'VIII' },
];

function HeroSection() {
  return (
    <div className={styles.heroBox}>
      <h1 className={styles.title}>
        The<br />
        Ren<em>ai</em>ssance<br />
        Portfolio
      </h1>
      <p className={styles.subtitle}>
        UX Designer · Crafting thoughtful digital experiences.<br />
        I design products that feel human.
      </p>

      <div className={styles.heroNav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map(item => (
            <li key={item.label}>
              {item.to ? (
                item.to.startsWith('mailto') ? (
                  <a href={item.to} className={styles.navLink}>
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.to} className={styles.navLink}>
                    {item.label}
                  </Link>
                )
              ) : (
                <span className={`${styles.navLink} ${styles.navLinkDisabled}`}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.numerals} aria-hidden="true">
          {NAV_ITEMS.map(item => (
            <span key={item.numeral}>{item.numeral}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
