import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  placeholderBadge?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackLabel,
  placeholderBadge,
  containerClassName = '',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#121215] ${containerClassName}`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${className}`}
          {...props}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#18181C] via-[#121215] to-[#09090B] border border-white/10">
          <Dumbbell className="w-8 h-8 text-[#D4AF37]/70 mb-3" aria-hidden="true" />
          <span className="text-xs font-medium tracking-wider uppercase text-[#A1A1AA]">
            {fallbackLabel || alt}
          </span>
        </div>
      )}

      {placeholderBadge && (
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none flex justify-start">
          <span className="text-[11px] tracking-wide text-[#FAFAFA]/85 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/15">
            {placeholderBadge}
          </span>
        </div>
      )}
    </div>
  );
};
