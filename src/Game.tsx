import { useEffect } from "react";

interface GameProps {
  id: string;
}

function gameEventListenerCallback(e: any, id: string) {
  e["data"] &&
    id === e["data"]["id"] &&
    document.getElementById(`${e["data"]["id"]}`) &&
    (document.getElementById(`${e["data"]["id"]}`)!.style.height =
      `${e["data"]["frameHeight"] + 37}px`);
}

export default function Game({ id }: GameProps) {
  useEffect(() => {
    window.addEventListener("message", (e) => gameEventListenerCallback(e, id));
    return () => {
      window.removeEventListener("message", (e) =>
        gameEventListenerCallback(e, id),
      );
    };
  }, []);

  return (
    <>
      <iframe
        id={id}
        allowTransparency={true}
        frameBorder="0"
        style={{ width: "100%", border: "none" }}
        src={`https://www.chess.com/emboard?id=${id}`}
      ></iframe>
    </>
  );
}
