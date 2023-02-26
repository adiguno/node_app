import type { NextPage } from "next";
import { useContext } from "react";
import { UserContext } from "../pages";

const ChildComponent: NextPage = () => {
  const { user } = useContext(UserContext);
  console.log("child user");
  console.log(user);

  let warningDiv;
  if (user && user?.userTokens < 10) {
    warningDiv = <div className="bg-red-400">Not enough tokens</div>;
  }

  return (
    <div className="bg- my-2 flex flex-col items-center justify-center bg-slate-400 py-2">
      {warningDiv}
      <h1 className="text-6xl font-bold">{user?.userUuid}</h1>
      <h1 className="text-6xl font-bold">{user?.userTokens}</h1>
    </div>
  );
};

export default ChildComponent;
