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
        <img className="badge-logo" src="/linked-in-white.png" />
      </a>
      <a href="https://github.com/stephen-parsons" target="_blank">
        <img className="badge-logo" src="/github-mark-white.png" />
      </a>
    </div>
  );
}
