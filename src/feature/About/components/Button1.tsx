export const Button1 = ({
  onClick: onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button className="button-30 mb-8" onClick={onClick}>
      {children}
    </button>
  );
};
