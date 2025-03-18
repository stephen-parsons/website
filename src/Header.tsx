import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-text margin-top-20">
        <p className="title">Stephen Parsons</p>
        <div className="subtitle">
          <p>Software Engineer</p> | <p>Chess Player</p> | <p>Musician</p>
        </div>
        <div className="badges">
          <a
            href="https://www.linkedin.com/in/stephen-john-parsons"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match badge-logo"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <a href="https://lichess.org/@/stevopar" target="_blank">
            <img
              className="badge-logo"
              src="data:image/png;base64,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"
            />
          </a>
          <a href="https://www.chess.com/member/stevopar" target="_blank">
            <img
              className="badge-logo"
              src="https://images.chesscomfiles.com/uploads/v1/user/33.862d5ff1.40x40o.25d362bef47e@2x.png"
            />
          </a>
          <a
            href="https://open.spotify.com/artist/1yLovucqe0ZkMXhSXx25bF"
            target="_blank"
          >
            <img
              className="badge-logo"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black-300x300.png"
            />
          </a>
        </div>
      </div>
      <img
        alt="Stephen Parsons' photo"
        title="Stephen Parsons' photo"
        aria-description="Stephen Parsons at the Presidio in San Francisco, 2024"
        className="stephen-img"
        src="/stephen.jpg"
      ></img>
    </div>
  );
}
