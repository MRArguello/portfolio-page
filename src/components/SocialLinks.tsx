import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

type SocialLinkProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
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
        href="https://www.linkedin.com/rosario-arguello"
        label={hero.links.linkedin}
        icon={<FaLinkedin />}
        variant={variant}
      />
      <SocialLink
        href="mailto:mrosario.arguello[at]gmail.com"
        label={hero.links.email}
        icon={<FaEnvelope />}
        variant={variant}
      />
    </div>
  );
}
