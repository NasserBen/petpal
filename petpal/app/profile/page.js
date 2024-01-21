import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import profilePic from "./pet1.jpeg";

export default function Profile() {
  // const { userName, posts, followers, following, bio, profilePic } = profile;

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Profile information */}
      <div className="w-1/4 p-10">
        {/* Profile picture */}
        {profilePic && (
          <div className="mb-4 flex flex-col items-center">
            <Image src={profilePic} alt="Profile Picture" className="rounded-full w-28 h-28 mb-2" />

            {/* Username with setting icon */}
            <div className="flex items-center mb-4">
              <p className="text-xl font-bold mr-2">{"Sophie"}</p>
              <IoMdSettings color="#A3A3A3" size={30} />
            </div>

            {/* Counts and Bio container */}
            {/* Counts */}
            <div className="mb-10 flex flex-col">
              <div className="text-center border-2 mb-2">
                <h2 className="text-sm font-semibold mb-1">{"Turkish Angora"}</h2>
                <p className="text-xs text-gray-500">Cat</p>
              </div>
              <div className="text-center border-2 mb-2">
                <h2 className="text-sm font-semibold mb-1">{"Small"}</h2>
                <p className="text-xs text-gray-500">Size</p>
              </div>
              <div className="text-center border-2 mb-2">
                <h2 className="text-sm font-semibold mb-1">{"3"}</h2>
                <p className="text-xs text-gray-500">Age</p>
              </div>
              <div className="text-center border-2">
                <h2 className="text-sm font-semibold mb-1">{"Food"}</h2>
                <p className="text-xs text-gray-500">Favorite Treat</p>
              </div>
              
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
