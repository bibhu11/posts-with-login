import Typography from "./Typography";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={"bg-[#4A96FF] rounded py-3 w-full " + className}
    >
      <Typography variant="base" fontWeight="medium" color="white">
        {children}
      </Typography>
    </button>
  );
}
