import { useHistory } from "react-router-dom";
import "./App.css";
import Card from "./Card";
import { Post } from "./PostDisplay";

export const PostsPage = ({ posts }: { posts: Post[] }) => {
  const history = useHistory();

  const redirectToPost = (to: string) => {
    history.push(to);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post) => (
        <Card
          title={post.Title}
          author={post.Author}
          to={`post/${post.Slug}`}
          handleClick={redirectToPost}
          key={post.Slug}
        />
      ))}
    </div>
  );
};
