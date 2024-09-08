import PostContainer from "../components/PostContainer";
import Typography from "../components/Typography";

export default function PostsPage() {
  return (
    <div className="max-w-[700px] pt-16 mx-auto">
      <Typography className="text-[28px]" fontWeight="semibold" color="primary">
        Hello Jane
      </Typography>
      <Typography color="secondary" className="mt-3">
        How are you doing today? Would you like to share something with the
        community 🤗
      </Typography>
      <section className="mt-10">
        <PostContainer>
          <Typography variant="lg" fontWeight="medium" color="primary">
            Create post
          </Typography>
        </PostContainer>
      </section>
    </div>
  );
}
