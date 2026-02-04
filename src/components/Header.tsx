import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import DarkModeToggle from './DarkModeToggle';

type HeaderProps = {
  heroRef: React.RefObject<HTMLElement | null>;
};

export default function Header({ heroRef }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight ?? 0;

      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      }

      setPastHero(currentScrollY > heroHeight - 80);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, heroRef]);

  return (
    <header
      aria-label="Site navigation"
      className={
        `header fixed top-0 right-0 left-0 z-50 flex justify-end px-4 py-4 md:py-6 md:px-6 transition-all duration-300 ease-in-out
         ${visible ? 'translate-y-0' : '-translate-y-full'}
         ${pastHero ? 'bg-neutral-100 dark:bg-zinc-900 backdrop-blur-md' : 'bg-transparent'}
`}>
      <DarkModeToggle />
      <LanguageSwitcher />
    </header>

  );
}
