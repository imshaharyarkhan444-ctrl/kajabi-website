import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight, Play, Quote } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const testimonials = [
  {
    quote: "Working with Jennifer was the single best investment I've made in myself. Within three months, I had language for what I was feeling, stronger boundaries with my stepkids, and a real sense of who I am in this family. I went from feeling constantly on edge to actually enjoying our home again.",
    name: "Sarah M.",
    role: "Stepmom of two",
    stars: 5,
    featured: true,
  },
  {
    quote: "Jennifer has a gift for asking the right questions at the right time. She helped me navigate grief I didn't even have words for, with so much warmth. I can't recommend her enough to anyone feeling stuck or unseen in this role.",
    name: "Dani K.",
    role: "Childless stepmom",
    stars: 5,
    featured: true,
  },
  {
    quote: "The VIP Day with Jennifer was exactly what I needed. I arrived feeling scattered and overwhelmed and left with a clear plan and real tools. Worth every penny and more. The clarity I gained in that single day would have taken me months on my own.",
    name: "Rachel T.",
    role: "Stepmom of three",
    stars: 5,
    featured: true,
  },
  {
    quote: "Before coaching, I was burning out and questioning everything about my place in this family. Jennifer helped me reconnect with myself and set boundaries that actually stuck. Six months later, I have more energy for the relationships that matter most.",
    name: "Michelle P.",
    role: "Stepmom of two",
    stars: 5,
  },
  {
    quote: "The group coaching experience exceeded all my expectations. Not only did I get expert guidance from Jennifer, but the community of women became an invaluable support system. I've made friends for life in this program.",
    name: "Amanda L.",
    role: "Childless stepmom",
    stars: 5,
  },
  {
    quote: "I came to Jennifer feeling completely alone in this role. Through our work together, I not only found language for my grief — I found a completely new way of showing up in my family that feels sustainable. This coaching changed my life.",
    name: "Jamie R.",
    role: "Stepmom of one",
    stars: 5,
  },
  {
    quote: "Jennifer's approach is both warm and direct. She creates a safe space but doesn't let you hide from the hard conversations. That balance is exactly what I needed to make real progress. I'm more confident and decisive than ever.",
    name: "Priya S.",
    role: "Childless stepmom",
    stars: 5,
  },
  {
    quote: "I was skeptical about coaching at first, but Jennifer completely changed my perspective. Her evidence-informed approach combined with genuine care makes every session valuable. I've recommended her to at least five friends already.",
    name: "Toni B.",
    role: "Stepmom of two",
    stars: 5,
  },
  {
    quote: "The membership has been the gift that keeps on giving. Every month I learn something new, connect with women who get it, and feel more grounded in my role. It's the best money I spend each month, hands down.",
    name: "Elena V.",
    role: "Stepmom of two",
    stars: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(85,107,93,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive" {...fadeUp(0)}>
            Client Stories
          </motion.p>
          <motion.h1 className="mt-3 font-serif text-4xl font-medium text-dark-text sm:text-5xl" {...fadeUp(0.1)}>
            Real transformation, real stories
          </motion.h1>
          <motion.p className="mt-5 text-lg leading-relaxed text-light-text" {...fadeUp(0.2)}>
            Nothing speaks louder than the experiences of those who've done the work. Here are some of the incredible women I've had the privilege of coaching.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED TESTIMONIALS ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials
              .filter((t) => t.featured)
              .map((t, i) => (
                <motion.blockquote
                  key={t.name}
                  className="card-hover flex flex-col rounded-2xl bg-warm-white p-8 shadow-sm lg:p-10"
                  {...fadeUp(0.1 * i)}
                >
                  <Quote size={32} className="text-deep-olive/15" aria-hidden="true" />
                  <div className="mt-4 flex gap-1" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} size={16} className="fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 leading-relaxed text-light-text italic">
                    "{t.quote}"
                  </p>
                  <footer className="mt-8 border-t border-sand pt-5">
                    <p className="font-semibold text-dark-text">{t.name}</p>
                    <p className="text-sm text-light-text">{t.role}</p>
                  </footer>
                </motion.blockquote>
              ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS PLACEHOLDER ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
              Video Stories
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              Hear it in their own words
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <motion.div
                key={n}
                className="card-hover group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-sand to-deep-olive/10 shadow-sm"
                {...fadeUp(0.1 * n)}
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-deep-olive/20 transition-transform group-hover:scale-110">
                    <Play size={24} className="ml-1 text-deep-olive" aria-hidden="true" />
                  </div>
                  <p className="mt-4 font-serif text-lg font-medium text-deep-olive">
                    Client Story {n}
                  </p>
                  <p className="text-sm text-light-text">Video testimonial</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL TESTIMONIALS (MASONRY-LIKE GRID) ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">
              More Stories
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              More voices, more impact
            </h2>
          </motion.div>

          <div className="mt-14 columns-1 gap-8 sm:columns-2 lg:columns-3">
            {testimonials
              .filter((t) => !t.featured)
              .map((t, i) => (
                <motion.blockquote
                  key={t.name}
                  className="card-hover mb-8 break-inside-avoid rounded-2xl bg-warm-white p-6 shadow-sm"
                  {...fadeUp(0.1 * i)}
                >
                  <div className="mb-3 flex gap-1" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} size={14} className="fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  <p className="leading-relaxed text-light-text italic">
                    "{t.quote}"
                  </p>
                  <footer className="mt-4 border-t border-sand pt-3">
                    <p className="font-semibold text-dark-text">{t.name}</p>
                    <p className="text-sm text-light-text">{t.role}</p>
                  </footer>
                </motion.blockquote>
              ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-deep-olive py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.h2 className="font-serif text-3xl font-medium text-white sm:text-4xl" {...fadeUp(0)}>
            Ready to write your own story?
          </motion.h2>
          <motion.p className="mt-4 text-lg leading-relaxed text-white/70" {...fadeUp(0.1)}>
            The first step is a free, no-pressure conversation. Let's explore what's possible.
          </motion.p>
          <motion.div className="mt-8" {...fadeUp(0.2)}>
            <Link
              to="/contact"
              className="btn-ripple inline-flex items-center gap-2 rounded-full bg-luxury-gold px-8 py-3.5 text-base font-semibold text-dark-text transition-all hover:bg-luxury-gold-light hover:shadow-xl hover:shadow-luxury-gold/25"
            >
              Book Your Discovery Call
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
