import { useState } from "react";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

const Card = ({ petData, onLike, onDislike }) => {
  const { name, breed, gender, size, image } = petData;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
              onClick={toggleModal}
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

      {showModal && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 z-50">
          <div className="bg-sky-200 p-8 rounded-lg backdrop-filter backdrop-blur-md  h-80 w-80">
            <div>
              <div onClick={toggleModal} className="absolute right-3 top-3">
                <HiMiniXMark
                  size={30}
                  className="cursor-pointer"
                  fill="black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-sm">Breed: {breed}</p>
              <p className="text-sm">Size: {size}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
