import { Chip, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export type Post = {
  Title: string;
  Author: string;
  content: string;
  Slug: string;
};

export const PostDisplay = () => {
  const [post, setPost] = useState<Post>();
  const [tags, setTags] = useState([]);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    fetch("http://localhost:3001/post/" + slug)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.post);
        setTags(data.post.tags);
      });
  }, [slug]);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      }
    }
  }));

  const classes = useStyles();

  return (
    <div style={{ margin: "24px" }}>
      <h1>{post?.Title}</h1>
      <p>{post?.Author}</p>
      {post?.content ? (
        <ReactMarkdown children={post.content} />
      ) : (
        "Hmm looks like this is missing..."
      )}
      <div className={classes.root}>
        {tags.map((tag) => (
          <Chip variant="outlined" color="primary" label={tag} key={tag} />
        ))}
      </div>
    </div>
  );
};
