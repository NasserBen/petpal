import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

export default function MyMatchBox({ petInfo }) {
  const {
    id,
    name,
    breed,
    gender,
    size,
    image, // Image URL will go here, but it needs to be in the database first
  } = petInfo;

  return (
    <div className="flex justify-between bg-gray-100 p-5 rounded-lg my-5">
      <div className="flex items-center">
        <div className="w-12 h-12 image-container relative mr-2">
          <Image src={image} layout="fill" className="rounded-full" />
        </div>
        <div>{name}</div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-row items-center">
          <div className="m-3 flex">
            <RiPencilFill className="text-xl cursor-pointer fill-gray-500 mr-5 hover:opacity-50" />
            <FaTrash className="text-xl cursor-pointer fill-red-500 hover:opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
