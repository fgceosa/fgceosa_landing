'use client';
import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import OfficerCard from '@/components/exco-officers/OfficerCard';
import ExcoCTA from '@/components/exco-officers/ExcoCTA';

// Sample officer data (replace with real data as needed)
const galleryImages = [
  '/images/gallery_1.png',
  '/images/gallery_2.png',
  '/images/gallery_3.png',
  '/images/gallery_4.png',
  '/images/gallery_1.png',
  '/images/gallery_2.png',
  '/images/gallery_3.png',
  '/images/gallery_4.png',
  '/images/gallery_1.png',
];

const officersData = [
  {
    name: 'Alice Johnson',
    year: 2021,
    department: 'Finance',
    image: galleryImages[0],
    bio: 'Leading financial strategy.',
  },
  {
    name: 'Bob Smith',
    year: 2022,
    department: 'Operations',
    image: galleryImages[1],
    bio: 'Overseeing daily operations.',
  },
  { name: 'Carol Lee', year: 2023, department: 'Marketing', image: galleryImages[2], bio: 'Driving brand growth.' },
  {
    name: 'David Patel',
    year: 2024,
    department: 'Technology',
    image: galleryImages[3],
    bio: 'Innovating tech solutions.',
  },
  { name: 'Eva Gomez', year: 2025, department: 'Human Resources', image: galleryImages[4], bio: 'Cultivating talent.' },
  { name: 'Frank Wu', year: 2020, department: 'Legal', image: galleryImages[5], bio: 'Ensuring compliance.' },
  { name: 'Grace Liu', year: 2021, department: 'Product', image: galleryImages[6], bio: 'Shaping product vision.' },
  {
    name: 'Hannah Kim',
    year: 2022,
    department: 'Customer Success',
    image: galleryImages[7],
    bio: 'Championing client satisfaction.',
  },
  {
    name: 'Ian Chen',
    year: 2023,
    department: 'Business Development',
    image: galleryImages[8],
    bio: 'Expanding partnerships.',
  },
];

// Derive unique department list for filters
const departments = Array.from(new Set(officersData.map((o) => o.department)));

// Year range options
const yearRanges = [
  { label: 'All', from: 0, to: 9999 },
  { label: '2020‑2022', from: 2020, to: 2022 },
  { label: '2023‑2025', from: 2023, to: 2025 },
  { label: '2026‑2028', from: 2026, to: 2028 },
];

// Department Icon Components
const DeptIconFinance = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
  </svg>
);

const DeptIconOps = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z" />
  </svg>
);

const DeptIconMarketing = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 16v-5h-3V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14v2h3c.55 0 1-.45 1-1zm-11-7h2v2h-2zm-2 2h2v2H8zm4 0h2v2h-2zm-6-4h10v2H6zm0 4h2v2H6z" />
  </svg>
);

const DeptIconTech = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 17H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h18V2H1v8h18zm-6 2H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm-3 6H8v-4h2v4zm6 0h-2v-4h2v4z" />
  </svg>
);

const DeptIconHR = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const DeptIconLegal = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const DeptIconProduct = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2--.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const DeptIconCS = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 5V1h-1v4H1v3h4v16h3V8h6v12h3V8h4V5h-9z" />
  </svg>
);

const DeptIconBizDev = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
  </svg>
);

const departmentIcons: { [key: string]: React.FC } = {
  Finance: DeptIconFinance,
  Operations: DeptIconOps,
  Marketing: DeptIconMarketing,
  Technology: DeptIconTech,
  'Human Resources': DeptIconHR,
  Legal: DeptIconLegal,
  Product: DeptIconProduct,
  'Customer Success': DeptIconCS,
  'Business Development': DeptIconBizDev,
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
    <section className="bg-white py-12" aria-label="exco officers section">
      <div className="main-container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left side – Summary & Department Filters */}
        <aside className="space-y-4 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-6">
          <RevealAnimation delay={0.1} direction="up">
            {/* Summary Section */}
            <div className="mb-6 space-y-3 rounded-lg bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <svg className="text-secondary size-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <h2 className="text-lg font-bold text-gray-900">Executive Committee 2026-2028</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Meet the dedicated leaders driving our organization forward with vision, expertise, and commitment to
                excellence.
              </p>
              <div className="space-y-2 border-t border-gray-200 pt-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg className="text-primary-600 size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span className="text-primary-600">{officersData.length}</span>
                  <span className="text-gray-600">exco members</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg className="text-secondary size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-secondary">{departments.length}</span>
                  <span className="text-gray-600">depts</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg className="size-4 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-amber-600">1</span>
                  <span className="text-gray-600">unified purpose</span>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Department Filters */}
          <RevealAnimation delay={0.2} direction="up">
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <h3 className="mb-3 font-medium text-gray-800">Filter by Department</h3>
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
            <div className="space-y-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-5">
              <div className="flex items-center gap-2">
                <svg className="size-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.5 1.06 2.5 2.75 2.5 4.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <h3 className="font-bold text-gray-900">Interested in joining the leadership team?</h3>
              </div>
              <p className="text-sm text-gray-700">Be part of our growing community of leaders making a real impact.</p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700">
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
