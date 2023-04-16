import React from "react"; // props are passed in as an object here

function BlogPost(props) {
  return (
    <>
      <h1>{props.title}</h1>;<h2>{props.author}</h2>;<h3>{props.date}</h3>;
      <img src={props.image} alt={props.alt} />;<p>{props.content}</p>;
    </>
  );
}

export default BlogPost;
