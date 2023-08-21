"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Item({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const className = pathname === href ? "border-b border-b-slate-400" : null;
  return (
    <li>
      <Link href={href} className={className}>
        {text}
      </Link>
    </li>
  );
}

export function Navigation() {
  return (
    <nav>
      <ul>
        <Item href="/" text="about" />
        <Item href="/links" text="links" />
      </ul>
    </nav>
  );
}
