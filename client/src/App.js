import React, {useState, useEffect} from "react";
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { PostDisplay } from "./PostDisplay";

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [])

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
            <Route path="/" exact>
              <h1>Welcome page</h1>
            </Route>
            <Route path="/posts">
              <ul>
                {posts.map(post => 
                  <li><Link to={`post/${post.Slug}`}>{post.Title}</Link></li>
                )}
              </ul>
            </Route>
            <Route path="/post/:slug">
              <PostDisplay />
            </Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
