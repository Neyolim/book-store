import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from "react-icons/ai";

function BookModal({ book, onClose }) {
  return (
    <div
      className='fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full bg-white rounded-2xl p-6 flex flex-col relative shadow-lg animate-fade-in'
      >
        {/* Close button */}
        <AiOutlineClose
          className='absolute top-4 right-4 text-3xl text-red-600 cursor-pointer hover:text-red-800 transition-colors'
          onClick={onClose}
        />

        {/* Publish Year Badge */}
        <div className="self-start bg-[#E4004B] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          {book.publishYear}
        </div>

        {/* Book Info */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{book.title}</h2>
        <h4 className="text-gray-500 mb-4 text-sm">ID: {book._id}</h4>

        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-[#E4004B] text-2xl" />
          <span className="text-gray-700 font-medium">{book.title}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-gray-500 text-2xl" />
          <span className="text-gray-700 font-medium">{book.author}</span>
        </div>

        {/* Extra Content */}
        <div className="mt-4">
          <p className="text-gray-800 font-semibold mb-2">Description:</p>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate asperiores aliquam omnis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
