import React from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import ConstitutionCTA from '@/components/constitution/ConstitutionCTA';

const highlights = [
  'Mission and vision',
  'Member rights and responsibilities',
  'Governance structure',
  'Amendment procedures',
];

const constitutionDetails = [
  { label: 'Adopted', year: '2021' },
  { label: 'Adopted at AGM' },
  { label: 'Ratified by EXCO' },
  { label: 'Consultative Congress' },
  { label: 'Pages', count: '32' },
];

const CheckmarkIcon = () => (
  <svg className="text-secondary size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="size-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="size-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7h-10zm6 12h-4v-4h4v4zm-6-6H8v-2h4v2zm-6 6H4v-4h4v4zm0-6H4V9h4v4zm6 0h-4V9h4v4z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="size-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const PeopleIcon = () => (
  <svg className="size-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="size-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-8-6zm0 18H6V4h7v5h7v11z" />
  </svg>
);

const getDetailIcon = (idx: number) => {
  const icons = [CalendarIcon, BuildingIcon, CheckCircleIcon, PeopleIcon, DocumentIcon];
  const Icon = icons[idx];
  return <Icon />;
};

const ConstitutionSection = () => {
  return (
    <>
      <section className="main-container grid grid-cols-1 gap-12 py-6 lg:grid-cols-2">
        {/* LHS: Key Highlights + Constitution Details (Stacked) */}
        <div className="space-y-8">
          <RevealAnimation delay={0.1} direction="up">
            <div>
              <h2 className="text-secondary mb-4 text-2xl font-bold">Key Highlights</h2>
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckmarkIcon />
                    <span className="text-slate-700 dark:text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="up">
            <div>
              <h3 className="text-secondary mb-4 text-xl font-semibold">Constitution Details</h3>
              <div className="space-y-3">
                {constitutionDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                    {getDetailIcon(idx)}
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase dark:text-gray-400">{detail.label}</p>
                      <p className="font-bold text-gray-900 dark:text-white">{detail.year || detail.count || ''}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* RHS: PDF Preview & Actions */}
        <RevealAnimation delay={0.3} direction="up">
          <div className="flex flex-col items-center gap-6">
            <iframe
              src="/constitution.pdf"
              title="Constitution Preview"
              className="h-80 w-full rounded border bg-white shadow-lg"></iframe>
            <div className="flex flex-wrap gap-2">
              <a
                href="/constitution.pdf"
                download
                className="bg-secondary/5 text-secondary hover:bg-secondary/10 flex rounded-full px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300">
                Download
              </a>
              <a
                href="/constitution.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary bg-secondary hover:bg-secondary/10 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300">
                Preview
              </a>
              <button className="btn btn-outline hover:bg-secondary/10 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300">
                Share
              </button>
            </div>
          </div>
        </RevealAnimation>
      </section>

      {/* Constitution CTA */}
      <ConstitutionCTA />
    </>
  );
};

export default ConstitutionSection;
