type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};
