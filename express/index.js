const express = require('express')
const { getTopWords } = require('./utils/tags')
const cors = require('cors')
const app = express()
const rootPostDir = './server/assets/posts'
const posts = require("../assets/posts/posts.json")

app.use(cors())

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get('/post/:slug', function (req, res) {
  const post = posts.find(post => post.Slug === req.params.slug)
  const tags = getTopWords(post.Content);
  res.send({post: {content: post, tags: tags}})
  // ... fill in your own code ...
  // todo: add fetch with reading the markdown later on

})

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
app.get('/posts', function (req, res) {
  console.log("called", posts.length)
  res.send(posts)
  // ... fill in you own code ...
  // todo: add fetch with reading the markdown later on
})

app.listen(3001, function () {
  console.log('Dev app listening on port 3001!')
})
