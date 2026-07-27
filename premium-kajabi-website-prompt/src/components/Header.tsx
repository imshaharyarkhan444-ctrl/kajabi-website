import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Resources", href: "/resources" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "glass shadow-sm py-3"
          : "bg-transparent py-5"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl font-semibold tracking-tight text-dark-text transition-colors hover:text-deep-olive"
          aria-label="Jennifer Powell Coaching — Home"
        >
          Jennifer Powell
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors duration-200",
                  location.pathname === link.href
                    ? "text-deep-olive"
                    : "text-light-text hover:text-dark-text"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-deep-olive px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#4a5e51] hover:shadow-lg hover:shadow-deep-olive/20"
            >
              Book a Call
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-dark-text transition-colors hover:bg-sand lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] z-40 flex flex-col bg-warm-white transition-transform duration-400 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <ul className="flex flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "block rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-sand text-deep-olive"
                    : "text-dark-text hover:bg-sand/50"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              to="/contact"
              className="btn-ripple block rounded-full bg-deep-olive px-6 py-3.5 text-center text-lg font-semibold text-white transition-all hover:bg-[#4a5e51]"
            >
              Book a Call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
