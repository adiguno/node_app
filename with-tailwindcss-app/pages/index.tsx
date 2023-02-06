import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [bio, setBio] = useState("");
  const [generatedBios, setGeneratedBios] = useState<String>("");

  const prompt = `Generate a funny twitter bio with this context: ${bio}`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");

    console.log("---- prompt =====");
    console.log(prompt);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("returned response:");
    console.log(response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = response.body;
    console.log("readable stream data:");
    console.log(data);
    if (!data) {
      return;
    }

    const reader = data.getReader(); // web api
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();

      console.log(`----------got stream data----------`);
      console.log(value);
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={4}
          className="w-full rounded-md bg-slate-200 border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
          placeholder={"e.g. Senior Engineer @vercel. Tweeting about web dev & AI."}
        />

        <button
          className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
          onClick={(e) => generateBio(e)}
        >
          Generate your bio &rarr;
        </button>

        <div className="bg-slate-300">
          <div>
            <h2 className="text-red-900">Your generated bios</h2>
          </div>
          <div className="">{generatedBios}</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
