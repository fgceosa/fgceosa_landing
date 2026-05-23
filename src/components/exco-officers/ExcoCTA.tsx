'use client';
import Link from 'next/link';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

export default function ExcoCTA() {
  return (
    <section className="bg-secondary mt-5 py-16 text-white">
      <div className="main-container">
        <RevealAnimation delay={0.1} direction="up">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-secondary size-15 self-center rounded-full border-1 border-white p-2 text-white"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-3.33-6.67-5-10-5z" />
              </svg>
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">Leadership Today. Legacy Tomorrow.</h2>
                <p className="text-opacity-90 max-w-md leading-relaxed text-white">
                  Join our movement of change-makers dedicated to building a better future for our community.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="group bg-secondary inline-flex shrink-0 items-center gap-2 rounded-xl border-1 border-white px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-gray-100">
              Get Involved
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
