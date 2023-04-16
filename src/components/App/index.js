import BlogPost from "../BlogPost";
import React, { useState } from "react";
import { blog } from "../../data/blogs";
// import CommentForm from "../CommentForm";
// import Comment from "../Comment";
// import CommentList from "../CommentList";
// import { comments } from "../CommentList/Comments";

function App() {
  return (
    <BlogPost
      title={blog.title} // values being assigned to props
      author={blog.author}
      date={blog.datePosted}
      image={blog.imageSrc}
      alt={blog.imageAlt}
      content={blog.content}
    />
  );
}

export default App;
