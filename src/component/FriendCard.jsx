"use client";
import { useFriends } from "@/context/FriendsContext";
import Link from "next/link";
export default function FriendCard() {
  const { friends, loading } = useFriends();

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-[#1F2937] font-bold py-2.5 lg:text-left text-center px-1">
          Your Friends
        </h2>
        {/* card show */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-1 py-4">
          {friends?.map((friend) => (
            <Link key={friend.id} href={`/friend/${friend.id}`}>
              <div className="bg-white p-4 rounded-xl shadow text-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">

                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />

                <h2 className="font-semibold py-3">{friend.name}</h2>

                <h3 className="py-2 text-[#64748B] text-[18px] font-normal">
                  {friend.days_since_contact}d ago
                </h3>

                <span className="text-sm text-[#244D3F] py-1 px-4 rounded-full bg-[#CBFADB]">
                  {friend.tags}
                </span>

                <div className="pt-4">
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
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}