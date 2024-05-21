import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
