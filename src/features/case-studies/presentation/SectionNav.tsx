import styles from './SectionNav.module.css';

interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
  activeId: string;
}

function SectionNav({ sections, activeId }: Props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${styles.link} ${activeId === section.id ? styles.active : ''}`}
          >
            {activeId === section.id && (
              <span className={styles.num}>
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SectionNav;
