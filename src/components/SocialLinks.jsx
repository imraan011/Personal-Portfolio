/**
 * @component SocialLinks
 * @description Renders group of interactive social links using inline SVG icons.
 */
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { personalInfo } from '../data/personalInfo';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: personalInfo.contact.socials.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: personalInfo.contact.socials.linkedin, icon: LinkedInIcon },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl border border-surface-3 flex items-center justify-center text-text-muted hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 group relative overflow-hidden"
          title={label}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Icon size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
