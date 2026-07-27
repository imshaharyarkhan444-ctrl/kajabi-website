import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="bg-warm-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-deep-olive hover:text-luxury-gold transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-serif text-4xl font-medium text-dark-text">Privacy Policy</h1>
        <p className="mt-2 text-light-text">Last updated: January 1, 2025</p>

        <div className="mt-10 space-y-8 text-light-text leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">1. Introduction</h2>
            <p>
              Jennifer Powell Coaching ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you fill out a contact form, subscribe to our newsletter, or book a discovery call. This may include your name, email address, phone number, and any other information you choose to share.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to communicate with you, provide our coaching services, send newsletters and resources you've requested, improve our website, and comply with legal obligations.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-medium text-dark-text mb-3">4. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at hello@jenniferpowellcoaching.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
