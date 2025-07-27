import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  // Step 6: loadPosts using Fetch API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data.slice(0, 10) }); // limit to 10 posts
      })
      .catch((error) => {
        throw new Error('Failed to load posts');
      });
  };

  // Step 7: Call loadPosts inside componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Step 8: Render posts
  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }

  // Step 9: Handle component errors
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
  }
}

export default Posts;
