import { useCallback, useMemo } from "react";
import { SectionLink } from "./App";

interface HeaderProps {
  setSelectedLink: (link: SectionLink) => void;
  currentLink: SectionLink;
}

export default function Header({ setSelectedLink, currentLink }: HeaderProps) {
  const isSelected = useCallback(
    (link: SectionLink) => {
      return link === currentLink;
    },
    [currentLink],
  );

  return (
    <header className="header">
      <div className="logo-container">
        <p className="font-x-large">SP</p>
      </div>
      <nav className="nav-links">
        <Link
          link="About"
          isSelected={isSelected}
          setSelectedLink={setSelectedLink}
        />
        <Link
          link="Experience"
          isSelected={isSelected}
          setSelectedLink={setSelectedLink}
        />
        <Link
          link="Projects"
          isSelected={isSelected}
          setSelectedLink={setSelectedLink}
        />
        <Link
          link="Personal"
          isSelected={isSelected}
          setSelectedLink={setSelectedLink}
        />
      </nav>
      <Badges />
    </header>
  );
}

interface LinkProps {
  setSelectedLink: (link: SectionLink) => void;
  isSelected: (link: SectionLink) => boolean;
  link: SectionLink;
}

function Link({ link, isSelected, setSelectedLink }: LinkProps) {
  return (
    <a
      onClick={() => setSelectedLink(link)}
      className={isSelected(link) ? "underline" : ""}
    >
      <p>{link.toUpperCase()}</p>
    </a>
  );
}

function Badges() {
  return (
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
  );
}
