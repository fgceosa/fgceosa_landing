'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const PresidentMessage = () => {
  const pastMessages = [
    { year: '2021 - 2023', president: 'Mrs. Ngozi Okonjo', href: '#' },
    { year: '2019 - 2021', president: 'Engr. Tunde Bakare', href: '#' },
    { year: '2017 - 2019', president: 'Prof. Chidi Onyebuchi', href: '#' },
  ];

  return (
    <section className="pt-45 pb-10 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LHS - Main Message */}
          <div className="lg:col-span-7 space-y-10">
            <RevealAnimation delay={0.1} direction="up">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-black dark:text-gray-200 leading-relaxed text-black">
                  <p className="text-xl font-medium text-secondary/80 dark:text-white/90">Dear Fellow Alumni,</p>
                  <p className='text-black'>
                    It is with great pride and a deep sense of responsibility that I address you as the Global President of our prestigious association. Since its inception, the Federal Government College Enugu Old Students Association (FGCEOSA) has stood as a testament to the enduring bonds formed within the walls of our alma mater.
                  </p>
                  <p className='text-black'>
                    Our school motto, <strong>&quot;Pro Unitate&quot;</strong>, is not merely a collection of words; it is the heartbeat of our community. It reminds us that regardless of where we find ourselves in the world, we are connected by a shared history and a common commitment to excellence.
                  </p>
                  <p className='text-black'>
                    As we navigate the complexities of the modern world, our mission remains clear: to foster a vibrant network that supports the professional growth of our members, preserves the legacy of our school, and contributes meaningfully to the development of our nation.
                  </p>
                  <p className='text-black'>
                    We have achieved much together, from infrastructure projects at the college to mentorship programs for young graduates. However, the road ahead beckons with new opportunities. I invite every one of you to join us in this journey. Your expertise, your time, and your passion are the fuels that drive our association forward.
                  </p>
                  <p className='text-black'>
                    Together, let us continue to build a legacy that will inspire generations of students yet to come.
                  </p>
                </div>

                {/* Specific Signature Order: Script -> Year -> Name -> Title */}
                <div className="mt-12 pt-10 border-t border-gray-100 dark:border-white/10">
                  <div className="space-y-2">
                    <p className="text-4xl font-script text-secondary dark:text-accent italic mb-6">Dr. Emmanuel Okoro</p>
                    <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest">2023 - 2025</p>
                    <p className="font-bold text-gray-900 dark:text-white text-xl">Dr. Emmanuel Okoro</p>
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Global President, FGCEOSA</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* RHS - Sidebar Content (Stacked Vertically) */}
          <div className="lg:col-span-5 space-y-8">
            {/* 1. About the President Text */}
            <RevealAnimation delay={0.2} direction="up">
              <div className="bg-background-3 dark:bg-background-6 p-8 rounded-3xl border border-gray-100 dark:border-stroke-7 shadow-sm">
                <h3 className="text-secondary dark:text-accent font-bold text-xl mb-4 border-b border-gray-200 dark:border-white/10 pb-4">About the President</h3>
                <p className="text-black dark:text-gray-200 leading-relaxed">
                  Dr. Emmanuel Okoro is a distinguished cardiologist and a 1985 graduate of FGC Enugu. With over 25 years of experience in healthcare leadership and international philanthropy, he brings a wealth of strategic vision to the association. He is committed to leveraging technology to unite alumni across the globe.
                </p>
              </div>
            </RevealAnimation>

            {/* 2. Term in Office */}
            <RevealAnimation delay={0.25} direction="up">
              <div className="bg-white dark:bg-background-7 p-6 rounded-2xl border border-gray-100 dark:border-stroke-7 shadow-sm flex items-center justify-between">
                <span className="text-gray-400 font-medium">Term in Office</span>
                <span className="bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wider">
                  2023 - 2025
                </span>
              </div>
            </RevealAnimation>

            {/* 3. Past Messages Archive Card */}
            <RevealAnimation delay={0.3} direction="up">
              <div className="bg-background-3 dark:bg-background-6 rounded-3xl p-8 border border-gray-100 dark:border-stroke-7 shadow-sm">
                <h3 className="text-secondary dark:text-accent font-bold text-xl mb-6 flex items-center gap-3">
                  <span className="size-2 bg-[#d4af37] rounded-full"></span>
                  Past Messages Archive
                </h3>
                <div className="space-y-4">
                  {pastMessages.map((msg, idx) => (
                    <Link
                      key={idx}
                      href={msg.href}
                      className="group block bg-white dark:bg-background-7 hover:bg-secondary hover:text-white p-4 rounded-xl border border-gray-100 dark:border-white/5 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#d4af37] group-hover:text-white/80 text-xs font-bold uppercase tracking-widest mb-1 transition-colors">{msg.year}</p>
                          <p className="font-bold text-secondary dark:text-accent group-hover:text-white transition-colors">{msg.president}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 text-secondary/30 dark:text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
