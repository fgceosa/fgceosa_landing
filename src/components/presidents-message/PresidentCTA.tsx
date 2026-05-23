'use client';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const PresidentCTA = () => {
  const coreValues = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.998 5.998 0 0 0-12 0m12 0c0-1.233-.314-2.433-.91-3.488m-10.18 3.488A5.995 5.995 0 0 1 12 15c.438 0 .868.047 1.282.139m1.916-4.899a3 3 0 1 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>
      ),
      title: 'Unity',
      text: 'Fostering lifelong connections across generations of alumni worldwide.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75c1.192 0 2.277-.35 3.183-.948M10.125 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m4.234 10.071c.54-.836.877-1.785.96-2.766a5.964 5.964 0 0 1-3.32 1.205c-1.191 0-2.277-.35-3.183-.948m11.316 4.041a.75.75 0 1 1-1.282-.774 5.974 5.974 0 0 0 1.134-3.267.75.75 0 0 1 1.5 0c0 1.507-.456 2.907-1.233 4.041Z"
          />
        </svg>
      ),
      title: 'Excellence',
      text: 'Maintaining the high standards of achievement established by our alma mater.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6.223a9.904 9.904 0 0 0 3.84 8.784 12.042 12.042 0 0 0 4.562 2.624 12.042 12.042 0 0 0 4.562-2.624 9.904 9.904 0 0 0 3.84-8.784A11.959 11.959 0 0 1 12 2.714Z"
          />
        </svg>
      ),
      title: 'Integrity',
      text: 'Upholding ethical conduct and transparency in all association affairs.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      ),
      title: 'Service',
      text: 'Giving back to our school community and supporting the next generation.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
          />
        </svg>
      ),
      title: 'Legacy',
      text: 'Building a sustainable future through collective alumni impact.',
    },
  ];

  return (
    <section className="bg-background-3 dark:bg-background-8">
      {/* Core Values Section */}
      <div className="dark:bg-background-7 border-b border-gray-100 bg-white py-12 md:py-16 dark:border-white/5">
        <div className="main-container">
          <div className="mb-12 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary dark:text-accent mt-3 text-3xl font-bold md:text-4xl">
                Guided by Our Core Values
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-5">
            {coreValues.map((value, index) => (
              <RevealAnimation key={index} delay={0.1 * (index + 1)} direction="up">
                <div className="bg-background-3 dark:bg-background-6 dark:border-stroke-7 group h-full rounded-3xl border border-gray-100 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-8">
                  <div className="bg-secondary group-hover:shadow-secondary/20 mb-6 flex size-14 items-center justify-center rounded-2xl text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                    {value.icon}
                  </div>
                  <h4 className="text-secondary dark:text-accent mb-3 text-lg font-bold md:text-xl">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-black dark:text-gray-200">{value.text}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Legacy Section - Icon on Left */}
      <div className="py-12 md:py-16">
        <div className="main-container">
          <div className="bg-secondary relative overflow-hidden rounded-[32px] border border-white/5 p-8 shadow-2xl md:p-16">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 size-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row">
              <RevealAnimation delay={0.1} direction="left">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-3xl bg-white/10 text-white shadow-inner md:size-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10 md:size-12">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </div>
              </RevealAnimation>

              <div className="flex-1 text-center lg:text-left">
                <RevealAnimation delay={0.2} direction="up">
                  <div>
                    <h5 className="mb-4 leading-tight font-black text-white">Today We Build A Legacy That Lives On.</h5>
                    <p className="max-w-2xl text-base text-white/80 md:text-lg">
                      Join us in our mission to transform our alma mater and create lasting impact for generations of
                      students yet to come. Your support makes the difference.
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              {/* <RevealAnimation delay={0.3} direction="right" className="w-full lg:w-auto">
                <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl py-3.5 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37]/50 transition-all"
                    required
                  />
                  <button type="submit" className="group bg-[#fff] text-secondary px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-secondary transition-all shadow-lg active:scale-95 shrink-0 flex items-center justify-center gap-2">
                    Subscribe
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </form>
              </RevealAnimation> */}
            </div>
          </div>
        </div>
      </div>

      {/* Final Brand CTA Section */}
      <div className="border-t border-gray-100 py-8 dark:border-white/5">
        <div className="main-container">
          <RevealAnimation delay={0.1} direction="up">
            <div className="flex flex-col items-center justify-between gap-10 px-4 pb-8 md:px-10 lg:flex-row">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
                <figure className="dark:border-background-7 size-20 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl md:size-24">
                  <Image
                    src="/images/fgceosa_logo.jpeg"
                    alt="FGCEOSA Logo"
                    width={96}
                    height={96}
                    className="size-full object-contain"
                  />
                </figure>
                <div className="space-y-3">
                  <div className="leading-tight">
                    <span className="text-secondary dark:text-accent text-2xl font-bold tracking-tight uppercase md:text-3xl">
                      FGCEOSA
                    </span>
                    <div className="text-secondary/60 mt-1 text-xs font-bold tracking-widest uppercase md:text-sm dark:text-white/50">
                      FGC Enugu Old Students Association
                    </div>
                  </div>
                  <p className="max-w-xl text-base font-medium text-black italic md:text-lg dark:text-gray-200">
                    &quot;United by our past, inspired to build the future. Join the community of excellence
                    today.&quot;
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href="https://fgceoapp.netlify.app/sign-up"
                  target="_blank"
                  className="group bg-secondary relative flex items-center justify-center gap-4 rounded-2xl px-10 py-4 text-lg font-black whitespace-nowrap text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  Join FGCEOSA Today
                  <div className="text-secondary flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 group-hover:translate-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PresidentCTA;
