// "use client";

// import { useFriends } from "@/context/FriendsContext";
// import { MdCall } from "react-icons/md";
// import { IoMdText } from "react-icons/io";
// import { FaVideo } from "react-icons/fa";
// import { FaHandshake } from "react-icons/fa";

// const TimelinePage = () => {
//   const { friends } = useFriends();

//   const allTimeline = friends
//     .flatMap((friend) =>
//       (friend.timeline || []).map((item) => ({
//         ...item,
//       }))
//     )
//     .sort((a, b) => b.id - a.id);

//   // icon function
// const getIcon = (title) => {
//   if (title.includes("Call")) return <MdCall size={16} color="#4CAF50" />;
//   if (title.includes("Text")) return <IoMdText size={16} color="blue" />;
//   if (title.includes("Video")) return <FaVideo size={16} color="#f44336" />;
// };

//   return (
//     <section className="min-h-screen bg-gray-100 px-6 py-10 ">
      
// <div className="max-w-7xl mx-auto ">
//         {/* Heading */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 shadow-sm p-4">
//         Timeline
//       </h1>

//       {/* Empty */}
//       {allTimeline.length === 0 ? (
//         <p className="text-center text-gray-400 mt-20 font-bold text-6xl shadow-sm p-8">
//           No interactions yet
//         </p>
//       ) : (
//         <div className=" ml-4 space-y-5">

//           {allTimeline.map((item) => (
//             <div key={item.id} className=" flex items-start justify-start gap-4 bg-white w-full rounded-lg px-4 py-3 border border-gray-200 hover:shadow-md transition">

//               {/* Icon circle */}
//               <div className="  bg-white border border-gray-300 text-gray-600 p-2 rounded-full shadow-sm">
//                 {getIcon(item.title)}
//               </div>

//               {/* Card */}
//               <div className="">
                
//                 <h3 className="text-sm font-medium text-gray-700">
//                   {item.title}
//                 </h3>

//                 <p className="text-xs text-gray-400 mt-1">
//                   {item.date}
//                 </p>

//               </div>
//             </div>
//           ))}

//         </div>
//       )}
// </div>
//     </section>
//   );
// };

// export default TimelinePage;

"use client";

import { useState } from "react";
import { useFriends } from "@/context/FriendsContext";
import { MdCall } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";

const TimelinePage = () => {
  const { friends } = useFriends();
  const [filter, setFilter] = useState("All");

  const filteredTimeline = friends
    .flatMap((friend) => (friend.timeline || []).map((item) => ({ ...item })))
    .filter((item) => {
      if (filter === "All") return true;
      return item.title.includes(filter);
    })
    .sort((a, b) => b.id - a.id);

  const getIcon = (title) => {
    if (title.includes("Call")) return <MdCall size={16} color="#4CAF50" />;
    if (title.includes("Text")) return <IoMdText size={16} color="blue" />;
    if (title.includes("Video")) return <FaVideo size={16} color="#f44336" />;
    return null;
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 p-4">Timeline</h1>

        <div className="mb-6 ml-4 relative w-64">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer shadow-sm"
          >
            <option value="All">Filter timeline (All)</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <HiOutlineChevronDown size={20} />
          </div>
        </div>

        {filteredTimeline.length === 0 ? (
          <p className="text-center text-gray-400 mt-20 font-bold text-4xl p-8">
            No {filter !== "All" ? filter : ""} interactions yet
          </p>
        ) : (
          <div className="ml-4 space-y-5">
            {filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-start gap-4 bg-white w-full rounded-lg px-4 py-3 border border-gray-200 hover:shadow-md transition"
              >
                <div className="bg-white border border-gray-300 text-gray-600 p-2 rounded-full shadow-sm">
                  {getIcon(item.title)}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
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