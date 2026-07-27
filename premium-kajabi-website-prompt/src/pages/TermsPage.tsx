import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-deep-olive hover:text-luxury-gold transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-serif text-4xl font-medium text-dark-text">Terms of Service</h1>
        <p className="mt-2 text-light-text">Last updated: January 1, 2025</p>

        <div className="mt-10 space-y-8 text-light-text leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Jennifer Powell Coaching website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">2. Coaching Services</h2>
            <p>
              Coaching is a partnership focused on your personal and professional growth. Coaching is not therapy, counseling, or medical advice. Results vary based on individual effort and circumstances.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">3. Payments & Cancellations</h2>
            <p>
              Payment terms are agreed upon before services begin. Cancellations require 24-hour notice. Refund policies vary by program and will be outlined in your coaching agreement.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">4. Contact</h2>
            <p>
              For questions about these terms, contact us at hello@jenniferpowellcoaching.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
