import Game from "./Game";

export default function Chess() {
  return (
    <div className="chess">
      <p className="paragraph">
        Can you solve a puzzle from one of my tournament games? This puzzle is
        from Parsons-Bambou, played at the Mechanic's Institute in downtwon San
        Francisco in 2024. White to play and get a crushing advantage!
      </p>
      {/* <Game id={"12955329"} /> */}
      <Game id="12964007" />
    </div>
  );
}
