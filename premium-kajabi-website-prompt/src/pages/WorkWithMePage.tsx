import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, ChevronUp, Users, User, Zap, Monitor, Globe } from "lucide-react";
import { cn } from "@/utils/cn";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const programs = [
  {
    icon: User,
    title: "One-on-One Coaching",
    tagline: "Deep, personalized support",
    who: "Childless stepmoms ready for focused 1:1 support as they navigate identity, grief, and belonging.",
    problem: "You feel like the odd one out in your own home. You're carrying grief you can't fully name, and you're not sure how to set boundaries without guilt.",
    solution: "Weekly or bi-weekly sessions blending nervous system tools, attachment-informed insight, and honest conversation. We work together to help you feel steadier, set boundaries, and reconnect with yourself.",
    benefits: [
      "Personalized coaching tailored to your family and story",
      "Weekly 60-minute sessions via Zoom",
      "Support between sessions",
      "Custom tools and resources",
      "Accountability check-ins and progress tracking",
      "3 or 6-month commitment options",
    ],
    pricing: "Investment discussed on your discovery call",
    cta: "Book a Discovery Call",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Group Coaching",
    tagline: "Community-powered support",
    who: "Stepmoms who want coaching support and a circle of women who truly get it.",
    problem: "You want support and accountability but often feel like no one in your life fully understands what you're navigating.",
    solution: "Small groups meet regularly for facilitated sessions. Each cohort includes group coaching, peer support, and access to all program materials.",
    benefits: [
      "Regular group sessions",
      "Curated peer community of childless stepmoms",
      "Access to all program materials and workbooks",
      "Private online community for support",
      "1:1 coaching sessions included",
      "Program with clear milestones",
    ],
    pricing: "Investment discussed on your discovery call",
    cta: "Join the Waitlist",
    href: "/contact",
  },
  {
    icon: Zap,
    title: "VIP Intensive Days",
    tagline: "A full day dedicated to your breakthrough",
    who: "Stepmoms who want meaningful progress on a specific challenge in a compressed timeframe.",
    problem: "You have a specific situation, conflict, or decision you need to work through but don't have time for a longer engagement.",
    solution: "A full day (in-person or virtual) completely focused on you. We dive deep into one area and you leave with clarity, a plan, and momentum.",
    benefits: [
      "Full-day intensive session (in-person or virtual)",
      "Pre-session discovery questionnaire",
      "Customized agenda based on your situation",
      "Post-session action plan and resources",
      "Follow-up check-in call",
      "Option to add additional days",
    ],
    pricing: "Investment discussed on your discovery call",
    cta: "Inquire Now",
    href: "/contact",
  },
  {
    icon: Monitor,
    title: "Digital Courses",
    tagline: "Self-paced learning with impact",
    who: "Self-motivated women who want access to coaching tools at their own pace.",
    problem: "You want support but need flexibility around timing and budget. You're looking for high-quality content you can work through on your own.",
    solution: "On-demand courses covering nervous system regulation, boundaries, and identity in blended families. Each course includes video lessons, workbooks, and exercises.",
    benefits: [
      "Self-paced video lessons (lifetime access)",
      "Downloadable workbooks and exercises",
      "Community discussion forum",
      "Live Q&A calls",
      "Certificate of completion",
      "30-day money-back guarantee",
    ],
    pricing: "Investment listed per course",
    cta: "Browse Courses",
    href: "/contact",
  },
  {
    icon: Globe,
    title: "The Circle Membership",
    tagline: "Ongoing support and community",
    who: "Anyone who wants continuous support and community in an affordable monthly format.",
    problem: "You want ongoing support but aren't ready for an intensive program. You crave community and consistent tools.",
    solution: "A monthly membership community with live workshops, guest experts, peer support, and a growing library of resources for stepmoms.",
    benefits: [
      "Monthly live workshop and Q&A",
      "Access to full resource library",
      "Private community forum",
      "Monthly workbook and reflection guide",
      "Guest expert sessions",
      "Cancel anytime",
    ],
    pricing: "Monthly membership",
    cta: "Learn More",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "How do I know which program is right for me?",
    a: "The best way to determine the right fit is to book a free discovery call. We'll discuss your situation, challenges, and preferences, and I'll recommend the program that will serve you best.",
  },
  {
    q: "Can I switch programs if my needs change?",
    a: "Absolutely. Many women start with a VIP Day to gain clarity, then transition to one-on-one coaching. Others begin with group coaching and later add individual sessions. Your journey is flexible.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, payment plans are available for all programs. We'll discuss options during your discovery call to find a plan that works for you.",
  },
  {
    q: "What if I need to reschedule a session?",
    a: "Life happens. I require 24-hour notice for rescheduling, and we'll work together to find an alternative time that works for both of us.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sand/80">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-serif text-lg font-medium text-dark-text transition-colors hover:text-deep-olive"
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? <ChevronUp size={20} className="shrink-0 text-deep-olive" /> : <ChevronDown size={20} className="shrink-0 text-light-text" />}
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", open ? "max-h-48 pb-5" : "max-h-0")}>
        <p className="leading-relaxed text-light-text">{a}</p>
      </div>
    </div>
  );
}

