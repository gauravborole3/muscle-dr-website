import React from "react";

const extractVideoId = (url) => {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const ShortBlock = ({ video }) => {
  const videoId = extractVideoId(video.url);
  if (!videoId) return null;

  return (
    <div className="short-block">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0`}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default ShortBlock;
