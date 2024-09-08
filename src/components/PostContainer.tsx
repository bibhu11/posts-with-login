type PostContainerProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function PostContainer({
  children,
  className,
  onClick,
}: PostContainerProps) {
  return (
    <div
      className={`border border-[#35373B] bg-[#27292D] px-5 py-6 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
