import RevealAnimation from '../animation/RevealAnimation';

const DocumentAccess = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-6">
      <div className="main-container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Document Access
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                Read the Full <span className="text-secondary">Constitution</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Preview it directly below, or download a copy to read at your own pace.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.2} direction="up">
          <div className="bg-white dark:bg-background-7 rounded-3xl shadow-xl border border-gray-100 dark:border-background-5 overflow-hidden">
            {/* PDF Viewer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-background-5 bg-gray-50 dark:bg-background-6">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📄</div>
                <div>
                  <p className="font-bold text-black dark:text-white text-sm">FGCEOSA-Constitution-2021.pdf</p>
                  <p className="text-xs text-black/40 dark:text-white/40">32 pages · Official Document</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/constitution.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-secondary border border-secondary/30 px-4 py-2 rounded-lg hover:bg-secondary/5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Open in New Tab
                </a>
                <a
                  href="/constitution.pdf"
                  download
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="relative">
              <iframe
                src="/constitution.pdf"
                title="FGCEOSA Constitution"
                className="w-full h-[600px] md:h-[750px] border-0"
              />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DocumentAccess;
