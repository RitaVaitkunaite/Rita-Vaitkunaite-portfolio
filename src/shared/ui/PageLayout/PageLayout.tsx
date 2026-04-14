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

  return (
    <div
      className={variant === 'hero' ? styles.pageHero : styles.pageScroll}
      data-theme={theme}
    >
      {children}
    </div>
  );
}

export default PageLayout;
