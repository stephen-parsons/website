import Game from "./Game";

export default function Chess() {
  return (
    <>
      <p>
        I am an avid tournament chess player, playing often at the Mechanic's
        Institute on Post street in downtown San Francisco. Check out my online
        chess profiles and try your hand at a puzzle from one of my games below!
      </p>
      <br />
      <div className="chess-badges">
        <a href="https://www.chess.com/member/stevopar" target="_blank">
          <img
            className="badge-logo"
            src="https://images.chesscomfiles.com/uploads/v1/user/33.862d5ff1.40x40o.25d362bef47e@2x.png"
          />
        </a>
        <a href="https://lichess.org/@/stevopar" target="_blank">
          <img className="badge-logo" src="/Lichess_logo_2019.png" />
        </a>
      </div>
      <br />
      <p>
        This puzzle is from Parsons-Bambou, played at the Mechanic's Institute
        in downtwon San Francisco in 2024. White to play and get a crushing
        advantage!
      </p>
      <br />
      {/* <Game id={"12955329"} /> */}
      <Game id="12964007" />
    </>
  );
}
