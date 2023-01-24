import EventSource from "eventsource";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Cache-Control": "no-cache, no-transform",
    "Content-Encoding": "none",
    "Content-Type": "text/event-stream",
  });
  // const eventSource = new EventSource(`http://localhost:8000/v1/event-stream`);

  // eventSource.onmessage = (e) => {
  //   res.write(`data: ${e.data}\n\n`);
  //   //  res.end();
  // };

  for (let i = 1; i <= 2000; i += 1) {
    // setTimeout(() => {
    //   console.log(`${i} seconds past`);
    //   console.log("sending data: ");
    //   res.write("ssssssssssssssssssssss data: " + new Date() + "\n\n");
    //   console.log("ssssssssssssssssssssss data: " + new Date() + "\n\n");
    const val = Math.random();
    console.log(`${i}` + "sssssssssssssssssss data: " + val + "\n\n");
    // if (i % 5 === 0)
    // message needs to start with data:
    res.write("data: " + i + " " + val + "\n\n");
    // }, 10000);
  }
}
