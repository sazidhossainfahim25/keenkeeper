"use client";
import React from "react";
import { FaVideo } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoMdText } from "react-icons/io";
import { MdCall, MdDeleteOutline } from "react-icons/md";
import { useParams } from "next/navigation";
import { useFriends } from "@/context/FriendsContext";
import toast from "react-hot-toast"
import { notFound } from "next/navigation";

const DetailPage = () => {
  const { id } = useParams();
  const { friends, setFriends} = useFriends();

  const friend = friends.find((f) => f.id === Number(id));
    if (!friend) {
    notFound();
  }
    const handleCheckIn = (type) => {
  if (!friend) return;

  const newEntry = {
    id: Date.now(),
    title: `${type} with ${friend.name}`,
    date: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };

  const updatedFriends = friends.map((f) => {
    if (f.id === Number(id)) {
      return {
        ...f,
        timeline: [newEntry, ...(f.timeline || [])],
        days_since_contact: 0,
      };
    }
    return f;
  });

  setFriends(updatedFriends);

  //  toast
  toast.success(`${type} with ${friend.name}`);
};

  if (!friend) {
    return <p>Loading...</p>;
  }
  return (
    <section className=" p-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto p-2 lg:p-6 grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-2">
        {/* LEFT CARD */}
        <div>
          <div className="bg-white p-3 rounded-xl shadow text-center">
            <img
              src={friend.picture}
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h2 className="font-semibold my-3">{friend.name}</h2>
            <span
              className={`px-6 py-2 text-xs rounded-full ${
                friend.status === "on-track"
                  ? "bg-[#244D3F] text-white"
                  : friend.status === "overdue"
                    ? "bg-[#EF4444] text-white"
                    : "bg-[#EFAD44] text-white"
              }`}
            >
              {friend.status}
            </span>

            <div className="pt-4">
              <span className="text-sm  text-[#244D3F] py-1 px-4 rounded-full bg-[#CBFADB]">{friend.tags}</span>
            </div>
            <p className="text-sm  mt-2 text-[16px] font-semibold text-[#64748B]">{friend.bio}</p>
            <p className="text-sm  mt-2 text-[14px] font-semibold"> Email: {friend.email}</p>
          </div>
          <div className="pt-3 space-y-2">
            <button className="flex items-center justify-center gap-2 bg-white shadow w-full py-2 px-3 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
              <HiOutlineBellSnooze />
              <span>Snooze 2 weeks</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white shadow w-full py-2 px-3 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 text-green-600">
              <GoArchive />
              <span>Archive</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white shadow w-full py-2 px-3 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 text-red-700">
              <MdDeleteOutline />
              <span >Delete</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4">
          {/* TOP STATS */}
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 ">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
              <p className="text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.goal}</h3>
              <p className="text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.next_due_date}</h3>
              <p className="text-sm">Next Due</p>
            </div>
          </div>
          <div className="bg-white p-7 rounded-xl shadow ">
            <div className="flex justify-between items-center">
              <h3>{friend.current_progress}</h3>
              <span className="bg-white shadow lg:py-1 lg:px-3 px-2 py-1  rounded-sm">
                Edit
              </span>
            </div>
            <h3>Connect every 30 days</h3>
          </div>

          {/* ACTION BUTTONS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="mb-3 font-semibold">Quick Check-In</h3>

            <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 p-8">
              <button 
              onClick={() => handleCheckIn("Call")}
              className="flex flex-col items-center justify-center shadow-sm bg-[#F8FAFC] px-4 py-2 rounded">
                <MdCall className="text-2xl" />
                <span>Call</span>
              </button>
              <button 
              onClick={() => handleCheckIn("Text")}
              className=" flex flex-col items-center justify-center shadow-sm bg-[#F8FAFC] px-4 py-2 rounded">
                <IoMdText className="text-2xl" />
                <span>Text</span>
              </button>
              <button 
              onClick={() => handleCheckIn("Video")}
              className=" flex flex-col items-center justify-center shadow-sm bg-[#F8FAFC] px-4 py-2 rounded">
                <FaVideo className="text-2xl" />
                <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
