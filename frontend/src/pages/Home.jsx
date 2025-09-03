import React, { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import BookTable from '../components/home/BookTable.jsx';
import BooksCard from '../components/home/BooksCard.jsx';
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-6 max-w-7xl mx-auto min-h-screen'>
            {/* View Toggle */}
            <div className='flex justify-center items-center gap-4 mb-6'>
                <button
                    className={`px-4 py-2 rounded-lg font-medium shadow-md transition-colors duration-300 transform ${
                        showType === 'table'
                            ? 'bg-[#E4004B] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                    }`}
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-medium shadow-md transition-colors duration-300 transform ${
                        showType === 'card'
                            ? 'bg-[#E4004B] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                    }`}
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>

            {/* Header & Add Book */}
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-3xl font-semibold'>Books List</h1>
                <Link
                    to="/books/create"
                    className='flex items-center text-[#E4004B] hover:text-[#b3003b] transition-colors transform hover:scale-105'
                >
                    <MdOutlineAddBox className='text-4xl' />
                </Link>
            </div>

            {/* Content */}
            {loading ? (
                <div className="flex justify-center mt-12">
                    <Spinner />
                </div>
            ) : showType === 'table' ? (
                <BookTable books={books} />
            ) : (
                <BooksCard books={books} />
            )}
        </div>
    );
}
