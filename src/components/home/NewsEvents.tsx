import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '@public/images/gallery_1.png';
import img2 from '@public/images/gallery_2.png';
import img3 from '@public/images/gallery_3.png';
import img4 from '@public/images/gallery_4.png';

const events = [
  {
    month: 'OCT',
    day: '24',
    year: '2024',
    title: 'Global Alumni Reunion 2024',
    summary: 'Join us for a weekend of reconnection and celebration as we mark another year of excellence...',
    location: 'Enugu, Nigeria',
    time: '10:00 AM - 4:00 PM',
    image: img1,
    link: '#',
  },
  {
    month: 'NOV',
    day: '12',
    year: '2024',
    title: 'Career Mentorship Webinar',
    summary: 'Learn from industry leaders and successful alumni about navigating the modern job market...',
    location: 'Online (Zoom)',
    time: '2:00 PM - 3:30 PM',
    image: img2,
    link: '#',
  },
  {
    month: 'DEC',
    day: '05',
    year: '2024',
    title: 'End of Year Gala Night',
    summary: 'An elegant evening of dining, networking, and celebrating our community achievements...',
    location: 'Lagos, Nigeria',
    time: '6:00 PM - Late',
    image: img3,
    link: '#',
  },
];

const news = [
  {
    category: 'ANNOUNCEMENT',
    title: 'FGCEOSA Commissions New Science Lab for Alma Mater',
    summary: 'A multi-million naira state-of-the-art science laboratory has been officially handed over to the school management...',
    date: 'September 20, 2024',
    image: img4,
    link: '#',
  },
  {
    category: 'NEWS',
    title: 'Class of 94 Excellence Awards: Celebrating Our Own',
    summary: 'The 30th anniversary celebration saw the recognition of outstanding alumni who have made significant strides in their careers...',
    date: 'August 15, 2024',
    image: img1,
    link: '#',
  },
  {
    category: 'UPDATE',
    title: 'South East Chapter Hosts Regional Meetup',
    summary: 'Alumni across the South East region gathered for a networking brunch to discuss community development initiatives...',
    date: 'July 10, 2024',
    image: img2,
    link: '#',
  },
];

const NewsEvents = () => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-background-9 relative overflow-hidden">
      <div className="main-container relative z-10">
        <div className="mx-auto mb-20 max-w-[850px] text-center">
          {/* Entrance Badge: ---- icon NEWS & EVENTS ____ bordered */}
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-[2px] w-12 bg-secondary/20" />
              <div className="border-2 border-secondary/20 px-6 py-2.5 rounded-xl flex items-center gap-3 bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-secondary">NEWS & EVENTS</span>
              </div>
              <div className="h-[2px] w-12 bg-secondary/20" />
            </div>
          </RevealAnimation>

          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"><span className='text-black'>Stay Informed. </span>Stay Connected.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[550px] text-black font-semibold text-lg md:text-xl leading-relaxed">
                Catch up on the latest happenings and mark your calendars for upcoming alumni gatherings.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32">
          {/* LHS - Events */}
          <div className="space-y-12">
            <RevealAnimation delay={0.4}>
              <div className="flex items-center justify-between mb-10 border-b-2 border-secondary/5 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary/5 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-secondary">Upcoming Events</h3>
                </div>
                <Link href="#" className="text-[11px] font-black  tracking-[0.2em] text-secondary hover:text-secondary flex items-center gap-2 transition-all group">
                  View All Events
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5 group-hover:translate-x-1.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </RevealAnimation>

            <div className="space-y-12">
              {events.map((event, index) => (
                <RevealAnimation key={index} delay={0.5 + index * 0.1}>
                  <Link href={event.link} className="block group">
                    <div className="flex flex-col sm:flex-row gap-0 sm:items-stretch bg-white rounded-[32px] border border-secondary/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                      {/* Date Box: Unified into the card */}
                      <div className="flex flex-col items-center justify-center min-w-[100px] bg-secondary/5 border-r border-secondary/5 py-6 sm:py-0">
                        <span className="text-[12px] font-black uppercase tracking-widest" style={{ color: "#950C12" }}>{event.month}</span>
                        <span className="text-4xl font-black text-secondary leading-none my-2">{event.day}</span>
                        <span className="text-[12px] font-black" style={{ color: "#D4AF37" }}>{event.year}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 flex-1 p-6">
                        <div className="relative w-full sm:w-28 h-28 shrink-0 rounded-2xl overflow-hidden shadow-md">
                          <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex flex-col flex-1 relative">
                          <h4 className="font-bold text-xl text-secondary mb-3 leading-tight group-hover:text-[#950C12] transition-colors">{event.title}</h4>
                          <p className="text-[13px] text-black/50 leading-relaxed line-clamp-2 mb-4 font-medium italic">{event.summary}</p>

                          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-secondary/5">
                            <div className="flex items-center gap-2">
                              <div className="p-1 bg-secondary/5 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3 text-secondary">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                              </div>
                              <p className="text-[11px] font-bold text-secondary/90 tracking-wider">{event.location}</p>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="p-1 bg-secondary/5 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3 text-secondary">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                              </div>
                              <p className="text-[11px] font-bold text-secondary/90 uppercase tracking-widest">{event.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* RHS - News */}
          <div className="space-y-12">
            <RevealAnimation delay={0.4}>
              <div className="flex items-center justify-between mb-10 border-b-2 border-secondary/5 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary/5 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-secondary">Latest News</h3>
                </div>
                <Link href="#" className="text-[11px] font-black  tracking-[0.2em] text-secondary hover:text-secondary flex items-center gap-2 transition-all group">
                  View All News
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5 group-hover:translate-x-1.5 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </RevealAnimation>

            <div className="space-y-12">
              {news.map((item, index) => (
                <RevealAnimation key={index} delay={0.5 + index * 0.1}>
                  <div className="flex flex-col sm:flex-row gap-8 group bg-secondary/[0.01] p-6 rounded-3xl border border-secondary/5 hover:border-secondary/20 transition-all duration-500">
                    <div className="relative w-full sm:w-40 h-48 sm:h-40 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-3 left-3 bg-secondary text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-xl">
                        {item.category}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className="font-bold text-xl text-secondary mb-4 leading-tight group-hover:text-[#950C12] transition-colors">{item.title}</h4>
                      <p className="text-[14px] text-black/60 leading-relaxed line-clamp-3 mb-6 font-medium">{item.summary}</p>

                      <div className="mt-auto flex items-center justify-between gap-4">
                        <Link href={item.link} className="text-[12px] font-black text-secondary hover:text-[#950C12] flex items-center gap-2 transition-all group/btn">
                          READ MORE
                          <span className="group-hover/btn:translate-x-2 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </span>
                        </Link>
                        <p className="text-[11px] font-black text-secondary/90 tracking-widest">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
