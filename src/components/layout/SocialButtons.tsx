import { siteConfig } from "@/content/site/config";

type SocialButtonsProps = {
  className?: string;
};

const iconClass = "h-4 w-4 shrink-0";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
      <path
        fill="currentColor"
        d="M14.2 20.5v-6.7h2.3l.3-2.5h-2.6V9.7c0-.7.2-1.2 1.3-1.2H17V6.2c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H9.5v2.5h2.4v6.7h2.3Z"
      />
    </svg>
  );
}

const links = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
] as const;

export function SocialButtons({ className = "" }: SocialButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ label, href, Icon }) =>
        href ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--brand-gold)_55%,var(--accent))] bg-surface/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-accent transition-colors hover:border-[var(--brand-gold)] hover:bg-[var(--brand-gold-soft)]"
          >
            <Icon />
            {label}
          </a>
        ) : null,
      )}
    </div>
  );
}
