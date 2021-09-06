import { AppBar, Toolbar, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PostDisplay, Post } from "./PostDisplay";
import { PostsPage } from "./PostsPage";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Router>
        <AppBar position="sticky" style={{ backgroundColor: "#7e3ff2" }}>
          <Toolbar>
            <nav>
              <Button href="/" color="inherit">
                Home
              </Button>
              <Button href="/posts" color="inherit">
                Posts
              </Button>
            </nav>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <h1>Welcome page</h1>
          </Route>
          <Route path="/posts">
            <PostsPage posts={posts} />
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
