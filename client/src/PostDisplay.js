import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

export const PostDisplay = () => {
  const [post, setPost] = useState({});
  let { slug } = useParams();


  useEffect(() => {
    fetch("http://localhost:3001/post/" + slug)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    post && <>
       <h1>{post.Title}</h1>
       <h2>{post.Author}</h2>
       <p>{post.Content}</p>
    </>
  )
}