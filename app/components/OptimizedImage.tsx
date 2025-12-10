import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '100vw',
  quality = 75,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Use consistent quality for SSR and client-side rendering to prevent hydration errors
  // Quality will be adjusted via responsive image sizes instead of conditional logic
  const adjustedQuality = quality;

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        quality={adjustedQuality}
        priority={priority}
        onLoad={handleLoad}
        onError={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        className={`
          ${isLoading ? 'blur-sm' : 'blur-0'}
          transition-all duration-300 ease-in-out
          ${fill ? 'object-cover' : 'object-contain'}
          ${priority ? '' : 'opacity-0 transition-opacity duration-300'}
          ${!isLoading && !priority ? 'opacity-100' : ''}
        `}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${btoa(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width || 100} ${height || 100}"><rect width="100%" height="100%" fill="#f3f4f6"/></svg>`
        )}`}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl" />
      )}
    </div>
  );
}