import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/marketing/container";
import { FOOTER_COLUMNS } from "@/lib/marketing/home-data";

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-100"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F7F7F5]">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1.6fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-[0.18em] text-neutral-950"
            >
              GLAZE
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              AI-powered eyewear crafted for fit, style, and everyday clarity.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialIcon label="Instagram" href="#">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 fill-none stroke-current stroke-[1.75]"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href="#">
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="TikTok" href="#">
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M16.5 4c.5 1.9 1.8 3.4 3.5 4v2.6a7.2 7.2 0 0 1-3.5-1v5.7A5.8 5.8 0 1 1 10.7 9.6v2.5a3.3 3.3 0 1 0 2.3 3.1V4h3.5z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube" href="#">
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M22 12.2s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C18.4 5.4 12 5.4 12 5.4s-6.4 0-7.9.4c-.8.2-1.5.9-1.7 1.7C2 9 2 12.2 2 12.2s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM10 15.2v-6l5.2 3-5.2 3z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-neutral-950">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-950">Stay In Focus</p>
            <p className="mt-2 text-sm text-neutral-500">
              New drops, style tips, and exclusive offers.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-full border border-neutral-200 bg-white">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="m-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-colors hover:bg-neutral-800"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GLAZE. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/help" className="hover:text-neutral-900">
              Privacy Policy
            </Link>
            <Link href="/help" className="hover:text-neutral-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
