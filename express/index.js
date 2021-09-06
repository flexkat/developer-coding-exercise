const express = require("express");
const { getTopWords } = require("./utils/tags");
const cors = require("cors");
const app = express();
const rootPostDir = "../assets/posts/";
const fs = require("fs");
const matter = require("gray-matter");

app.use(cors());

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get("/post/:slug", function (req, res) {
  const slug = req.params.slug;
  const post = matter.read(rootPostDir + slug + ".md");
  const tags = getTopWords(post.content);

  res.send({ post: { content: post.content, ...post.data, tags: tags } });
});

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ]
 */
app.get("/posts", function (req, res) {
  const allPosts = [];
  fs.readdir(rootPostDir, function (err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      const result = matter.read(rootPostDir + file);
      const resp = { ...result.data, content: result.content };
      allPosts.push(resp);
    });
    res.send(allPosts);
  });
});

app.listen(3001, function () {
  console.log("Dev app listening on port 3001!");
});
