import Typography from "./Typography";

type IconTextBoxProps = {
  iconUrl: string;
  bodyText: string;
};

export default function IconTextBox({ iconUrl, bodyText }: IconTextBoxProps) {
  return (
    <div className="flex gap-4 bg-[#191920] p-4 rounded-lg">
      <div className="rounded-full bg-[#27292D] p-[15px] h-12 w-12">
        <img src={iconUrl} alt="icon" width={18} height={18} />
      </div>
      <Typography variant="sm" color="secondary">
        {bodyText}
      </Typography>
    </div>
  );
}
