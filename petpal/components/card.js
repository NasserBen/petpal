"use client";
import { IoHeartCircleSharp, IoMdFemale } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

export default function Card({petData}){
    const {
        id,
        name,
        breed,
        gender,
        size,
        image, // Image URL will go here, but it needs to be in the database first
      } = petData;
    return(
        <div key={id} className="">
          <div className="flex flex-col items-center mt-5 border border-solid border-#018496 rounded p-4 max-w-80 bg-sky-200">
            <Image src={image} className="mb-2" height={200} width={200} />
            <div className="flex flex-row pl-5">
              <p className="text-md font-semibold">{name}</p>
              <span style={{ width: '5px' }}></span> 3
              {/* {gender === 'female' && <IoMdFemale size={20} color="#018496" />} */}
            </div>
            <p className="text-sm">{breed}</p>
            <p className="text-sm">{size}</p>
            <div className="flex flex-row items-center">
              <IoHeartCircleSharp size={50} color="#018496" />
              <span style={{ width: '30px' }}></span> 
              <MdCancel size={50} color="#018496" />
            </div>
          </div>
        </div>
    );
}