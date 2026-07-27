import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, BookOpen, CheckCircle, FileText, Headphones } from "lucide-react";

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

const freebies = [
  {
    icon: BookOpen,
    title: "The Stepmom Clarity Workbook",
    description: "A guided workbook to help you name what you're feeling, understand your patterns, and get clear on your next steps. Includes reflection prompts, exercises, and journaling space.",
    type: "Workbook (PDF)",
  },
  {
    icon: CheckCircle,
    title: "Boundaries Checklist for Blended Families",
    description: "A practical checklist to help you set boundaries that actually stick, without the guilt. Move from feeling overwhelmed to having a clear, calm plan.",
    type: "Checklist (PDF)",
  },
  {
    icon: FileText,
    title: "5 Questions to Understand Your Grief",
    description: "Five honest questions that will shift how you think about childless-stepmom grief and help you feel less alone in carrying it.",
    type: "Guide (PDF)",
  },
  {
    icon: Headphones,
    title: "Nervous System Reset Audio",
    description: "A short guided audio practice designed to help you regulate in the moment, whether before a hard conversation or after a long day.",
    type: "Audio (MP3)",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(85,107,93,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive" {...fadeUp(0)}>
            Free Resources
          </motion.p>
          <motion.h1 className="mt-3 font-serif text-4xl font-medium text-dark-text sm:text-5xl" {...fadeUp(0.1)}>
            Tools to support your growth
          </motion.h1>
          <motion.p className="mt-5 text-lg leading-relaxed text-light-text" {...fadeUp(0.2)}>
            I've created these resources to help you feel less alone, name what you're carrying, and take meaningful steps forward — whether or not we ever work together.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED: THE CLARITY WORKBOOK ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div className="flex items-center justify-center" {...fadeIn(0)}>
              <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/free-guide.jpg"
                  alt="The Stepmom Clarity Workbook — Free coaching resource by Jennifer Powell"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-center space-y-6" {...fadeUp(0)}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">Featured Free Guide</p>
              <h2 className="font-serif text-3xl font-medium text-dark-text sm:text-4xl">
                The Stepmom Clarity Workbook
              </h2>
              <p className="leading-relaxed text-light-text">
                This workbook is my most popular free resource — and for good reason.
                It's designed to help you pause, reflect, and get clear on what you really need.
              </p>
              <ul className="space-y-3">
                {[
                  "Name what you're feeling and why it makes sense",
                  "Clarify your role and boundaries within your blended family",
                  "Uncover hidden grief and unspoken expectations",
                  "Create an actionable plan for your first steps",
                  "Beautifully designed, printable PDF format",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-deep-olive" />
                    <span className="text-light-text">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Signup Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 pt-2 sm:flex-row"
                aria-label="Get the clarity workbook"
              >
                <label htmlFor="resource-email" className="sr-only">Email address</label>
                <input
                  id="resource-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-full border border-sand bg-warm-white px-5 py-3.5 text-dark-text placeholder-light-text transition-colors focus:border-deep-olive focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-ripple inline-flex items-center justify-center gap-2 rounded-full bg-deep-olive px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#4a5e51] hover:shadow-xl hover:shadow-deep-olive/25"
                >
                  <Download size={16} />
                  Download Free Guide
                </button>
              </form>
              <p className="text-xs text-light-text">Join thousands of stepmoms. No spam, ever.</p>

              {/* Success stories */}
              <div className="rounded-2xl bg-warm-white p-6 shadow-sm">
                <p className="text-sm italic text-dark-text">
                  "This workbook helped me get clearer in one afternoon than I had in the previous six months. Thank you, Jennifer!"
                </p>
                <p className="mt-2 text-xs font-semibold text-deep-olive">— Dani R., Coaching Client</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ALL FREE RESOURCES ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">More Free Tools</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Explore all free resources
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {freebies.map((f, i) => (
              <motion.div key={f.title} className="card-hover flex flex-col rounded-2xl bg-white p-8 shadow-sm" {...fadeUp(0.1 * i)}>
                <f.icon size={32} className="text-deep-olive" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-dark-text">{f.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-light-text">{f.description}</p>
                <span className="mt-4 inline-block rounded-full bg-deep-olive/10 px-3 py-1 text-xs font-medium text-deep-olive">
                  {f.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE CTA ── */}
      <section className="relative overflow-hidden bg-deep-olive py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.div {...fadeUp(0)}>
            <Mail size={40} className="mx-auto text-soft-sage-light" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl font-medium text-white sm:text-4xl">
              Stay inspired, every week
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Join my newsletter for weekly insights, practical tools, and honest reflections on stepmom life, grief, and belonging.
            </p>
          </motion.div>

          <motion.form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
            {...fadeUp(0.2)}
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-ripple inline-flex items-center justify-center gap-2 rounded-full bg-luxury-gold px-6 py-3.5 text-sm font-semibold text-dark-text transition-all hover:bg-luxury-gold-light hover:shadow-xl hover:shadow-luxury-gold/25"
            >
              <Mail size={16} />
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.h2 className="font-serif text-3xl font-medium text-dark-text sm:text-4xl" {...fadeUp(0)}>
            Ready to go deeper?
          </motion.h2>
          <motion.p className="mt-4 text-lg leading-relaxed text-light-text" {...fadeUp(0.1)}>
            When you're ready for personalized support, I'm here. Let's explore how coaching can help you feel steadier and more like yourself.
          </motion.p>
          <motion.div className="mt-8" {...fadeUp(0.2)}>
            <Link
              to="/contact"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-deep-olive px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#4a5e51] hover:shadow-xl hover:shadow-deep-olive/25"
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
