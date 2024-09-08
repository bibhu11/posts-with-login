import Typography from "./Typography";

type PostInfoProps = {
  profileIcon: string;
  profileName: string;
  timeText: string;
  isEdited?: boolean;
};

export default function PostInfo({
  profileIcon,
  profileName,
  timeText,
  isEdited,
}: PostInfoProps) {
  return (
    <div className="flex items-center">
      <div className="flex gap-4">
        <div className="rounded-full h-11 w-11">
          <img src={profileIcon} alt={profileName} width={44} height={44} />
        </div>
        <div>
          <Typography color="primary" fontWeight="medium">
            {profileName}
          </Typography>
          <Typography variant="sm" color="secondary" fontWeight="medium">
            {timeText}
            {isEdited && (
              <Typography
                as="span"
                variant="sm"
                color="secondary"
                fontWeight="medium"
              >
                {" "}
                • Edited
              </Typography>
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
}
