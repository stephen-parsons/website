export default function About() {
  return (
    <>
      <section className="section info">
        <p className="min-width-col">ABOUT ME</p>
        <div>
          <p>
            Touring musician turned Full Stack Software Engineer with a passion
            for solving complex problems and writing clean code. 6+ years
            experience building scalable and reliable customer facing web
            applications.
          </p>
          <br />
          <p>
            After spending many years touring in bands, I decided I wanted a
            change in my life and attended a coding bootcamp in Washington, DC
            called Coding Dojo at the suggestion of my brother, an engineer at
            Microsoft. I instantly became enamored with fullstack application
            development and learned I had a particular skill for problem solving
            and learning new technologies, which I still hone to this day. See
            my experience section to learn more!
          </p>
          <br />
          <p>
            Here are some technologies and tools I consider myself an expert on:
            <ul>
              <li>Javascript and Typescript</li>
              <li>React</li>
              <li>CSS3, HTML5</li>
              <li>Node.js</li>
              <li>Scala and function programming</li>
            </ul>
          </p>
          <br />
          <p>
            Click{" "}
            <a href="/resume.pdf" target="_blank">
              here
            </a>{" "}
            for my current resume.
          </p>
        </div>
      </section>
      <section className="section info">
        <p className="min-width-col">CONTACT</p>
        <div>
          <p>
            <a href="tel:+17862394770">(786) 239 4770</a>
          </p>
          <p>
            <a href="mailto:stevopar@gmail.com">stevopar@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
