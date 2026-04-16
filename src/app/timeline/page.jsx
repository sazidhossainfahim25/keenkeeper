"use client";

import { useFriends } from "@/context/FriendsContext";
import { MdCall } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const TimelinePage = () => {
  const { friends } = useFriends();

  const allTimeline = friends
    .flatMap((friend) =>
      (friend.timeline || []).map((item) => ({
        ...item,
      }))
    )
    .sort((a, b) => b.id - a.id);

  // icon function
  const getIcon = (title) => {
    if (title.includes("Call")) return <MdCall size={16} />;
    if (title.includes("Text")) return <IoMdText size={16} />;
    if (title.includes("Video")) return <FaVideo size={16} />;
    if (title.includes("Meetup")) return <FaHandshake size={16} />;
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Timeline
      </h1>

      {/* Empty */}
      {allTimeline.length === 0 ? (
        <p className="text-center text-gray-400 mt-20">
          No interactions yet
        </p>
      ) : (
        <div className="relative border-l border-gray-300 ml-4 space-y-5">

          {allTimeline.map((item) => (
            <div key={item.id} className="relative flex items-start gap-4">

              {/* Icon circle */}
              <div className="absolute -left-[14px] bg-white border border-gray-300 text-gray-600 p-2 rounded-full shadow-sm">
                {getIcon(item.title)}
              </div>

              {/* Card */}
              <div className="bg-white w-full rounded-lg px-4 py-3 border border-gray-200 hover:shadow-md transition">
                
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
    </section>
  );
};

export default TimelinePage;