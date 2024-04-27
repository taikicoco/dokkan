import { useState } from "react";
import { Button1 } from "@/feature/About/components/Button1";
import { Button2 } from "@/feature/About/components/Button2";

export const Game = () => {
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    const randomChance = Math.random() * 100;
    if (randomChance < count / 10 + 1) {
      setGameOver(true);
    }
  };

  const handleReset = () => {
    setCount(0);
    setGameOver(false);
  };

  return (
    <main className="flex flex-col items-center py-24">
      {gameOver ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Game Over! </h2>
          <p className="mb-8 text-center">
            You pressed the button {count} times.
          </p>
          <Button2 onClick={() => handleReset()}>Try again</Button2>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Button1 onClick={handleClick}>Press !</Button1>

          <p>You have pressed the button {count} times.</p>
        </div>
      )}
    </main>
  );
};
