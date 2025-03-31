import Chess from "./Chess";
import MusicPlayer from "./MusicPlayer";

export default function Personal() {
  return (
    <>
      <section className="section info">
        <p className="min-width-col">CHESS</p>
        <div>
          <Chess />
        </div>
      </section>
      <section className="section info">
        <p className="min-width-col">MUSIC</p>
        <div>
          <p>
            I'm also an avid musician in the Bay Area, having performed at a lot
            of clubs and venues, mainly in SF. Find me performing at Bottom of
            the Hill or the Killowatt regularly!
            <br />
            <p>Listen to some of my original music below.</p>
            <br />
          </p>
          <MusicPlayer />
        </div>
      </section>
    </>
  );
}
