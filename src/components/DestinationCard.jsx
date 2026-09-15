import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } =
    destination;

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>

      {/* Card Content */}
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

        {/* Book Button */}
        <Link href={`/destinations/${_id}`} className="block mt-auto pt-4">
          <Button variant="ghost" className="w-full text-cyan-500">
            <FiExternalLink />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
