import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

export default function ShowBook() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <BackButton />
      <h1 className="text-3xl font-semibold my-6 text-gray-800">Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        book && (
          <div className="flex flex-col bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md p-6 space-y-4">
            {/* ID */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-500">ID</span>
              <span className="text-gray-800 dark:text-gray-200">{book._id}</span>
            </div>

            {/* Title */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-500">Title</span>
              <span className="text-gray-800 dark:text-gray-200">{book.title}</span>
            </div>

            {/* Author */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-500">Author</span>
              <span className="text-gray-800 dark:text-gray-200">{book.author}</span>
            </div>

            {/* Publish Year */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-500">Publish Year</span>
              <span className="text-gray-800 dark:text-gray-200">{book.publishYear}</span>
            </div>

            {/* Created At */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-500">Created At</span>
              <span className="text-gray-800 dark:text-gray-200">
                {book.createdAt ? new Date(book.createdAt).toLocaleString() : 'N/A'}
              </span>
            </div>

            {/* Updated At */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-500">Updated At</span>
              <span className="text-gray-800 dark:text-gray-200">
                {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : 'N/A'}
              </span>
            </div>

            {/* Optional Brand Badge */}
            <div className="mt-4">
              <span className="inline-block bg-[#E4004B] text-white text-sm font-semibold px-3 py-1 rounded-full">
                Book Info
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
}
