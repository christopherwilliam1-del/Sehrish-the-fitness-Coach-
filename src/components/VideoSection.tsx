import React, { useState } from 'react';
import { Play, Clock, CheckCircle2, Film, ExternalLink, Sliders } from 'lucide-react';
import { SiteConfig, VideoItem } from '../data/siteConfig';
import { ResilientImage } from './ResilientImage';

interface VideoSectionProps {
  config: SiteConfig;
  onOpenAdminMedia: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ config, onOpenAdminMedia }) => {
  const allVideos: VideoItem[] = [
    config.featuredVideo.primaryVideo,
    ...config.featuredVideo.additionalVideos,
  ];
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(allVideos[0]);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const activeVideo =
    allVideos.find((v) => v.id === selectedVideo.id) || config.featuredVideo.primaryVideo;

  const isDirectVideoFile =
    activeVideo.embedUrl.endsWith('.mp4') || activeVideo.embedUrl.endsWith('.webm');

  return (
    <section
      id="video"
      aria-labelledby="video-section-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#09090B]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-3">
              Featured Session &amp; Movement Breakdown
            </p>
            <h2
              id="video-section-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white"
            >
              {config.featuredVideo.heading}
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenAdminMedia}
            className="self-start md:self-auto px-4 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white border border-white/15 rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
            <span>Change Video URL</span>
          </button>
        </div>

        {/* Main Responsive Player Container */}
        <div className="rounded-2xl overflow-hidden bg-[#121215] border border-white/10 shadow-2xl">
          <div className="relative aspect-video w-full bg-black">
            {activeVideo.embedUrl && activeVideo.embedUrl.trim() !== '' ? (
              isDirectVideoFile ? (
                <video
                  src={activeVideo.embedUrl}
                  controls
                  className="w-full h-full object-cover"
                  poster={activeVideo.thumbnail}
                >
                  Your browser does not support embedded video playback.
                </video>
              ) : (
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : !isPlayingPreview ? (
              <div className="relative w-full h-full group">
                <ResilientImage
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  containerClassName="w-full h-full"
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />

                {/* Center Play Trigger */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    type="button"
                    onClick={() => setIsPlayingPreview(true)}
                    aria-label={`Play training session preview: ${activeVideo.title}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-[#09090B] flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-105 cursor-pointer mb-4"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" aria-hidden="true" />
                  </button>
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mb-1">
                    <span>{activeVideo.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-tabular">{activeVideo.duration}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold font-display text-white max-w-xl">
                    {activeVideo.title}
                  </h3>
                </div>
              </div>
            ) : (
              /* Interactive Chapter Breakdown Mode when no external embed URL is set */
              <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-[#16161A] via-[#121215] to-[#09090B] overflow-y-auto">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mb-2">
                      <Film className="w-4 h-4" aria-hidden="true" />
                      <span>Interactive Session Walkthrough</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-tabular">{activeVideo.duration}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {activeVideo.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlayingPreview(false)}
                    className="px-3 py-1.5 text-xs text-[#A1A1AA] hover:text-white border border-white/15 rounded-lg cursor-pointer whitespace-nowrap"
                  >
                    Back to Cover
                  </button>
                </div>

                <div className="my-6 space-y-3 max-w-2xl">
                  <p className="text-sm text-[#E4E4E7] leading-relaxed">
                    {activeVideo.description}
                  </p>
                  <div className="pt-2 space-y-2.5">
                    {activeVideo.keyPoints.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm text-white">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-[#A1A1AA]">
                    Tip: Paste any YouTube, Vimeo, or MP4 link via "Change Video URL" to stream video directly.
                  </span>
                  <a
                    href={config.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-[#09090B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <span>Watch Clips on {config.instagramUsername}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Below Player Bar */}
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 bg-[#121215]">
            <div className="space-y-1">
              <p className="text-sm sm:text-base text-white font-medium">
                {config.featuredVideo.subheading}
              </p>
              <p className="text-xs text-[#A1A1AA]">
                Currently selected: {activeVideo.title} ({activeVideo.duration})
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllVideos((prev) => !prev)}
              aria-expanded={showAllVideos}
              className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#09090B] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              {showAllVideos ? 'HIDE VIDEO LIST' : config.featuredVideo.ctaText}
            </button>
          </div>
        </div>

        {/* Expandable Video Playlist */}
        {showAllVideos && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {allVideos.map((vid) => {
              const isSelected = vid.id === activeVideo.id;
              return (
                <button
                  key={vid.id}
                  type="button"
                  onClick={() => {
                    setSelectedVideo(vid);
                    setIsPlayingPreview(true);
                  }}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#18181C] border-[#D4AF37]'
                      : 'bg-[#121215] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                      <span className="text-[#D4AF37] font-medium">{vid.category}</span>
                      <span className="font-mono-tabular flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {vid.duration}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">{vid.title}</h4>
                    <p className="text-xs text-[#A1A1AA] line-clamp-2">{vid.description}</p>
                  </div>

                  <span className="text-xs font-semibold text-[#D4AF37] flex items-center gap-1.5 pt-2">
                    <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>{isSelected ? 'Playing in Viewer' : 'Load Session'}</span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
