import Image from "next/image"
import imagePet from "./pet1.jpeg";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoMdFemale } from "react-icons/io";

export default function match(){

    const { name, breed, gender, size, treat , imageURL} = match;

return(
    <div className="flex flex-col items-center">
        <div className="border border-solid border-#018496 rounded">
        <div className="flex flex-col items-center mt-5 border border-solid border-#018496 rounded p-4 max-w-sm bg-sky-200">
          <Image src={imagePet} alt="My Post" className="mb-2" height={200} width={200}/>
         <div className="flex flex-row pl-5">
          <p className="text-md font-semibold">Sophie</p>
          <span style={{ width: '5px' }}></span> 
          <IoMdFemale size={20} color="#018496"  />
          
          </div>
          <p className="text-sm">Turkish Angora</p>
          <p className="text-sm">Small</p>
         
          <div className="flex flex-row items-center">
            
        <IoHeartCircleSharp size={50} color="#018496" />
        <span style={{ width: '30px' }}></span> 
        <MdCancel size={50} color="#018496" />
        </div>
   
      </div>
        
        </div>
        </div>
);

}
