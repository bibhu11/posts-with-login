type PostContainerProps = {
  children: React.ReactNode;
};

export default function PostContainer({ children }: PostContainerProps) {
  return (
    <div className="border border-[#35373B] bg-[#27292D] px-5 py-6 rounded-lg">
      {children}
    </div>
  );
}
