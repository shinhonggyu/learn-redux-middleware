import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
};

export default App;
