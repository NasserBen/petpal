import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
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
        <div className="w-12 h-12 overflow-hidden rounded-full mr-2">
          <Image
            src={image}
            height={50}
            width={50}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>{name}</div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="m-3">
            <FaInstagram className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
