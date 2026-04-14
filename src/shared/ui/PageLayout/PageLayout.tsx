import { useEffect } from 'react';
import styles from './PageLayout.module.css';

interface Props {
  children: React.ReactNode;
  variant?: 'hero' | 'scrollable';
  theme?: 'light';
}

function PageLayout({ children, variant = 'hero', theme }: Props) {
  useEffect(() => {
    if (variant === 'hero') {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      };
    }
  }, [variant]);

  const heroStyle = variant === 'hero'
    ? { backgroundImage: `url(${process.env.PUBLIC_URL}/cat1.jpeg)` }
    : {};

  return (
    <div
      className={variant === 'hero' ? styles.pageHero : styles.pageScroll}
      style={heroStyle}
      data-theme={theme}
    >
      {!theme && <div className={styles.vignette} aria-hidden="true" />}
      {children}
    </div>
  );
}

export default PageLayout;
