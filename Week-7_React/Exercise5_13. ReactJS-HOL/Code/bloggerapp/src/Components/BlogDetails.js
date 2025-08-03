import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schewzdenier",
      description: "You can install React from npm."
    }
  ];

  return (
    <div className="card">
      <h2>📝 Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <div className="item-title">{blog.title}</div>
          <div className="item-sub">By {blog.author}</div>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
