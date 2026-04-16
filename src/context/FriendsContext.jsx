"use client";
import { createContext, useContext, useEffect, useState } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const savedFriends = localStorage.getItem("my_friends_data");

    if (savedFriends) {
      setFriends(JSON.parse(savedFriends));
    } else {
      async function getData() {
        try {
          const res = await fetch("/friends.json");
          const data = await res.json();
          setFriends(data);
          localStorage.setItem("my_friends_data", JSON.stringify(data));
        } catch (error) {
          console.error("Error loading data:", error);
        }
      }
      getData();
    }
  }, []);

  useEffect(() => {
    if (friends.length > 0) {
      localStorage.setItem("my_friends_data", JSON.stringify(friends));
    }
  }, [friends]);

  return (
    <FriendContext.Provider value={{ friends, setFriends }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => useContext(FriendContext);
export default FriendProvider;