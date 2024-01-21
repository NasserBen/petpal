// components/Card.js
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

const Card = ({ petData, onLike, onDislike }) => {
  const { name, breed, gender, size, image } = petData;

  return (
    <div>
      <div className="flex flex-col items-center border border-solid border-#018496 rounded-lg px-5 pb-5 max-w-96 bg-sky-200 overflow-x-hidden">
        <div className="w-96 h-96 mb-2 image-container relative">
          <Image src={image} layout="fill" className="rounded-t-lg" />
        </div>
        <div className="flex flex-row">
          <p className="text-md font-semibold">{name}</p>
          <span style={{ width: "5px" }}></span>
          {gender === "female" ? (
            <IoMdFemale size={20} color="#FF69B4" />
          ) : (
            <IoMdMale size={20} color="#018496" />
          )}
        </div>
        {/* <p className="text-sm">{breed}</p>
        <p className="text-sm">{size}</p> */}
        <div className="flex items-center mt-3 space-x-3">
          <div>
            <MdCancel
              size={50}
              className="fill-custom-main-dark cursor-pointer hover:fill-red-500"
              onClick={onDislike}
            />
          </div>
          <div>
            <FaInfoCircle
              size={30}
              color="gray"
              className="cursor-pointer hover:fill-gray-400"
            />
          </div>
          <div>
            <IoHeartCircleSharp
              size={50}
              className="fill-custom-main-dark cursor-pointer hover:fill-pink-500 "
              onClick={onLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
