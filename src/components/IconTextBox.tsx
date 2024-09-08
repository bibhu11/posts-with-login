import Typography from "./Typography";

type IconTextBoxProps = {
  iconUrl: string;
  bodyText: string;
  className?: string;
};

export default function IconTextBox({
  iconUrl,
  bodyText,
  className,
}: IconTextBoxProps) {
  return (
    <div className={`flex gap-4 bg-[#191920] p-4 rounded-lg ${className}`}>
      <div className="rounded-full bg-[#27292D] p-[15px] h-12 w-12 flex-none">
        <img src={iconUrl} alt="icon" width={18} height={18} />
      </div>
      <Typography color="secondary">{bodyText}</Typography>
    </div>
  );
}
