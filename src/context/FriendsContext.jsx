"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    }
    getData();
  }, []);

  return (
    <FriendContext.Provider value={{ friends, setFriends }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => {
  return useContext(FriendContext);
};

export default FriendProvider;

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";


// const FriendsContext = createContext();

// export const FriendProvider = ({ children }) => {
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const res = await fetch("/friends.json");
//         const data = await res.json();
//         setFriends(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     getData();
//   }, []);

//   return (
   
//     <FriendsContext.Provider value={{ friends, setFriends }}>
//       {children}
//     </FriendsContext.Provider>
//   );
// };


// export const useFriends = () => {
//   const context = useContext(FriendsContext);
//   if (!context) {
//     throw new Error("useFriends must be used within a FriendProvider");
//   }
//   return context;
// };

// export default FriendProvider;