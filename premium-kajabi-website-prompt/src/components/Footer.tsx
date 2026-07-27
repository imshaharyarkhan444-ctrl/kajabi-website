import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-dark-text text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-semibold tracking-tight text-white"
            >
              Jennifer Powell
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Coaching for childless stepmoms navigating identity, grief, and belonging — with honesty and heart.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-600 p-2 text-gray-400 transition-colors hover:border-luxury-gold hover:text-luxury-gold"
                aria-label="Follow on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-600 p-2 text-gray-400 transition-colors hover:border-luxury-gold hover:text-luxury-gold"
                aria-label="Connect on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Work With Me", href: "/work-with-me" },
                { label: "Resources", href: "/resources" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-luxury-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Stay Inspired
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Honest reflections and practical tools for stepmom life, delivered to your inbox.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-gray-600 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-soft-sage focus:outline-none"
              />
              <button
                type="submit"
                className="btn-ripple shrink-0 rounded-full bg-soft-sage px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-deep-olive hover:shadow-lg hover:shadow-deep-olive/20"
              >
                Join
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hello@jenniferpowellcoaching.com"
                  className="transition-colors hover:text-luxury-gold"
                >
                  hello@jenniferpowellcoaching.com
                </a>
              </li>
              <li>Based in Austin, TX</li>
              <li>Working with clients worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jennifer Powell Coaching. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="transition-colors hover:text-luxury-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-luxury-gold">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-gray-600 p-2 text-gray-400 transition-colors hover:border-luxury-gold hover:text-luxury-gold"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
