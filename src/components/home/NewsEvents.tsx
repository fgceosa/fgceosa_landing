import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

const events = [
  {
    date: 'OCT 24',
    title: 'Global Alumni Reunion 2024',
    location: 'Enugu, Nigeria',
    link: '#',
  },
  {
    date: 'NOV 12',
    title: 'Career Mentorship Webinar',
    location: 'Online (Zoom)',
    link: '#',
  },
  {
    date: 'DEC 05',
    title: 'End of Year Gala Night',
    location: 'Lagos, Nigeria',
    link: '#',
  },
];

const news = [
  {
    category: 'ALUMNI NEWS',
    title: 'FGCEOSA Commissions New Science Lab for Alma Mater',
    date: 'September 20, 2024',
    link: '#',
  },
  {
    category: 'ACHIEVEMENTS',
    title: 'Class of 94 Excellence Awards: Celebrating Our Own',
    date: 'August 15, 2024',
    link: '#',
  },
  {
    category: 'COMMUNITY',
    title: 'South East Chapter Hosts Regional Meetup',
    date: 'July 10, 2024',
    link: '#',
  },
];

const NewsEvents = () => {
  return (
    <section className="py-20 lg:py-32 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[850px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
             <div className="bg-white mb-6 inline-block rounded-lg border-2 border-secondary px-4 py-2 shadow-sm">
                <span className="text-secondary font-bold uppercase tracking-wider">Stay Updated</span>
              </div>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-xl md:text-2xl lg:text-3xl font-bold">Latest News & Upcoming Events</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[520px] text-secondary/60 dark:text-accent/60">Catch up on the latest happenings and mark your calendars for upcoming alumni gatherings.</p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LHS - Events */}
          <div className="space-y-8">
            <RevealAnimation delay={0.4}>
              <h3 className="text-lg font-bold border-b border-stroke-4 pb-4 mb-6 uppercase tracking-widest text-secondary">Upcoming Events</h3>
            </RevealAnimation>
            <div className="space-y-6">
              {events.map((event, index) => (
                <RevealAnimation key={index} delay={0.5 + index * 0.1}>
                  <Link href={event.link} className="flex gap-6 group hover:bg-white dark:hover:bg-background-8 p-4 rounded-xl transition-all duration-300">
                    <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] bg-secondary text-white rounded-lg group-hover:scale-105 transition-transform">
                      <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                      <span className="text-2xl font-bold leading-none">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-lg group-hover:text-secondary transition-colors">{event.title}</h4>
                      <p className="text-sm text-secondary/60 dark:text-accent/60">{event.location}</p>
                    </div>
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* RHS - News */}
          <div className="space-y-8">
             <RevealAnimation delay={0.4}>
              <h3 className="text-lg font-bold border-b border-stroke-4 pb-4 mb-6 uppercase tracking-widest text-secondary">Latest News</h3>
            </RevealAnimation>
            <div className="space-y-6">
              {news.map((item, index) => (
                <RevealAnimation key={index} delay={0.5 + index * 0.1}>
                  <Link href={item.link} className="block group hover:bg-white dark:hover:bg-background-8 p-4 rounded-xl transition-all duration-300">
                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded mb-2 inline-block">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">{item.title}</h4>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">{item.date}</p>
                  </Link>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>

        <RevealAnimation delay={0.8}>
           <div className="mt-16 text-center">
             <Link href="/news-events" className="btn btn-secondary px-10 rounded-md font-bold">
               View All Updates
             </Link>
           </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default NewsEvents;
