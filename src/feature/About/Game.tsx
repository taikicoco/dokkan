import { useState } from "react";

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

  return (
    <main className="flex flex-col items-center py-24">
      <h1>Explosion Game</h1>
      {gameOver ? (
        <div>
          <h2>Game Over! You pressed the button {count} times.</h2>
        </div>
      ) : (
        <div>
          <button onClick={handleClick} disabled={count >= 100}>
            Press me
          </button>
          <p>You have pressed the button {count} times.</p>
        </div>
      )}
    </main>
  );
};
