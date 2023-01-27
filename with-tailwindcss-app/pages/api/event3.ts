import EventSource from "eventsource";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // openai
  // const eventSource = new EventSource(`http://localhost:8000/v1/event-stream`);
  // eventSource.onmessage = (e) => {
  //   res.write(`data: ${e.data}\n\n`);
  //   //  res.end();
  // };

  res.writeHead(200, {
    Connection: "keep-alive",
    "Cache-Control": "no-cache, no-transform",
    "Content-Encoding": "none",
    "Content-Type": "text/event-stream",
  });

  // for (let i = 1; i <= 2000; i += 1) {
  //   //   console.log(`${i} seconds past`);
  //   //   console.log("sending data: ");
  //   //   console.log("ssssssssssssssssssssss data: " + new Date() + "\n\n");
  //   const val = Math.random();
  //   console.log(`${i}` + "sssssssssssssssssss data: " + val + "\n\n");
  //   // if (i % 5 === 0)
  //   // message needs to start with data:
  //   res.write("data: " + i + " " + val + "\n\n");
  // }

  // setTimeout is nonblocking, doesn't work in a for loop
  // for (let i = 1; i <= 10; i += 1) {
  //   setTimeout(() => {
  //     const val = Math.random();
  //     res.write("data: " + i + " " + val + "\n\n");
  //     console.log("data: " + i + " " + val + "\n\n");
  //   }, 1000);
  // }
  let i = 0;
  const intervalId = setInterval(() => {
    console.log("This function runs every 1 seconds");
    i += 1;

    const val = Math.random();
    console.log("data: " + i + " " + val + "\n\n");
    res.write("data: " + i + " " + val + "\n\n");
    if (i === 5) {
      clearInterval(intervalId);

      const end_str = "asdf";
      res.write("data: " + end_str + "\n\n");
    }
  }, 1000);
}