export default function WorkWithMePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(85,107,93,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive" {...fadeUp(0)}>
            Work With Me
          </motion.p>
          <motion.h1 className="mt-3 font-serif text-4xl font-medium text-dark-text sm:text-5xl" {...fadeUp(0.1)}>
            Choose the path that fits your journey
          </motion.h1>
          <motion.p className="mt-5 text-lg leading-relaxed text-light-text" {...fadeUp(0.2)}>
            Every coaching option is designed to meet you exactly where you are as a stepmom, and support you toward feeling steadier and more like yourself. Explore the options below to find your best fit.
          </motion.p>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((p, idx) => (
              <motion.div
                key={p.title}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                {...fadeUp(0)}
              >
                {/* Image */}
                <div className={`flex items-center justify-center ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={`/images/coaching-session.jpg`}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">{p.tagline}</p>
                  <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text">{p.title}</h2>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-text">Who It's For</h3>
                      <p className="mt-1 leading-relaxed text-light-text">{p.who}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-text">The Challenge</h3>
                      <p className="mt-1 leading-relaxed text-light-text">{p.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-dark-text">The Solution</h3>
                      <p className="mt-1 leading-relaxed text-light-text">{p.solution}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check size={18} className="mt-0.5 shrink-0 text-deep-olive" />
                        <span className="text-light-text">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 font-serif text-xl font-semibold text-deep-olive">{p.pricing}</p>

                  <Link
                    to={p.href}
                    className="btn-ripple mt-6 inline-flex items-center gap-2 self-start rounded-full bg-deep-olive px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#4a5e51] hover:shadow-xl hover:shadow-deep-olive/25"
                  >
                    {p.cta} <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">At a Glance</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Compare programs
            </h2>
          </motion.div>
          <motion.div className="mt-14 overflow-x-auto" {...fadeUp(0.2)}>
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-sand">
                  <th className="py-4 pr-8 font-serif text-lg font-semibold text-dark-text">Program</th>
                  <th className="py-4 px-4 text-center font-serif text-lg font-semibold text-dark-text">1:1</th>
                  <th className="py-4 px-4 text-center font-serif text-lg font-semibold text-dark-text">Group</th>
                  <th className="py-4 px-4 text-center font-serif text-lg font-semibold text-dark-text">VIP Day</th>
                  <th className="py-4 px-4 text-center font-serif text-lg font-semibold text-dark-text">Courses</th>
                  <th className="py-4 pl-4 text-center font-serif text-lg font-semibold text-dark-text">Membership</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Format", "1:1 sessions", "Group sessions", "Full-day intensive", "Self-paced", "Monthly"],
                  ["Duration", "3–6 months", "6 months", "1 day", "Lifetime access", "Monthly"],
                  ["Sessions", "Weekly", "Bi-weekly", "6 hours", "On-demand", "Monthly live"],
                  ["Community", "—", "✓", "—", "✓", "✓"],
                  ["Email Support", "✓", "✓", "30 days", "✓", "—"],
                  ["Investment From", "Custom", "Custom", "Custom", "Custom", "Custom"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-sand/50">
                    <td className="py-3 pr-8 font-medium text-dark-text">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-center text-light-text">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Common questions
            </h2>
          </motion.div>
          <motion.div className="mt-14" {...fadeUp(0.2)}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-deep-olive py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.h2 className="font-serif text-3xl font-medium text-white sm:text-4xl" {...fadeUp(0)}>
            Not sure which program is right for you?
          </motion.h2>
          <motion.p className="mt-4 text-lg leading-relaxed text-white/70" {...fadeUp(0.1)}>
            Let's talk. Book a free 30-minute discovery call and I'll help you find the perfect fit.
          </motion.p>
          <motion.div className="mt-8" {...fadeUp(0.2)}>
            <Link
              to="/contact"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-luxury-gold px-8 py-3.5 text-base font-semibold text-dark-text transition-all hover:bg-luxury-gold-light hover:shadow-xl hover:shadow-luxury-gold/25"
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
