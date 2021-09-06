import { AppBar, Toolbar, Button, makeStyles, Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SimpleCard from "./Card";
import { PostDisplay, Post } from "./PostDisplay";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
  }));

  const classes = useStyles();

  return (
    <>
      <Router>
        <AppBar position="sticky">
          <Toolbar>
            <nav>
              <Button href="/" color="inherit">Home</Button>
              <Button href="/posts" color="inherit">Posts</Button>
            </nav>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <h1>Welcome page</h1>
          </Route>
          <Route path="/posts">
            <div style={{display: "flex", flexWrap: "wrap"}}>
            {posts.map((post) => (
              <SimpleCard title={post.Title} to={`post/${post.Slug}`}/>
            ))}
            </div>
          </Route>
          <Route path="/post/:slug">
            <PostDisplay />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
