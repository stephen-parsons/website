import React from "react";

export default function MusicPlayer() {
  return (
    <div className="spotify-container">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/1yLovucqe0ZkMXhSXx25bF?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
