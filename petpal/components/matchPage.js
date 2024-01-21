import PendingMatchBox from "./pendingMatchBox";
import MyMatchBox from "./myMatchBox";

export default function MatchPage() {
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

  return (
    <div className="flex flex-col justify-center max-w-xl mx-auto mt-10 mb-36">
      <div className="text-3xl font-bold">Pending Matches</div>
      {petData.map((pet) => (
        <PendingMatchBox key={pet.id} petInfo={pet} />
      ))}
      <div className="text-3xl font-bold mt-20">My Matches</div>
      {petData.map((pet) => (
        <MyMatchBox key={pet.id} petInfo={pet} />
      ))}
    </div>
  );
}
