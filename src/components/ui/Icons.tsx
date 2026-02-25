type Props = { className?: string };

export function IconLinkedIn({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.66H9.31V9h3.41v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.39v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
    </svg>
  );
}

export function IconGitHub({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

export function IconX({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.6l-5.17-6.77L5.5 22H2.4l7.25-8.28L.8 2h6.76l4.67 6.17L18.9 2zm-1.16 18h1.72L6.64 3.92H4.8L17.74 20z" />
    </svg>
  );
}

export function IconOpenSea({ className = "" }: Props) {
  // Simple wave + sail mark (minimal, not official trademark-perfect)
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c4.97 0 9 4.03 9 9 0 2.82-1.3 5.33-3.34 6.97-.2-2.8-2.09-5.26-4.84-6.05V3.2c-.27-.07-.54-.12-.82-.16V2zm-1.5 3.1v6.6c-1.78.46-3.27 1.68-4.04 3.32.74.62 1.7 1 2.74 1 1.5 0 2.83-.78 3.57-1.96.42.73 1.21 1.22 2.13 1.22 1.33 0 2.4-1.07 2.4-2.4 0-.33-.07-.65-.2-.95.9.5 1.56 1.35 1.78 2.37A8.97 8.97 0 0 1 12 20a9 9 0 0 1-7.94-4.77c.4-2.5 2.2-4.55 4.44-5.25V4.7c.64.1 1.26.23 1.99.4z" />
    </svg>
  );
}

export function IconMail({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16v12H4z" />
      <path d="M4 6l8 6 8-6" />
    </svg>
  );
}

export function IconCalendar({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}