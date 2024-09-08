import Typography from "./Typography";

type CommentsProps = {
  comments: number;
  className?: string;
};

export default function Comments({ comments, className }: CommentsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <img src="/comments.png" alt="comments" width={20} height={20} />
      <Typography variant="sm" color="secondary" fontWeight="medium">
        {comments} comments
      </Typography>
    </div>
  );
}
