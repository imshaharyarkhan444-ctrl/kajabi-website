import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Shield, Sparkles, Award, BookOpen } from "lucide-react";

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

const values = [
  { icon: Heart, title: "Authenticity", desc: "I show up as my whole self and invite you to do the same. Real transformation begins when we stop pretending." },
  { icon: Target, title: "Clarity", desc: "Before we can move forward, we need to see clearly. I help you cut through the noise to find what truly matters." },
  { icon: Shield, title: "Integrity", desc: "Trust is the foundation of every coaching relationship. I hold the highest standards of confidentiality and ethics." },
  { icon: Sparkles, title: "Growth", desc: "I believe in your potential, even when you don't. Growth is not linear, and I'll be with you through every twist and turn." },
];

const timeline = [
  { year: "2016", title: "Became a Stepmom", desc: "Stepped into stepmotherhood myself, and quickly realized how little honest support existed for women navigating it without children of their own." },
  { year: "2019", title: "Certified Coach", desc: "Earned my coaching certification and trained further in nervous system regulation and attachment-based approaches." },
  { year: "2021", title: "Started Sharing Online", desc: "Began sharing honestly about stepmom life on Instagram, and found a community of women who felt the same way." },
  { year: "2023", title: "Launched Coaching Practice", desc: "Opened my private coaching practice for childless stepmoms, combining lived experience with evidence-informed tools." },
  { year: "2024", title: "500+ Women Supported", desc: "Celebrated supporting over 500 stepmoms through 1:1 coaching, group programs, and the free resources I share." },
  { year: "2026", title: "Growing Community", desc: "Now supporting a community of 20k+ on Instagram and 8k+ in a private Facebook group, alongside coaching clients worldwide." },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(85,107,93,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <motion.p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive" {...fadeUp(0)}>
                About Jennifer
              </motion.p>
              <motion.h1 className="font-serif text-4xl font-medium text-dark-text sm:text-5xl" {...fadeUp(0.1)}>
                Helping you feel like yourself again
              </motion.h1>
              <motion.p className="leading-relaxed text-light-text" {...fadeUp(0.2)}>
                I'm Jennifer Powell — a certified coach for childless stepmoms, and a lifelong student of what makes people feel steady, seen, and whole. My work sits at the intersection of nervous system science, attachment theory, and practical, actionable support.
              </motion.p>
            </div>
            <motion.div className="flex items-center justify-center" {...fadeIn(0.3)}>
              <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/lifestyle.jpg"
                  alt="Jennifer Powell — Coach for Childless Stepmoms"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & PHILOSOPHY ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <motion.div className="space-y-6" {...fadeUp(0)}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">My Mission</p>
              <h2 className="font-serif text-3xl font-medium text-dark-text sm:text-4xl">
                To help you feel less alone in a role no one prepares you for
              </h2>
              <p className="leading-relaxed text-light-text">
                So much of stepmom life happens in silence — the grief, the guilt, the moments you feel like an outsider in your own home. My mission is to help you name what you're feeling, understand why, and build a steadier sense of self inside your family.
              </p>
              <p className="leading-relaxed text-light-text">
                I don't believe in one-size-fits-all formulas. Every woman I work with receives a personalized experience, because your family and your story are your own.
              </p>
            </motion.div>

            <motion.div className="space-y-6" {...fadeUp(0.2)}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">Coaching Philosophy</p>
              <h2 className="font-serif text-3xl font-medium text-dark-text sm:text-4xl">
                You're not too much — you're under-supported
              </h2>
              <p className="leading-relaxed text-light-text">
                My coaching philosophy is rooted in the belief that your reactions make sense in context. You're not broken and you don't need to be fixed. My role is to help you understand your nervous system, your attachment patterns, and your own wisdom — then build from there.
              </p>
              <p className="leading-relaxed text-light-text">
                I blend evidence-informed frameworks with deep listening and honest, direct conversation. The result is a partnership that honors both your head and your heart.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">Core Values</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              What guides my work
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} className="card-hover rounded-2xl bg-white p-8 shadow-sm" {...fadeUp(0.1 * i)}>
                <v.icon size={28} className="text-deep-olive" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-dark-text">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-light-text">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">My Journey</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Milestones along the way
            </h2>
          </motion.div>
          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={item.year} className="relative flex gap-6 pb-10 pl-8 border-l-2 border-deep-olive/20 last:pb-0" {...fadeUp(0.1 * i)}>
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-deep-olive" />
                <div>
                  <span className="text-sm font-semibold text-deep-olive">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-dark-text">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-light-text">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS & FUN FACTS ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Credentials */}
            <motion.div {...fadeUp(0)}>
              <Award size={32} className="text-deep-olive" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-3xl font-medium text-dark-text">
                Credentials & Training
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Certified Professional Coach",
                  "Trained in Nervous System Regulation (Polyvagal-Informed)",
                  "Trained in Attachment Theory & Emotional Processing",
                  "Certified Emotional Intelligence Practitioner (EQ-i 2.0)",
                  "Lived experience as a childless stepmom",
                  "8+ years supporting women in blended families",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-deep-olive/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-deep-olive" />
                    </span>
                    <span className="text-light-text">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fun Facts */}
            <motion.div {...fadeUp(0.2)}>
              <BookOpen size={32} className="text-deep-olive" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-3xl font-medium text-dark-text">
                A little more about me
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Morning ritual", value: "Meditation + matcha latte" },
                  { label: "Currently reading", value: "Always two books at once" },
                  { label: "Weekend joy", value: "Long hikes with my rescue dog" },
                  { label: "Hidden talent", value: "I make a mean sourdough" },
                  { label: "Bucket list", value: "Write a book by 50" },
                  { label: "Guilty pleasure", value: "Reality cooking shows" },
                ].map((fact) => (
                  <div key={fact.label} className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-deep-olive">{fact.label}</p>
                    <p className="mt-1 font-serif text-lg text-dark-text">{fact.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-deep-olive py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.h2 className="font-serif text-3xl font-medium text-white sm:text-4xl" {...fadeUp(0)}>
            Let's write your next chapter together
          </motion.h2>
          <motion.p className="mt-4 text-lg leading-relaxed text-white/70" {...fadeUp(0.1)}>
            Whether you're navigating grief, seeking belonging, or just want to feel steadier — I'd love to connect.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4" {...fadeUp(0.2)}>
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
