import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export type Post = {
  Title: string,
  Author: string,
  Content: string,
  Slug: string
}

export const PostDisplay = () => {
  const [post, setPost] = useState<Post>();
  const [tags, setTags] = useState([]);
  const { slug } = useParams<{slug: string}>();

  useEffect(() => {
    fetch("http://localhost:3001/post/" + slug)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.post.content);
        setTags(data.post.tags);
      });
  }, []);

  return (
    <>
      <h1>{post?.Title}</h1>
      <h2>{post?.Author}</h2>
      <p>{post?.Content}</p>
      {tags.map((tag) => (
        <p>{tag}</p>
      ))}
    </>
  );
};
