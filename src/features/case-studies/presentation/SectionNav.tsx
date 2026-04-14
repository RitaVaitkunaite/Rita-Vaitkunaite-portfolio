import { useState, useEffect } from 'react';
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 80);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : ''}`}>
      <div className={styles.links}>
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${styles.link} ${activeId === section.id ? styles.active : ''}`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SectionNav;
