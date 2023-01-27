import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Event3 } from "./event3";
import { Event4 } from "./event4";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to the jungle</h1>
        <Event3 />
        <Event4 />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">footer</footer>
    </div>
  );
};

export default Home;
