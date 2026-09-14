import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const DestinationCard = ({ destination }) => {
  const { imageUrl, price, destinationName, duration, country } = destination;
  return (
    <div className="border">
      <Image
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      ></Image>

      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div>
          <h2 className="text-xl font-bold">{destinationName}</h2>
        </div>
        <div className="flex gap-1 items-center">
          <SlCalender /> {duration}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
