'use client';

import { useState, useCallback } from 'react';

// Types for the YouTube component
interface YouTubeEmbedProps {
  videoId: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  className?: string;
  autoplay?: boolean;
  mute?: boolean;
  controls?: boolean;
  loop?: boolean;
  start?: number;
  end?: number;
  showThumbnail?: boolean;
  onLoad?: () => void;
  onError?: (error: string) => void;
}

interface YouTubeUtilsProps {
  url: string;
}

// Utility functions for YouTube URLs
export const youtubeUtils = {
  // Extract video ID from various YouTube URL formats
  extractVideoId: (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  },

  // Validate if URL is a valid YouTube URL
  isValidYouTubeUrl: (url: string): boolean => {
    return youtubeUtils.extractVideoId(url) !== null;
  },

  // Generate thumbnail URL for a video ID
  getThumbnailUrl: (videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'high'): string => {
    const qualityMap = {
      default: 'default.jpg',
      medium: 'mqdefault.jpg',
      high: 'hqdefault.jpg',
      standard: 'sddefault.jpg',
      maxres: 'maxresdefault.jpg'
    };
    return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}`;
  }
};

// Main YouTube component
export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = '100%',
  height = 315,
  title = 'YouTube video player',
  className = '',
  autoplay = false,
  mute = false,
  controls = true,
  loop = false,
  start,
  end,
  showThumbnail = false,
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showVideo, setShowVideo] = useState(!showThumbnail);

  // Build the embed URL with parameters
  const buildEmbedUrl = useCallback(() => {
    const baseUrl = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams();

    if (autoplay) params.append('autoplay', '1');
    if (mute) params.append('mute', '1');
    if (!controls) params.append('controls', '0');
    if (loop) {
      params.append('loop', '1');
      params.append('playlist', videoId);
    }
    if (start) params.append('start', start.toString());
    if (end) params.append('end', end.toString());

    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  }, [videoId, autoplay, mute, controls, loop, start, end]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.('Failed to load YouTube video');
  };

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  // Validate video ID
  if (!videoId || typeof videoId !== 'string') {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} 
           style={{ width, height }}>
        <p className="text-red-500 text-sm">Invalid video ID provided</p>
      </div>
    );
  }

  // Error state
  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} 
           style={{ width, height }}>
        <div className="text-center">
          <p className="text-red-500 text-sm mb-2">Failed to load video</p>
          <button 
            onClick={() => {
              setHasError(false);
              setIsLoading(true);
            }}
            className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Thumbnail view
  if (showThumbnail && !showVideo) {
    return (
      <div 
        className={`relative cursor-pointer group ${className}`}
        style={{ width, height }}
        onClick={handleThumbnailClick}
      >
        <img
          src={youtubeUtils.getThumbnailUrl(videoId)}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          onError={handleError}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg" />
      </div>
    );
  }

  // Video embed view
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        src={buildEmbedUrl()}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={handleLoad}
        onError={handleError}
        className="rounded-lg"
      />
    </div>
  );
};

// Wrapper component that accepts URLs instead of video IDs
export const YouTubePlayer: React.FC<Omit<YouTubeEmbedProps, 'videoId'> & YouTubeUtilsProps> = ({
  url,
  ...props
}) => {
  const videoId = youtubeUtils.extractVideoId(url);

  if (!videoId) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${props.className || ''}`} 
           style={{ width: props.width || '100%', height: props.height || 315 }}>
        <p className="text-red-500 text-sm">Invalid YouTube URL provided</p>
      </div>
    );
  }

  return <YouTubeEmbed videoId={videoId} {...props} />;
};

export default YouTubeEmbed;