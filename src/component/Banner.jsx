"use client";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useFriends } from "@/context/FriendsContext";

const Banner = () => {
  const { friends } = useFriends();
  return (
    <section className="flex flex-col items-center px-4 py-10 bg-[#F8FAFC]">
      <div className="text-center py-4">
        <h1 className="text-5xl font-bold mb-2">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">
          Your personal shelf of meaningful connections.
            Browse, tend, and nurture the  <br />relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white ">
          <IoMdAdd size={18} />
          Add a Friend
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-7xl">
        <div className="bg-white shadow p-4 rounded-xl text-center">
          <span>{friends.length}</span>
          <h3>Total Friends</h3>
        </div>

        <div className="  bg-white shadow p-4 rounded-xl text-center">
          <span>{friends.filter(f => f.status === "overdue").length}</span>
          <h3>Overdue</h3>
        </div>

        <div className=" bg-white  shadow p-4 rounded-xl text-center">
          <span>{friends.filter(f => f.status === "almost due").length}</span>
          <h3>Almost Due</h3>
        </div>

        <div className="  bg-white shadow p-4 rounded-xl text-center">
          <span>{friends.filter(f => f.status === "on-track").length}</span>
          <h3>On Track</h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
