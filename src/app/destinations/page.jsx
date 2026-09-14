import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const destinations = await res.json();
  console.log(destinations);

  return (
    <div>
      <h1>All destinations</h1>

      <div>
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
