import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred. Please check the console.");
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen relative bg-gray-50 p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 flex items-center text-gray-700 hover:text-[#E4004B] transition"
      >
        <MdArrowBack className="text-2xl mr-2" />
        <span className="font-medium">Back</span>
      </button>

      {/* Centered Card */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 text-center">
          <h1 className="text-2xl font-semibold mb-4">Delete Book</h1>
          {loading && <Spinner />}
          <p className="text-lg mb-6">Are you sure you want to delete this book?</p>

          <button
            disabled={loading}
            onClick={handleDeleteBook}
            className={`w-full px-6 py-3 rounded-lg font-medium text-white shadow-md transition transform ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 hover:scale-105'
            }`}
          >
            {loading ? 'Deleting...' : 'Yes, Delete it'}
          </button>
        </div>
      </div>
    </div>
  );
}
