import React from 'react';
import { DownloadIcon, ArrowIcon } from '@/icons';

const highlights = [
  'Defines our mission and vision',
  'Outlines member rights and responsibilities',
  'Establishes governance structure',
  'Details amendment procedures',
];

const ConstitutionSection = () => {
  return (
    <section className="main-container grid grid-cols-1 gap-12 py-16 md:grid-cols-2">
      {/* LHS: About Constitution */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-[#d4af37]">About the Constitution</h2>
        <p className="mb-6 text-lg text-slate-700 dark:text-slate-200">
          Our constitution is the foundational document that guides our organization. It sets forth our core values,
          governance, and the rights and responsibilities of all members.
        </p>
        <h3 className="mb-2 text-xl font-semibold">Key Highlights</h3>
        <ul className="mb-6 list-disc pl-6 text-slate-700 dark:text-slate-200">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h3 className="mb-2 text-xl font-semibold">Constitution Details</h3>
        <p className="text-slate-700 dark:text-slate-200">
          For a comprehensive understanding, please review the full document. You can preview, download, or share the
          constitution using the options provided.
        </p>
      </div>
      {/* RHS: PDF Preview & Actions */}
      <div className="flex flex-col items-center gap-6">
        <iframe
          src="/constitution.pdf"
          title="Constitution Preview"
          className="h-80 w-full rounded border bg-white shadow-lg"></iframe>
        <div className="flex gap-4">
          <a
            href="/constitution.pdf"
            download
            className="bg-secondary/5 text-secondary hover:bg-secondary/10 flex rounded-full px-6 py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300">
            Download
          </a>
          <a
            href="/constitution.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary bg-secondary hover:bg-secondary/10 flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300">
            Preview
          </a>
          <button
            className="btn btn-outline hover:bg-secondary/10 flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300"
            // onClick={() => {
            //   if (navigator.share) {
            //     navigator.share({
            //       title: 'FGCE Constitution',
            //       url: window.location.origin + '/constitution.pdf',
            //     });
            //   } else {
            //     window.open('/constitution.pdf', '_blank');
            //   }
            // }}
          >
            Share
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionSection;
