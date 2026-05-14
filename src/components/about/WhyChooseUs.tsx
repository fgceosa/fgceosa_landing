import profitChartImg from '@public/images/ns-img-240.png';
import circleImg from '@public/images/ns-img-352.png';
import aboutDecentralization2Img from '@public/images/ns-img-7.svg';
import profitDarkChartImg from '@public/images/ns-img-dark-161.png';
import aboutDecentralizationDark2Img from '@public/images/ns-img-dark-5.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featureList = [
  { id: 1, icon: 'ns-shape-8', label: 'Analyze your data' },
  { id: 2, icon: 'ns-shape-9', label: 'Collaborate securely' },
  { id: 3, icon: 'ns-shape-12', label: 'Embedded analytics' },
  { id: 4, icon: 'ns-shape-21', label: 'Easy & intuitive' },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden pb-5">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-[97px]">
          <div>
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Why Join FGCEOSA?</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-secondary font-bold leading-tight tracking-tight mb-3">
                A lifelong network
                <br className="hidden lg:block" />
                of excellence
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="lg:max-w-[536px] text-black dark:text-white/80">
                Being a part of FGCEOSA means access to a global community that supports your professional
                journey and keeps you connected to your roots.
              </p>
            </RevealAnimation>
            <ul className="mt-10 sm:space-y-2 md:mt-14">
              {[
                { id: 1, icon: 'ns-shape-8', label: 'Global Alumni Network' },
                { id: 2, icon: 'ns-shape-9', label: 'Mentorship Programs' },
                { id: 3, icon: 'ns-shape-12', label: 'Exclusive Events' },
                { id: 4, icon: 'ns-shape-21', label: 'Alma Mater Support' },
              ].map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.5 + idx * 0.1}>
                  <li className="flex list-none items-center gap-4 py-2">
                    <span className={`${item.icon} text-secondary dark:text-accent text-[36px]`} />
                    <strong className="text-tagline-1 text-black dark:text-white font-medium">{item.label}</strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <RevealAnimation delay={0.3}>
            <figure className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-[30px] shadow-2xl">
              <Image src="/images/alumni_global_networking.png" alt="Alumni Networking" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
