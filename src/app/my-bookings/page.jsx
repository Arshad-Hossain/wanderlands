import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookingPage = async () => {
  //here look we are getting user from session from server component

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  //   console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

  const data = await res.json();
  console.log(data);

  return <div>My booking page</div>;
};

export default MyBookingPage;
