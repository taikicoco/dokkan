import { useState } from "react";
import { Button1 } from "@/feature/About/components/Button1";
import { Button2 } from "@/feature/About/components/Button2";

export const Game = () => {
  const [count, setCount] = useState(0);
  const [isGame, setIsGame] = useState(false);

  const [gameOver, setGameOver] = useState(false);
  const [gameClear, setGameClear] = useState(false);

  const handleStart = () => {
    setIsGame(true);
  };

  const handleClick = () => {
    setCount(count + 1);

    if (count >= 9) {
      handleGameClear();
    }

    const randomChance = Math.random() * 100;
    if (randomChance < count / 25) {
      handleGameOver();
    }
  };

  const handleGameClear = () => {
    setGameClear(true);
    setIsGame(false);
  };

  const handleGameOver = () => {
    setGameOver(true);
    setIsGame(false);
  };

  const handleReset = () => {
    setCount(0);
    setGameClear(false);
    setGameOver(false);
    setIsGame(false);
  };

  return (
    <main className="flex flex-col items-center py-24">
      {gameOver && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Game Over! </h2>
          <p className="mb-8 text-center">
            You pressed the button {count} times.
          </p>
        </div>
      )}

      {gameClear && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Game Clear! </h2>
          <p className="mb-8 text-center">
            You pressed the button {count} times.
          </p>
        </div>
      )}

      {!isGame ? (
        <div className="flex flex-col items-center">
          {gameOver || gameClear ? (
            <div className="py-8">
              <Button2 onClick={() => handleReset()}>Try again</Button2>
            </div>
          ) : (
            <>
              <h2 className="text-2xl mb-4">Game Start!</h2>
              <Button2 onClick={() => handleStart()}>Start</Button2>
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Button1 onClick={handleClick}>Press !</Button1>
          <p>{count} times</p>
        </div>
      )}
    </main>
  );
};
