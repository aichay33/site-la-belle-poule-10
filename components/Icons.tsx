type IconProps = {
  className?: string;
};

export function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 4C11.5 4.7 6.3 8.6 5.1 16.6c6.5-.2 11.4-4.2 14.9-12.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20c3.6-6.8 7.9-10.7 13-11.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LocationIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11.5a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function HandshakeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.4 12.2 11 9.7a2.6 2.6 0 0 1 3.5-.1l.8.7a2.4 2.4 0 0 0 3.2-.1l1-.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3.2 9.8 4.2-4.1 4 4.1-4.2 4.1-4-4.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m16.6 13.9 1.7 1.7a1.4 1.4 0 0 1-2 2l-.4-.4a1.4 1.4 0 0 1-2 1.9l-.4-.4a1.4 1.4 0 0 1-2 1.8l-3.7-3.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m20.8 9.8-4.2-4.1-2.3 2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m4 7 8 6.4L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PeopleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.5 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2ZM15.8 11.2a2.7 2.7 0 1 0 0-5.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M3.6 19.2c.5-3.4 2.5-5.1 5-5.1s4.5 1.7 5 5.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M13.6 14.2c2.7.2 4.4 1.9 4.8 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function SproutIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 10C9 5.7 5.8 5.2 3.8 5.6c.4 3.7 2.5 5.8 6.1 6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11.4c3.7-.2 6.1-2.4 7-6.7-3.7-.1-6 1.5-7 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}
