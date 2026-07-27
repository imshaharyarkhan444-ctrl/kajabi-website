import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  Sparkles,
  Heart,
  Target,
  Shield,
} from "lucide-react";
import { cn } from "@/utils/cn";

/* ───────────── Animations helpers ───────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, delay },
});

/* ───────────── FAQ Data ───────────── */
const faqs = [
  {
    q: "Who do you typically work with?",
    a: "I work with childless stepmoms — women navigating identity, grief, and belonging while building a life inside a blended family. Whatever brought you here, if you've ever felt like the odd one out in your own home, you're in the right place.",
  },
  {
    q: "How long does coaching typically last?",
    a: "Most women work with me for 3–6 months to build sustainable tools and a steadier sense of self. I offer 3-month and 6-month containers, with the option to extend. VIP Days are available for focused, intensive support.",
  },
  {
    q: "How is coaching different from therapy?",
    a: "Coaching is forward-focused and skills-based. While therapy often explores the past to heal, coaching helps you build nervous-system tools, name your patterns, and move toward the relationships and life you actually want — with support and accountability along the way.",
  },
  {
    q: "Do you offer virtual coaching sessions?",
    a: "Yes! All sessions are conducted virtually via Zoom, so I can work with women wherever they are.",
  },
  {
    q: "What is the investment for coaching?",
    a: "Investment varies by program. I invite you to book a discovery call so we can talk about your situation and find the option that's the best fit for you.",
  },
];

/* ───────────── Programs Data ───────────── */
const programs = [
  {
    title: "One-on-One Coaching",
    description:
      "Deep, personalized support for childless stepmoms ready to feel steadier in their identity and their home. 1:1 attention, nervous-system tools, and real accountability.",
    image: "/images/program-1.jpg",
    cta: "Learn More",
    href: "/work-with-me",
  },
  {
    title: "Group Coaching",
    description:
      "A supportive circle of stepmoms who get it, without you having to explain yourself. Group coaching combines expert guidance with the power of shared experience.",
    image: "/images/program-2.jpg",
    cta: "Explore",
    href: "/work-with-me",
  },
  {
    title: "VIP Intensive Days",
    description:
      "A full day dedicated entirely to you. We'll work through a specific challenge, create a roadmap, and leave you with clarity and an actionable plan.",
    image: "/images/program-3.jpg",
    cta: "Discover",
    href: "/work-with-me",
  },
];

/* ───────────── Testimonials Data ───────────── */
const testimonials = [
  {
    quote:
      "Working with Jennifer was the single best investment I've made in myself. Within three months, I had language for what I was feeling, stronger boundaries with my stepkids, and a real sense of who I am in this family.",
    name: "Sarah M.",
    role: "Stepmom of two",
    stars: 5,
  },
  {
    quote:
      "Jennifer has a gift for asking the right questions at the right time. She helped me navigate the grief I didn't know I was carrying, with so much warmth. I can't recommend her enough.",
    name: "Dani K.",
    role: "Childless stepmom",
    stars: 5,
  },
  {
    quote:
      "The VIP Day with Jennifer was exactly what I needed. I arrived feeling scattered and left with real tools and a plan. Worth every penny and more.",
    name: "Rachel T.",
    role: "Stepmom of three",
    stars: 5,
  },
];

