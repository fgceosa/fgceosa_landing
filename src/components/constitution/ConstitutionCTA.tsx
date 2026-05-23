'use client';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

export default function ConstitutionCTA() {
  return (
    <section className="m-3 mb-5 rounded-md bg-[rgba(108,2,8,0.1)] py-6 text-white">
      <div className="main-container">
        <RevealAnimation delay={0.1} direction="up">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4 lg:max-w-lg">
              <svg
                className="text-secondary size-15 shrink-0 rounded-full bg-white p-4 opacity-90 shadow-md"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
              </svg>
              <div>
                <h6 className="text-secondary mb-2 font-bold">Need Help?</h6>
                <p className="max-w-md leading-relaxed text-black">
                  Have questions about the constitution? Our secretariat team is here to assist you with any inquiries.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="group bg-secondary inline-flex shrink-0 items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-all">
              Contact Secretariat
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-5 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
