import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from "react";
import BookModal from "./BookModal";

function BookSingleCard({ book }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={book._id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 w-full flex flex-col justify-between"
        >
            {/* Publish Year Badge */}
            <div className="absolute top-4 right-4 bg-[#E4004B] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                {book.publishYear}
            </div>

            {/* Book Info */}
            <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-xs">ID: {book._id}</span>

                <div className="flex items-center gap-2">
                    <PiBookOpenTextLight className="text-[#E4004B] text-2xl" />
                    <h2 className="text-lg font-bold text-gray-800 line-clamp-2">{book.title}</h2>
                </div>

                <div className="flex items-center gap-2">
                    <BiUserCircle className="text-gray-500 text-2xl" />
                    <span className="text-gray-700 font-medium">{book.author}</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around items-center mt-6 pt-4 border-t border-gray-200">
                <BiShow
                    className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-800 transition-colors duration-200" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition-colors duration-200" />
                </Link>
            </div>

            {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default BookSingleCard;
