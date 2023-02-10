interface Prop {
  href: string;
  children?: React.ReactNode;
}

export const ExternalLink: React.FC<Prop> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener">
    {children ?? href}
  </a>
);
