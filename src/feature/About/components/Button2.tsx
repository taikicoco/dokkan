export const Button2 = ({
  onClick: onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button className="button-82-pushable" role="button" onClick={onClick}>
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">{children}</span>
    </button>
  );
};
