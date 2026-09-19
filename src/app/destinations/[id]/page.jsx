import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const destination = await res.json();

  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
  } = destination;

  // console.log(destination);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <EditModal destination={destination}></EditModal>
        <DeleteAlert destination={destination}></DeleteAlert>
      </div>

      <Image
        className="w-full"
        alt={destinationName}
        src={imageUrl}
        height={500}
        width={800}
      ></Image>

      <div className="p-4 flex flex-col flex-1">
        {/* Country */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <LuMapPin />
          <span>{country}</span>
        </div>

        {/* Destination & Price */}
        <div className="flex justify-between items-start mt-2 gap-3">
          <div>
            <h2 className="text-xl font-bold">{destinationName}</h2>

            {/* Duration */}
            <div className="flex gap-1 items-center text-gray-600 text-sm mt-1">
              <FaRegCalendar />
              <span>{duration}</span>
            </div>
          </div>

          {/* Price */}
          <div className="shrink-0">
            <h3 className="text-2xl font-bold text-cyan-600">${price}</h3>
          </div>
        </div>
        <h1 className="mt-10 text-2xl font-bold">Overview</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
