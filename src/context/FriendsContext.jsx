"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FriendsContext = createContext();

export function FriendsProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  return (
    <FriendsContext.Provider value={{ friends, setFriends, loading }}>
      {children}
    </FriendsContext.Provider>
  );
}

export function useFriends() {
  return useContext(FriendsContext);
}