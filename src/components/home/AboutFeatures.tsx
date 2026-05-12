import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: 'Lifelong Connections',
    text: 'Reconnect, network and build meaningful relationships worldwide.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    title: 'Support the Alma Mater',
    text: 'Contribute to the growth, and development of FCE Enugu.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: 'Empower Members',
    text: 'Access opportunities, resources and exclusive member benefits.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: 'Give Back',
    text: 'Make a lasting impact in our community and beyond.',
  },
];

const AboutFeatures = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-4 w-full">
      <div className="grid grid-cols-1 gap-10 rounded-3xl bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:grid-cols-2 lg:grid-cols-4 lg:p-12 border border-gray-100">
        {features.map((feature, index) => (
          <RevealAnimation key={index} delay={0.1 * (index + 1)}>
            <div className="group flex items-start gap-6 text-left">
              {/* Left Column: Icons */}
              <div className="flex flex-col items-center gap-6 shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-secondary/20">
                  {feature.icon}
                </div>
                {/* Arrow Icon Button */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-white cursor-pointer shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xl font-bold text-black leading-tight transition-colors group-hover:text-secondary">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {feature.text}
                </p>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
};


export default AboutFeatures;
