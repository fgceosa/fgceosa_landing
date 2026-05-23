'use client';
import Link from 'next/link';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

export default function ExcoCTA() {
  return (
    <section className="bg-secondary py-16 text-white">
      <div className="main-container">
        <RevealAnimation delay={0.1} direction="up">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-4 lg:max-w-lg">
              <svg className="size-12 shrink-0 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <div>
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                  Leadership Today.
                  <br />
                  Legacy Tomorrow.
                </h2>
                <p className="text-opacity-90 max-w-md leading-relaxed text-white">
                  Join our movement of change-makers dedicated to building a better future for our community.
                </p>
              </div>
            </div>
            <Link
              href="/careers"
              className="group text-secondary inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold shadow-lg transition-all hover:bg-gray-100">
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
