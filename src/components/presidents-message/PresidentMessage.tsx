'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const PresidentMessage = () => {
  const pastMessages: { year: string; president: string; href: string }[] = [];


  return (
    <section className="pt-45 pb-10 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LHS - Main Message */}
          <div className="lg:col-span-7 space-y-10">
            <RevealAnimation delay={0.1} direction="up">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 text-black dark:text-gray-200 leading-relaxed text-black">
                  <p className="text-xl font-medium text-secondary/80 dark:text-white/90">Dear fellow FGCE Alumni!</p>
                  <p className='text-black'>
                    Welcome to the website of All Federal Government College Enugu Ex-Students Association (aka FGCEOSA), an association incorporated in Nigeria under the Companies and Allied Matters Act 2020.
                  </p>
                  <p className='text-black'>
                    The FGCEOSA&apos;s main objective is &quot;to help our alumni and our alma mater by promoting close relations between the school and alumni, ensuring that programs are initiated and developed for the benefit of alumni and the school, and to assist the school in its development and pursuit of academic excellence.&quot; The direct implication of this is that all we do as a group/team should be channeled toward realizing the objective for which this association was created.
                  </p>
                  <p className='text-black'>
                    All members of FGCEOSA were at one time or the other students at Federal Government College (FGC) Enugu, a school founded on 19th January 1973. Membership of FGCEOSA is free and voluntary.
                  </p>
                  <p className='text-black'>
                    Our large and diverse alumni membership base is a source of strength for us as we can leverage networking across the various Alumni Chapters and Class Sets to build capacity and create new opportunities for growth, thereby achieving different facets of development in life. This amongst other things has prompted the current set of Executives (aka Team SEAL) to base our activities on the theme <strong>&quot;Powering Progress Together&quot;</strong> for the duration of our tenure.
                  </p>
                  <p className='text-black'>
                    We have not relented in our efforts to make valuable impacts in the FGCE community through several infrastructural and capacity development projects funded by Alumni, inclusive of mentorship programs, and the annual Speech Day and prize-giving ceremony where students that exhibit excellent and outstanding performance in learning, sports, and character are celebrated and rewarded.
                  </p>
                  <p className='text-black'>
                    FGCEOSA is also one of the Alumni Association members of the Unity Schools Old Students Association (USOSA), an incorporated body and public trust made up of alumni of the over 100 Federal Government Colleges (aka Unity Schools) in Nigeria, and set up to advance the objectives of national unity and development through quality access to education in Nigeria.
                  </p>
                  <p className='text-black'>
                    We as an EXCO will continue to seek and implement ways to improve the welfare conditions of all our Alumni and promote avenues for valuable collaboration amongst alumni. You will do well to support the EXCO by playing an active role in your alumni Class Set and/or Chapter.
                  </p>
                  <p className='text-black'>
                    Follow us on our social media handles via the links at the top and bottom of this webpage, as well as reach the EXCO via the email address (at the top of this webpage) as you deem necessary.
                  </p>
                  <p className='text-black font-semibold'>
                    May God bless ALL FEDERAL GOVERNMENT COLLEGE ENUGU EX-STUDENTS ASSOCIATION, and all our Alumni in general!
                  </p>
                  <p className='text-black font-bold uppercase tracking-widest text-sm'>PRO UNITATE FGCE!</p>
                </div>

                {/* Specific Signature Order: Script -> Year -> Name -> Title */}
                <div className="mt-12 pt-10 border-t border-gray-100 dark:border-white/10">
                  <div className="space-y-2">
                    <p className="text-4xl font-script text-secondary dark:text-accent italic mb-6">Engr. Nnadozie Eze</p>
                    <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest">2021 - 2023</p>
                    <p className="font-bold text-gray-900 dark:text-white text-xl">Engr. Nnadozie Eze (Class of 1993)</p>
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">President (2021-23) | On behalf of FGCEOSA National EXCO</p>
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
                  Engr. Nnadozie Eze is a proud alumnus of Federal Government College Enugu (Class of 1993) and serves as President of FGCEOSA (2021-23), leading Team SEAL under the theme &quot;Powering Progress Together.&quot; He is committed to alumni welfare, institutional development, and fostering unity across all chapters and class sets.
                </p>
              </div>
            </RevealAnimation>

            {/* 2. Term in Office */}
            <RevealAnimation delay={0.25} direction="up">
              <div className="bg-white dark:bg-background-7 p-6 rounded-2xl border border-gray-100 dark:border-stroke-7 shadow-sm flex items-center justify-between">
                <span className="text-gray-400 font-medium">Term in Office</span>
                <span className="bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wider">
                   2021 - 2023
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
