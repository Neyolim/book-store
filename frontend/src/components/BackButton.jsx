import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex justify-start mb-4">
      <Link
        to={destination}
        className="flex items-center justify-center bg-[#E4004B] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#b3003b] transition-colors duration-300"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
