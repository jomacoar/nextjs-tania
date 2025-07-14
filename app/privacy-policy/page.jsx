import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 bg-zinc-300 min-h-screen font-montserrat text-secondary">
      <h1 className="text-2xl font-boldonse mb-6 text-primary">
        Privacy Policy
      </h1>
      <p className="text-sm text-secondary/80 mb-4">
        Last updated: July 12, 2025
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          1. Introduction
        </h2>
        <p className="text-base">
          Welcome to our website. This Privacy Policy explains how we collect,
          use, store, and protect your personal information when you use our
          contact form on the{' '}
          <Link href="/homepage" className="underline hover:text-orangeMain">
            contact page
          </Link>
          . We are committed to safeguarding your privacy and ensuring
          compliance with applicable data protection laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          2. Information We Collect
        </h2>
        <p className="text-base">
          When you submit our contact form, we collect the following personal
          information:
        </p>
        <ul className="list-disc pl-6 text-base">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your message content</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          3. Purpose of Data Collection
        </h2>
        <p className="text-base">
          We collect this information solely to respond to your inquiries or
          feedback submitted through the contact form. Your data helps us
          understand your needs and provide appropriate responses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          4. How We Store Your Data
        </h2>
        <p className="text-base">
          Your personal information is stored securely in our database, hosted
          with industry-standard security measures. We retain your data only for
          as long as necessary to fulfill the purpose of your inquiry or as
          required by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          5. Data Sharing
        </h2>
        <p className="text-base">
          We do not share your personal information with third parties without
          your consent, except as required by law or to protect our legal rights
          (e.g., in response to legal requests or to prevent fraud).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          6. Your Rights
        </h2>
        <p className="text-base">You have the right to:</p>
        <ul className="list-disc pl-6 text-base">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Object to or restrict the processing of your data.</li>
        </ul>
        <p className="text-base">
          To exercise these rights, please contact us at{' '}
          <a
            href="mailto:contact@yourcompany.com"
            className="underline hover:text-orangeMain"
          >
            contact@yourcompany.com
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          7. Security Measures
        </h2>
        <p className="text-base">
          We use industry-standard security practices to protect your data,
          including encryption and access controls. However, no system is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-boldonse mb-2 text-primary">
          8. Changes to This Policy
        </h2>
        <p className="text-base">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated "Last updated" date. Please check
          back periodically for updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-boldonse mb-2 text-primary">
          9. Contact Us
        </h2>
        <p className="text-base">
          If you have questions about this Privacy Policy or our data practices,
          please contact us at:
        </p>
        <p className="text-base">
          Email:{' '}
          <a
            href="mailto:contact@yourcompany.com"
            className="underline hover:text-orangeMain"
          >
            contact@yourcompany.com
          </a>
        </p>
      </section>
    </div>
  );
}
