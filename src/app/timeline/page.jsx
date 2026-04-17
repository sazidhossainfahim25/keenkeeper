"use client";

import { useState } from "react"; 
import { useFriends } from "@/context/FriendsContext";
import { MdCall } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa"; 

const TimelinePage = () => {
  const { friends } = useFriends();

  //  filter state
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  const allTimeline = friends
    .flatMap((friend) =>
      (friend.timeline || []).map((item) => ({
        ...item,
      }))
    )
    .sort((a, b) => b.id - a.id);

  const filteredTimeline =
    filter === "all"
      ? allTimeline
      : allTimeline.filter((item) =>
          item.title.toLowerCase().includes(filter)
        );

  // icon function
  const getIcon = (title) => {
    if (title.includes("Call")) return <MdCall size={16} color="#4CAF50" />;
    if (title.includes("Text")) return <IoMdText size={16} color="blue" />;
    if (title.includes("Video")) return <FaVideo size={16} color="#f44336" />;
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10 ">
      <div className="max-w-7xl mx-auto ">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 shadow-sm p-4">
          Timeline
        </h1>

        {/* FILTER DROPDOWN ADD */}
        <div className="relative mb-6 max-w-md">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between w-60 bg-white px-5 py-4 rounded-xl cursor-pointer shadow-sm"
          >
            <span className="text-gray-600 text-lg">
              {filter === "all"
                ? "Filter timeline"
                : filter.toUpperCase()}
            </span>

            <FaChevronDown
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          {open && (
            <div className="absolute mt-2 w-60 bg-white rounded-xl shadow-lg  p-3 space-y-2 z-50">
              {["all", "call", "text", "video"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setFilter(type);
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 shadow-sm "
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Empty */}
        {filteredTimeline.length === 0 ? (
          <p className="text-center text-gray-400 mt-20 font-bold text-3xl shadow-sm p-8">
            Empty
          </p>
        ) : (
          <div className="ml-4 space-y-5">

            {/* changed allTimeline → filteredTimeline */}
            {filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-start gap-4 bg-white w-full rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
              >

                {/* Icon */}
                <div className="bg-white border border-gray-300 text-gray-600 p-2 rounded-full shadow-sm">
                  {getIcon(item.title)}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.date}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TimelinePage;