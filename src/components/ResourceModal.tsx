import React, { useState } from 'react';
import { X, Download, BookOpen, Check, ArrowRight } from 'lucide-react';
import { ResourceItem } from '../data/siteConfig';

interface ResourceModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!resource) return null;

  const handleDownloadGuide = () => {
    if (resource.downloadUrl && resource.downloadUrl.trim() !== '') {
      window.open(resource.downloadUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Generate clean printable text summary
    const lines: string[] = [
      `SEHRISH MALL | FITNESS, TRAINING & WELLNESS`,
      `Resource: ${resource.title} (${resource.category})`,
      `============================================================`,
      ``,
      resource.description,
      ``,
      `KEY TAKEAWAYS:`,
      ...resource.keyTakeaways.map((k, i) => `  ${i + 1}. ${k}`),
      ``,
      ...resource.sections.flatMap((sec) => [
        `------------------------------------------------------------`,
        sec.heading.toUpperCase(),
        ...sec.points.map((pt) => `  • ${pt}`),
        ``,
      ]),
      `------------------------------------------------------------`,
      `Follow @sehrish.mall on Instagram: https://www.instagram.com/sehrish.mall/`,
      `Educational fitness resource — train safely and listen to your body.`,
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}-sehrish-mall.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121215] border border-white/15 shadow-2xl text-[#FAFAFA] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mb-2">
              <span>{resource.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-tabular">{resource.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{resource.format}</span>
            </div>
            <h3
              id="resource-modal-title"
              className="text-2xl sm:text-3xl font-bold font-display text-white"
            >
              {resource.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resource guide"
            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6">
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            {resource.description}
          </p>

          {/* Key Takeaways */}
          <div className="p-5 rounded-xl bg-[#18181C] border border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Core Principles &amp; Takeaways
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAFAFA]">
              {resource.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-5">
            {resource.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h5 className="text-base font-semibold text-white">
                  {sec.heading}
                </h5>
                <ul className="space-y-2 text-sm text-[#A1A1AA] leading-relaxed">
                  {sec.points.map((pt, pIdx) => (
                    <li key={pIdx} className="pl-3 border-l border-[#D4AF37]/40">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#A1A1AA]">
            Free educational resource by Sehrish Mall
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-[#E4E4E7] hover:text-white border border-white/15 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Done Reading
            </button>
            <button
              type="button"
              onClick={handleDownloadGuide}
              className="px-5 py-2.5 text-xs font-semibold text-[#09090B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Guide Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download Takeaway Sheet</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
