import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { createContext } from "react";
import ChildComponent from "../components/ChildComponent";

function getUserData() {
  console.log("fetching...");

  return {
    userUuid: "abc",
    userTokens: 10,
  };
}

type User = {
  userUuid: string;
  userTokens: number;
};
type UserContextType = {
  user: User | null;
};

// has to be exported
export const UserContext = createContext<UserContextType>({ user: null });

const Home: NextPage = () => {
  const [userObject, setUserObject] = useState<User | null>(null);

  // console.log("userObject when re-rendering");
  // console.log(userObject);

  useEffect(() => {
    console.log("init");
    const data = getUserData();
    console.log("update user data with:");
    console.log(data);
    // createContext()
    setUserObject(data);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-6xl font-bold">Welcome to the jungle</h1>
      <UserContext.Provider value={{ user: userObject }}>
        <ChildComponent></ChildComponent>
        <ChildComponent></ChildComponent>
      </UserContext.Provider>
    </div>
  );
};

export default Home;
