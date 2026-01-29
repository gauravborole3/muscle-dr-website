import React from "react";
import shortsData from "../data/youtubeshorts.json";
import ShortBlock from "../components/ShortVideoCard";
import "../components/shorts.css";

const ShortsPage = () => {
  return (
    <div className="shorts-page">
      <h1 className="shorts-heading">Physio Tips</h1>
        <div className="shorts-subheading">
        <p>Small tips. Big impact.</p>
        </div>
      <div className="shorts-grid">
        {shortsData.map((video, index) => (
          <ShortBlock key={index} video={video} />
        ))}
      </div>
              {/* 🔴 Watch More Button */}
      <div className="watch-more-wrapper">
        <a
          href="https://www.youtube.com/@TheMuscleDr/shorts"
          target="_blank"
          rel="noreferrer"
          className="watch-more-btn"
        >
          ▶ Watch more Shorts on YouTube
        </a>
      </div>

    </div>
  );
};

export default ShortsPage;
