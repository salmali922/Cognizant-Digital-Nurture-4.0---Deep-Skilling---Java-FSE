import React from 'react';

function BookDetails() {
  const books = [
    { title: "Master React", price: 670 },
    { title: "Deep Dive into Angular 11", price: 800 },
    { title: "Mongo Essentials", price: 450 }
  ];

  return (
    <div className="card">
      <h2>📘 Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <div className="item-title">{book.title}</div>
          <div className="item-sub">₹{book.price}</div>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
