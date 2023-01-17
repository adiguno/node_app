import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const handleClick = async () => {
    setData("");
    setLoading(true);
    const response = { something: "value" };
    await setTimeout(() => {
      console.log("delay fetching data");
      setData(response.something);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {loading && <div className="spinner">Loading...</div>}
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
          loading ? "bg-gray-300 hover:bg-gray-300" : ""
        }`}
        onClick={handleClick}
        disabled={loading}
      >
        Fetch Data
      </button>
      {data && <div>{data}</div>}
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to the jungle</h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">footer</footer>
    </div>
  );
};

export default Home;
