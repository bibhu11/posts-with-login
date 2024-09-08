import { useState } from "react";
import Button from "../components/Button";
import Comments from "../components/Comments";
import IconTextBox from "../components/IconTextBox";
import PostContainer from "../components/PostContainer";
import PostInfo from "../components/PostInfo";
import Typography from "../components/Typography";
import data from "../postsData.json";
import Modal from "../components/Modal";
import Login from "../Auth";

export default function PostsPage() {
  const [showLogin, setShowLogin] = useState(false);
  const { posts } = data;
  const onClick = () => setShowLogin(true);
  return (
    <div className="max-w-[700px] pt-16 mx-auto">
      <Typography variant="xl" fontWeight="semibold" color="primary">
        Hello Jane
      </Typography>
      <Typography color="secondary" className="mt-3">
        How are you doing today? Would you like to share something with the
        community 🤗
      </Typography>
      <section className="my-10">
        <PostContainer
          onClick={onClick}
          className={`${
            showLogin ? "py-5" : ""
          } transition-all duration-500 ease-in-out`}
        >
          <Typography variant="lg" fontWeight="medium" color="primary">
            Create post
          </Typography>
          <IconTextBox
            iconUrl="dialog.png"
            bodyText="How are you feeling today?"
            className="mt-4 items-center"
          />
          <div className="flex justify-end mt-4">
            <Button
              className={`${
                showLogin ? "px-11 py-2.5" : ""
              } transition-all duration-500 ease-in-out`}
            >
              Post
            </Button>
          </div>
        </PostContainer>
        {posts.map((post) => {
          const { id, postIcon, postText, comments } = post;
          return (
            <PostContainer key={id} className="mt-4">
              <PostInfo {...post} />
              <IconTextBox
                iconUrl={postIcon}
                bodyText={postText}
                className="mt-4"
              />
              <Comments comments={comments} className="mt-3" />
            </PostContainer>
          );
        })}
      </section>
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
        <Login onLogin={() => setShowLogin(false)} registration={true} />
      </Modal>
    </div>
  );
}
