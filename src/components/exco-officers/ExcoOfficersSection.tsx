'use client';
import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import OfficerCard from '@/components/exco-officers/OfficerCard';
import ExcoCTA from '@/components/exco-officers/ExcoCTA';

const officersData = [
  {
    name: 'Nnadozie Eze',
    year: 2021,
    department: 'Leadership',
    image: '/images/excos/nadozie.jpeg',
    bio: 'The President (2021-2023) | Class of 1993, Honesty House',
  },
  {
    name: 'Amara Nzelu-Erikume',
    year: 2021,
    department: 'Leadership',
    image: '/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg',
    bio: '1st Vice President (2021-2023) | Class of 1998, Independence House',
  },
  {
    name: 'Odera Udutchay',
    year: 2021,
    department: 'Leadership',
    image: '/images/excos/Odera-Udutchay-2nd-Vice-President-resized.jpg',
    bio: '2nd Vice President (2021-2023) | Class of 2007, Honesty House',
  },
  {
    name: 'Obinna Anikwe',
    year: 2021,
    department: 'Secretariat',
    image: '/images/excos/sec-gen-obinna-anikwe-1.jpg',
    bio: 'Secretary General (2021-2023) | Class of 1991, Peace House',
  },
  {
    name: 'Chibueze Ogodo',
    year: 2021,
    department: 'Secretariat',
    image: '/images/excos/Chibueze-Ogodo-asst-sec-gen-resized.jpg',
    bio: 'Assistant Secretary General (2021-2023) | Class of 1998, Liberty House',
  },
  {
    name: 'Ifeanyi Mbah',
    year: 2021,
    department: 'Finance',
    image: '/images/Kingsley-Mbah-Treasurer-resized.jpg',
    bio: 'Treasurer (2021-2023) | Class of 1997, National House',
  },
  {
    name: 'Chidiogo Ezejiofor',
    year: 2021,
    department: 'Finance',
    image: '/images/excos/Chidiogo-Ezejiofor-Financial-Secretary-resized.jpg',
    bio: 'Financial Secretary (2021-2023) | Class of 1983, Liberty House',
  },
  {
    name: 'Paul Ojinta',
    year: 2021,
    department: 'Welfare & Publicity',
    image: '/images/excos/Paul-Ojinta-Welfare-Publicity-Secretary-resized.jpg',
    bio: 'Publicity And Welfare Secretary (2021-2023) | Class of 1993, Liberty House',
  },
  {
    name: 'Prince Okezie Nnabueze',
    year: 2021,
    department: 'Welfare & Publicity',
    image: '/images/excos/Prince-Nnabueze-Okezie-Assistant-Welfare-Publicity-Secretary-resized.jpg',
    bio: 'Assistant Publicity And Welfare Secretary (2021-2023) | Class of 2004, Independence House',
  },
  {
    name: 'Peter Ohabuenyi',
    year: 2021,
    department: 'Finance',
    image: '/images/excos/Peter-Ohabuenyiauditor.jpg',
    bio: 'Internal Auditor (2021-2023) | Class of 2000, Independence House',
  },
  {
    name: "Umar Sa'ad",
    year: 2021,
    department: 'Operations',
    image: '/images/excos/Umar-Saad.jpg',
    bio: 'Provost (2021-2023) | Class of 1993, Liberty House',
  },
  {
    name: 'Chinyere Okoli',
    year: 2021,
    department: 'Legal',
    image: '/images/excos/Chinyere-Atalaor-Legal-Adviser.jpg',
    bio: 'Legal Adviser (2021-2023) | Class of 1997, National House',
  },
  {
    name: 'Jekwu Ozoemene',
    year: 2021,
    department: 'Leadership',
    image: '/images/excos/Dr.-Jekwu-Ozoemene',
    bio: 'Ex-Officio (2021-2023) | Class of 1990, Peace House',
  },
];

// Derive unique department list for filters
const departments = Array.from(new Set(officersData.map((o) => o.department)));

// Year range options
const yearRanges = [
  { label: 'All', from: 0, to: 9999 },
  { label: '2021‑2023', from: 2021, to: 2023 },
];

