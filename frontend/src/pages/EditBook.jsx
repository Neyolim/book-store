import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import Spinner from '../components/Spinner';

export default function EditBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to fetch book data.');
        console.error(err);
      });
  }, [id]);

  const handleEditBook = () => {
    setError('');
    if (!title.trim() || !author.trim() || !publishYear.toString().trim()) {
      setError("All fields are required");
      return;
    }

    const yearNumber = Number(publishYear);
    if (isNaN(yearNumber) || yearNumber < 1000 || yearNumber > new Date().getFullYear()) {
      setError("Enter a valid publish year");
      return;
    }

    const data = { title: title.trim(), author: author.trim(), publishYear: yearNumber };
    setLoading(true);

    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to update book.');
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen relative bg-gray-50 p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-primary transition"
      >
        <MdArrowBack className="text-2xl mr-2" />
        <span className="font-medium">Back</span>
      </button>

      {/* Centered Form */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Edit Book</h1>

          {loading && <Spinner />}
          {error && <div className="text-red-600 mb-4 text-center">{error}</div>}

          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4004B] transition"
                placeholder="Enter book title"
              />
            </div>

            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                Author
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4004B] transition"
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label htmlFor="publishYear" className="block text-sm font-medium text-gray-700 mb-1">
                Publish Year
              </label>
              <input
                id="publishYear"
                type="number"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E4004B] transition"
                placeholder="Enter year"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleEditBook}
              className="px-6 py-2 bg-[#E4004B] text-white rounded-lg font-medium shadow-md hover:bg-[#b3003b] hover:scale-105 transform transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
