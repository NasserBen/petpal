"use client";
import MyPetBox from "../../components/myPetBox";
import { RiPencilFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Profile() {
  const petData = [
    {
      id: 1,
      name: "Rocky",
      breed: "Terrier",
      gender: "male",
      size: "medium",
      image:
        "https://images.unsplash.com/photo-1659946431867-796a192ff9ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVycmllciUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Hazel",
      breed: "Tabby",
      gender: "female",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1488015795646-7e22a773d72a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhYmJ5fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Cookie",
      breed: "Persian",
      gender: "male",
      size: "medium",
      image:
        "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Minnie",
      breed: "Munchkin",
      gender: "female",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bmNoa2luJTIwY2F0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Sophie",
      breed: "Turkish Angora",
      gender: "Female",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHR1cmtpc2glMjBhbmdvcmElMjBnaW5nZXIlMjBjYXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Blue",
      breed: "Husky",
      gender: "male",
      size: "large",
      image:
        "https://images.unsplash.com/photo-1547407139-3c921a66005c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVza3l8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center max-w-xl mx-auto mt-10 mb-36">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">
          Me <span className="text-gray-400">({session?.user?.email})</span>
        </div>
        <div className="flex items-center text-gray-500 hover:underline cursor-pointer ">
          <RiPencilFill className="mr-1" />
          Edit
        </div>
      </div>
      <div className="mt-3">
        <p>
          I'm a friendly individual who believes in the magic of pet
          connections. Whether it's bonding over shared stories of our pets'
          antics or organizing weekend picnics for our fur babies, I'm all in!
          Besides pet playdates, I enjoy exploring new pet-friendly cafes and
          capturing adorable moments with my pet!
        </p>
      </div>

      <div className="flex justify-between mt-20">
        <div className="text-3xl font-bold">My Pets</div>
        <div className="flex items-center text-gray-500 hover:underline cursor-pointer ">
          <FaPlus className="mr-1" />
          Add Pet
        </div>
      </div>
      {petData.map((pet) => (
        <MyPetBox key={pet.id} petInfo={pet} />
      ))}

      <div className="flex justify-center mt-5">
        <button
          onClick={() => signOut()}
          className="bg-gray-500 text-white font-bold px-6 py-2 mt-3 max-w-48 hover:opacity-50 rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
