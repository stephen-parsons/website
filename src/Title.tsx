export default function Title() {
  return (
    <section className="title-container section">
      <div className="img-cropper">
        <img
          alt="Stephen Parsons' photo"
          title="Stephen Parsons' photo"
          aria-description="Stephen Parsons at the Presidio in San Francisco, 2024"
          className="stephen-img"
          src="/stephen.jpg"
        ></img>
      </div>
      <div className="header-text">
        <p className="title">Hi, I'm Stephen</p>
        <div className="subtitle">
          <p>I'm a full stack software engineer based in SF, CA.</p>
        </div>
      </div>
    </section>
  );
}
