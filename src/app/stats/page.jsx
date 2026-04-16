"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useFriends } from "@/context/FriendsContext";

const FriendshipAnalytics = () => {
  const { friends } = useFriends();

  const allInteractions = friends.flatMap(friend => friend.timeline || []);

  const stats = [
    { name: 'Call', value: allInteractions.filter(item => item.title.includes("Call")).length },
    { name: 'Text', value: allInteractions.filter(item => item.title.includes("Text")).length },
    { name: 'Video', value: allInteractions.filter(item => item.title.includes("Video")).length },
  ];

  const COLORS = ['#10B981', '#3B82F6', '#EF4444'];
  const hasData = stats.some(item => item.value > 0);

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Friendship Analytics</h1>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Interactions Breakdown</h2>
          
          <div style={{ width: '100%', height: 350 }}>
            {hasData ? (
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={stats}
                    cx="50%" cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {stats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center">
                <p className="text-lg">No data to display</p>
                <p className="text-sm">Start a conversation with a friend to see stats.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;