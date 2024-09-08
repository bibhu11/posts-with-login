import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { PageTypes } from "./constants";
import PostsPage from "./pages/PostsPage";

function App() {
  const [page, setPage] = useState<PageTypes>("Landing");
  const onLogin = () => {
    setPage("Posts");
  };
  return page === "Landing" ? <LandingPage onLogin={onLogin} /> : <PostsPage />;
}

export default App;
