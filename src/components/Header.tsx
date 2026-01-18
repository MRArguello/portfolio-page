import { useEffect, useState } from "react"
import LanguageSwitcher from "./LanguageSwitcher"
import SocialLinks from "./SocialLinks"

type HeaderProps = {
  heroRef: React.RefObject<HTMLElement>
}

export default function Header({ heroRef }: HeaderProps) {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = heroRef.current?.offsetHeight ?? 0

      if (currentScrollY < lastScrollY) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false)
      }

      setPastHero(currentScrollY > heroHeight - 80)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, heroRef])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        flex justify-end items-center
        py-4 px-6
        bg-neutral-100 dark:bg-zinc-900
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center justify-between py-4 px-6 w-full">
          {pastHero &&
            <SocialLinks variant="icon"/>}
        <LanguageSwitcher />
      </div>
    </header>
  )
}