// Department Icon Components
const DeptIconLeadership = () => (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

const DeptIconSecretariat = () => (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-2.25 3h3m-3.75 3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const DeptIconFinance = () => (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.958-.659-1.171-.879-1.171-2.303 0-3.182 1.172-.879 3.07-.879 4.242 0L15 8.8" />
  </svg>
);

const DeptIconWelfarePublicity = () => (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
);

const DeptIconOps = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
  </svg>
);

const DeptIconLegal = () => (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-9-9 9 9-9 9-9-9 9-9Z" />
  </svg>
);

const departmentIcons: { [key: string]: React.FC } = {
  Leadership: DeptIconLeadership,
  Secretariat: DeptIconSecretariat,
  Finance: DeptIconFinance,
  'Welfare & Publicity': DeptIconWelfarePublicity,
  Operations: DeptIconOps,
  Legal: DeptIconLegal,
};

const AllIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h4.58l1.3 1.54H7l4.96-6.54 4.75 5.98h2.1L13.96 6h-2.1l2.14 2.79z" />
  </svg>
);

export default function ExcoOfficersSection() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const filtered = officersData.filter((off) => {
    const deptMatch = selectedDept === 'All' || off.department === selectedDept;
    const range = yearRanges.find((r) => r.label === selectedYear) || yearRanges[0];
    const yearMatch = off.year >= range.from && off.year <= range.to;
    return deptMatch && yearMatch;
  });

  return (
    <section className="bg-white py-6" aria-label="exco officers section">
      <div className="main-container mx-auto mb-5 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left side – Summary & Department Filters */}
        <aside className="space-y-4 rounded-lg p-5">
          <RevealAnimation delay={0.1} direction="up">
            {/* Summary Section */}
            <div className="mb-6 space-y-3 rounded-lg bg-white p-5 shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-secondary size-15 self-center rounded-full p-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>
              <h2 className="text-secondary text-lg font-bold text-gray-900">Executive Committee (2021-2023)</h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Meet the dedicated leaders driving our organization forward with vision, expertise, and commitment to
                excellence.
              </p>
              <div className="space-y-2 border-t border-gray-200 pt-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg className="text-primary-600 size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span className="text-primary-600">{officersData.length}</span>
                  <span className="text-gray-600 capitalize">exco members</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg className="text-secondary size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-secondary">{departments.length}</span>
                  <span className="text-gray-600 capitalize">depts</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg className="size-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-amber-600">1</span>
                  <span className="text-gray-600 capitalize">unified purpose</span>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Department Filters */}
          <RevealAnimation delay={0.2} direction="up">
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <h6 className="mb-3 font-medium text-gray-800">Filter by Department</h6>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedDept('All')}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    selectedDept === 'All'
                      ? 'bg-secondary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}>
                  <AllIcon />
                  All
                </button>
                {departments.map((dep) => {
                  const IconComponent = departmentIcons[dep];
                  return (
                    <button
                      key={dep}
                      onClick={() => setSelectedDept(dep)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                        selectedDept === dep
                          ? 'bg-secondary text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                      title={dep}>
                      {IconComponent && <IconComponent />}
                      <span>{dep}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </RevealAnimation>

          {/* Join Section */}
          <RevealAnimation delay={0.3} direction="up">
            <div className="bg-secondary space-y-3 rounded-lg p-5">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-secondary size-15 self-center rounded-full p-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-3.33-6.67-5-10-5z" />
                </svg>
                <h6 className="font-bold text-white">Interested in joining the leadership team?</h6>
              </div>
              <p className="text-sm text-white">Be part of our growing community of leaders making a real impact.</p>
              <a
                href="#"
                className="bg-secondary hover:bg-secondary inline-flex items-center gap-2 rounded-lg border border-white px-4 py-2 text-sm font-semibold text-white transition-all">
                Learn More
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </RevealAnimation>
        </aside>

        {/* Right side – officer cards & year filters */}
        <div className="lg:col-span-2">
          {/* Year Range Filters */}
          <RevealAnimation delay={0.2} direction="up">
            <div className="mb-8">
              <h5 className="mb-3 font-medium text-gray-800">
                Executive Committee <span className="text-secondary">Members</span>
              </h5>
              <div className="flex flex-wrap gap-2">
                {yearRanges.map((r) => (
                  <button
                    key={r.label}
                    onClick={() => setSelectedYear(r.label)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      selectedYear === r.label
                        ? 'bg-secondary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* Officer Cards Grid */}
          <RevealAnimation delay={0.3} direction="up">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((off, i) => (
                <OfficerCard key={i} officer={off} />
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
      {/* CTA Section */}
      <ExcoCTA />
    </section>
  );
}
