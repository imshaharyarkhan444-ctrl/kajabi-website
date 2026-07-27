import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/utils/cn";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const faqs = [
  {
    q: "What happens during a discovery call?",
    a: "It's a relaxed, 30-minute conversation where we explore what you're navigating, what you're hoping for, and whether we're a good fit. There's no pressure, no pitch — just an honest conversation about what's possible.",
  },
  {
    q: "How soon can we start working together?",
    a: "I typically onboard new clients within 1-2 weeks of our discovery call, depending on schedule availability. VIP Days can sometimes be arranged sooner.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes! All sessions are virtual, so I work with women across the US, Canada, UK, Australia, and beyond. We'll find times that work across time zones.",
  },
  {
    q: "What if I'm not sure coaching is right for me?",
    a: "That's exactly what the discovery call is for. There's zero obligation, and if coaching isn't the right fit, I'll happily point you toward other resources that might help.",
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

export default function ContactPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(85,107,93,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <motion.p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive" {...fadeUp(0)}>
            Let's Connect
          </motion.p>
          <motion.h1 className="mt-3 font-serif text-4xl font-medium text-dark-text sm:text-5xl" {...fadeUp(0.1)}>
            Your story starts with a conversation
          </motion.h1>
          <motion.p className="mt-5 text-lg leading-relaxed text-light-text" {...fadeUp(0.2)}>
            I'd love to hear from you. Whether you're ready to explore coaching or just have a question, this is the place to start.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
            {/* Form */}
            <motion.div className="lg:col-span-3" {...fadeUp(0)}>
              <h2 className="font-serif text-3xl font-medium text-dark-text">Send a message</h2>
              <p className="mt-2 text-light-text">
                Fill out the form below and I'll get back to you within 24–48 hours.
              </p>

              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Contact form"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-1.5 block text-sm font-medium text-dark-text">
                      First Name <span className="text-deep-olive">*</span>
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-sand bg-warm-white px-4 py-3 text-dark-text placeholder-light-text transition-colors focus:border-deep-olive focus:outline-none focus:ring-2 focus:ring-deep-olive/10"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-1.5 block text-sm font-medium text-dark-text">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full rounded-xl border border-sand bg-warm-white px-4 py-3 text-dark-text placeholder-light-text transition-colors focus:border-deep-olive focus:outline-none focus:ring-2 focus:ring-deep-olive/10"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark-text">
                    Email Address <span className="text-deep-olive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-sand bg-warm-white px-4 py-3 text-dark-text placeholder-light-text transition-colors focus:border-deep-olive focus:outline-none focus:ring-2 focus:ring-deep-olive/10"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-dark-text">
                    I'm interested in...
                  </label>
                  <select
                    id="interest"
                    className="w-full rounded-xl border border-sand bg-warm-white px-4 py-3 text-dark-text transition-colors focus:border-deep-olive focus:outline-none focus:ring-2 focus:ring-deep-olive/10"
                  >
                    <option value="">Select an option</option>
                    <option value="1on1">One-on-One Coaching</option>
                    <option value="group">Group Coaching</option>
                    <option value="vip">VIP Intensive Day</option>
                    <option value="courses">Digital Courses</option>
                    <option value="membership">The Circle Membership</option>
                    <option value="other">Something else / Just exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark-text">
                    Message <span className="text-deep-olive">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-sand bg-warm-white px-4 py-3 text-dark-text placeholder-light-text transition-colors focus:border-deep-olive focus:outline-none focus:ring-2 focus:ring-deep-olive/10"
                    placeholder="Tell me a little about what brings you here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-ripple inline-flex items-center gap-2 rounded-full bg-deep-olive px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#4a5e51] hover:shadow-xl hover:shadow-deep-olive/25"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div className="lg:col-span-2" {...fadeUp(0.2)}>
              <div className="rounded-2xl bg-warm-white p-8 shadow-sm lg:p-10">
                <h3 className="font-serif text-2xl font-medium text-dark-text">Contact info</h3>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="mt-0.5 shrink-0 text-deep-olive" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-dark-text">Email</p>
                      <a
                        href="mailto:hello@jenniferpowellcoaching.com"
                        className="text-light-text transition-colors hover:text-deep-olive"
                      >
                        hello@jenniferpowellcoaching.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-deep-olive" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-dark-text">Location</p>
                      <p className="text-light-text">Austin, TX — Working with clients worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="mt-0.5 shrink-0 text-deep-olive" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-dark-text">Response Time</p>
                      <p className="text-light-text">Typically within 24–48 hours</p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-sand" />

                <h3 className="font-serif text-xl font-medium text-dark-text">Ready to book?</h3>
                <p className="mt-2 text-light-text">
                  Skip the form and schedule a discovery call directly.
                </p>

                {/* Calendly Placeholder */}
                <div className="mt-5 rounded-xl border-2 border-dashed border-deep-olive/20 bg-white p-6 text-center">
                  <p className="text-sm font-medium text-deep-olive">Calendly Integration</p>
                  <p className="mt-1 text-xs text-light-text">
                    Embed your Calendly scheduling widget here
                  </p>
                  <div className="mt-4 flex justify-center">
                    <a
                      href="#"
                      className="btn-ripple inline-flex items-center gap-2 rounded-full bg-deep-olive px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#4a5e51]"
                      onClick={(e) => e.preventDefault()}
                    >
                      Schedule a Call
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm font-medium text-dark-text">Follow along</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-sand p-2.5 text-light-text transition-colors hover:border-deep-olive hover:text-deep-olive"
                      aria-label="Instagram"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-sand p-2.5 text-light-text transition-colors hover:border-deep-olive hover:text-deep-olive"
                      aria-label="LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div className="text-center" {...fadeUp(0)}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-olive">Questions</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-dark-text sm:text-4xl">
              You might be wondering
            </h2>
          </motion.div>
          <motion.div className="mt-14" {...fadeUp(0.2)}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