/* ───────────── FAQ Item ───────────── */
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
        {open ? (
          <ChevronUp size={20} className="shrink-0 text-deep-olive" />
        ) : (
          <ChevronDown size={20} className="shrink-0 text-light-text" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-48 pb-5" : "max-h-0"
        )}
      >
        <p className="leading-relaxed text-light-text">{a}</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   HOMEPAGE
   ════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-warm-white pt-20">
        {/* Subtle background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(85,107,93,0.06),transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
          {/* Text Column */}
          <div className="space-y-8">
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive"
              {...fadeUp(0)}
            >
              Coaching for Childless Stepmoms
            </motion.p>
            <motion.h1
              className="font-serif text-4xl leading-tight font-medium text-dark-text sm:text-5xl lg:text-6xl"
              {...fadeUp(0.1)}
            >
              You're Not Alone, <br />
              <span className="text-deep-olive">And She Gets It</span>
            </motion.h1>
            <motion.p
              className="max-w-lg text-lg leading-relaxed text-light-text"
              {...fadeUp(0.2)}
            >
              I help childless stepmoms navigate identity, grief, and belonging —
              blending nervous system regulation, attachment theory, and emotional
              processing with honest, practical support.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              {...fadeUp(0.3)}
            >
              <Link
                to="/contact"
                className="btn-ripple inline-flex items-center gap-2 rounded-full bg-deep-olive px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#4a5e51] hover:shadow-xl hover:shadow-deep-olive/25"
              >
                Work With Me
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 rounded-full border border-deep-olive/30 px-8 py-3.5 text-base font-semibold text-deep-olive transition-all duration-300 hover:border-deep-olive hover:bg-deep-olive/5"
              >
                Download Free Guide
                <Download size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none"
            {...fadeIn(0.3)}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/hero-portrait.jpg"
                alt="Jennifer Powell — Coach for childless stepmoms"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative floating card */}
            <div className="glass absolute right-0 bottom-10 -mr-4 hidden rounded-2xl px-5 py-4 shadow-lg lg:block">
              <p className="text-sm font-semibold text-dark-text">500+</p>
              <p className="text-xs text-light-text">Stepmoms Supported</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST / ABOUT PREVIEW ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <motion.div className="space-y-6" {...fadeUp(0)}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
                Meet Jennifer
              </p>
              <h2 className="font-serif text-3xl font-medium text-dark-text sm:text-4xl">
                A coach who's honest, relatable, and gets it
              </h2>
              <p className="leading-relaxed text-light-text">
                My work blends nervous system regulation, attachment theory, and
                emotional processing with practical coaching, so it feels
                evidence-informed without ever feeling clinical. I bring genuine
                care to every relationship I'm part of.
              </p>
              <p className="leading-relaxed text-light-text">
                I believe every stepmom has the capacity to feel steadier and more
                herself, with the right support, tools, and understanding.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <p className="font-serif text-3xl font-semibold text-deep-olive">500+</p>
                  <p className="text-sm text-light-text">Stepmoms Supported</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-deep-olive">20k+</p>
                  <p className="text-sm text-light-text">Community Members</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-deep-olive">98%</p>
                  <p className="text-sm text-light-text">Client Satisfaction</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep-olive transition-colors hover:text-luxury-gold"
              >
                Read My Full Story <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div className="space-y-8" {...fadeUp(0.2)}>
              {/* Values */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Heart, title: "Authenticity", desc: "Show up as your true self, always." },
                  { icon: Target, title: "Clarity", desc: "Gain a clear vision for your path forward." },
                  { icon: Shield, title: "Integrity", desc: "Built on trust, honesty, and respect." },
                  { icon: Sparkles, title: "Growth", desc: "Continuous evolution, inside and out." },
                ].map((v) => (
                  <div key={v.title} className="rounded-2xl bg-warm-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <v.icon size={24} className="text-deep-olive" aria-hidden="true" />
                    <h3 className="mt-3 font-serif text-lg font-semibold text-dark-text">{v.title}</h3>
                    <p className="mt-1 text-sm text-light-text">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
              Coaching Programs
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Choose the path that fits your journey
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm"
                {...fadeUp(0.1 * i)}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={`/images/program-${i + 1}.jpg`}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-dark-text">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-light-text">
                    {p.description}
                  </p>
                  <Link
                    to={p.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-deep-olive transition-colors group-hover:text-luxury-gold"
                  >
                    {p.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH JENNIFER ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
              Why Work With Me
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              This is more than coaching — it's a partnership
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We start with a deep discovery session to understand where you are and where you want to go.",
              },
              {
                step: "02",
                title: "Clarity",
                desc: "Together, we create a crystal-clear vision and a strategic plan tailored to your goals.",
              },
              {
                step: "03",
                title: "Transformation",
                desc: "Through weekly sessions, tools, and accountability, we bring the plan to life.",
              },
              {
                step: "04",
                title: "Integration",
                desc: "We cement your growth so the changes last long after our coaching ends.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="relative rounded-2xl bg-warm-white p-6 pt-12 shadow-sm"
                {...fadeUp(0.1 * i)}
              >
                <span className="absolute top-6 left-6 font-serif text-4xl font-semibold text-deep-olive/15">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-dark-text">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-light-text">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TESTIMONIALS ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
              Client Love
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Real stories from real clients
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                className="card-hover flex flex-col rounded-2xl bg-white p-8 shadow-sm"
                {...fadeUp(0.1 * i)}
              >
                <div className="mb-4 flex gap-1" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={16} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <p className="flex-1 leading-relaxed text-light-text italic">
                  "{t.quote}"
                </p>
                <footer className="mt-6 border-t border-sand pt-4">
                  <p className="font-semibold text-dark-text">{t.name}</p>
                  <p className="text-sm text-light-text">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          <motion.div className="mt-10 text-center" {...fadeUp(0.3)}>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-deep-olive transition-colors hover:text-luxury-gold"
            >
              Read All Testimonials <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── EMAIL GROWTH SECTION ── */}
      <section className="relative overflow-hidden bg-deep-olive py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.div {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-soft-sage-light">
              Free Guide
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white sm:text-4xl">
              Get the Stepmom Clarity Guide
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              A free guide designed to help you name what you're feeling and take
              your next right step. Join thousands of stepmoms who receive weekly,
              honest reflections.
            </p>
          </motion.div>

          <motion.form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
            {...fadeUp(0.2)}
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="hero-email" className="sr-only">Email address</label>
            <input
              id="hero-email"
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-ripple inline-flex items-center justify-center gap-2 rounded-full bg-luxury-gold px-6 py-3.5 text-sm font-semibold text-dark-text transition-all hover:bg-luxury-gold-light hover:shadow-xl hover:shadow-luxury-gold/25"
            >
              <Mail size={16} />
              Send My Guide
            </button>
          </motion.form>

          <motion.p className="mt-4 text-xs text-white/40" {...fadeIn(0.4)}>
            No spam. Unsubscribe anytime.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Questions you might have
            </h2>
          </motion.div>

          <motion.div className="mt-14 divide-y divide-sand" {...fadeUp(0.2)}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Ready to begin?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-light-text">
              The first step is a free, no-pressure discovery call. We'll talk
              about where you are, where you want to go, and whether we're a great fit.
            </p>
          </motion.div>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4" {...fadeUp(0.2)}>
            <Link
              to="/contact"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-deep-olive px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#4a5e51] hover:shadow-xl hover:shadow-deep-olive/25"
            >
              Book Your Discovery Call
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-full border border-deep-olive/30 px-8 py-3.5 text-base font-semibold text-deep-olive transition-all hover:border-deep-olive hover:bg-deep-olive/5"
            >
              Free Resources
              <Download size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
