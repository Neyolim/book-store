
import React from 'react';
import BookSingleCard from './BookSingleCard';

function BooksCard({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <BookSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
}

export default BooksCard;
