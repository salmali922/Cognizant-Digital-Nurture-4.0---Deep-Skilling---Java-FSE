import React from 'react';
import './App.css';
import CourseDetails from './Components/CourseDetails';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <div className="app">
      <h1 className="title">📚 Blogger Dashboard</h1>
      <div className="card-container">
        <CourseDetails />
        <BookDetails />
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
