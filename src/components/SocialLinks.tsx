import { type ReactNode, useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

type SocialLinkProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  variant: 'text' | 'icon';
};

const SocialLink = ({ href, label, icon, variant }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="
      hover:text-primary
      dark:hover:text-primary
      dark:text-secondary
      transition-colors
    "
  >
    {variant === 'icon' ? icon : label}
  </a>
);

// Email obfuscation: decode on client-side
// Using character codes to obfuscate
const decodeEmail = (): string => {
  // Simple character code array (obfuscated)
  const codes = [109, 114, 111, 115, 97, 114, 105, 111, 46, 97, 114, 103, 117, 101, 108, 108, 111, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109];
  return String.fromCharCode(...codes);
};

type SocialLinksProps = {
  variant?: 'text' | 'icon';
  className?: string;
};

export default function SocialLinks({
  variant = 'text',
  className,
}: SocialLinksProps) {
  const {
    content: { hero },
  } = useLanguage();
  const [emailHref, setEmailHref] = useState<string>('#');

  // Decode email on client-side only
  useEffect(() => {
    const decodedEmail = decodeEmail();
    setEmailHref(`mailto:${decodedEmail}`);
  }, []);

  return (
    <div
      className={`
        flex gap-6
        ${variant === 'icon' ? 'text-lg' : 'text-sm'}
        text-neutral-400
        ${className}
      `}
    >
      <SocialLink
        href="https://www.github.com/MRArguello"
        label={hero.links.github}
        icon={<FaGithub />}
        variant={variant}
      />
      <SocialLink
        href="https://www.linkedin.com/in/rosario-arguello"
        label={hero.links.linkedin}
        icon={<FaLinkedin />}
        variant={variant}
      />
      <SocialLink
        href={emailHref}
        label={hero.links.email}
        icon={<FaEnvelope />}
        variant={variant}
      />
    </div>
  );
}
