import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useUserContext } from "../context/userContext";

const Userlist = ({ user, session }) => {
  const { addUser } = useUserContext();
  const router = useRouter();

  // const res = await axios.get(
  //   `http://localhost:3000/api/users/${user._id}`
  // );
  addUser(res.data.user);

  return (
    <div className="w-72 shadow-md rounded-md hover">
      <div className="relative h-52">
        <Image src={user.imageUrl} layout="fill" />
      </div>
      <div className="px-3 py-5 space-y-2 bg-teal-900 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-white font-semibold italic">
            {user.username}
          </h3>
        </div>
        <div>
          <p className="text-lg text-white">
            <span className="w-20 inline-block font-bold">Email</span>{" "}
            {user.email}
          </p>
          <p className="text-lg text-white">
            <span className="w-20 inline-block font-bold">Role</span>{" "}
            {user.role}
          </p>
          <p className="text-lg text-white">
            <span className="w-20 inline-block font-bold">Contact</span>{" "}
            {user.contact}
          </p>
        </div>
        <div>
          <Link href={`userId`}>
            <a className="w-full bg-white text-teal-900 rounded-full py-1.5 px-10 font-semibold">
              Read More...
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
