import { useEffect, useState } from "react";
import EventSource from "eventsource";

export const Event4 = () => {
  const [source, setSource] = useState<EventSource | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState("");
  let newData = "";

  const getMessage = () => {
    setSource(new EventSource("http://localhost:3000/api/event3"));
    console.log(source);
    setIsConnected(true);
  };

  // pulling the setData to here correctly updates the state
  const updateData = (newMessage: string) => {
    setData(`${data} ${newMessage}`);
  };

  useEffect(() => {
    if (source) {
      source.onopen = (event: MessageEvent) => {
        console.log("event source open");
      };
      source.onmessage = (event: MessageEvent) => {
        console.log("event.data:");

        // work:
        newData = newData + event.data;
        updateData(newData);
        // console.log(typeof event.data); // string
        // ends the connection when reached the end of the messages
        if (event.data.includes("asdf")) {
          console.log("end connection here");
          setIsConnected(false);
          source.close();
        }
      };
      source.onerror = (event) => {
        console.log(event);
        setIsConnected(false);
      };
      return () => {
        source.close();
      };
    }
  }, [source]);

  console.log("event 4 data:");
  console.log(data);
  return (
    <>
      <div className="w-screen h-10 bg-slate-500">{data}</div>
      <button className="bg-blue-500" onClick={getMessage}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
      {isConnected ? <div>is currently Connected</div> : <div>it Disconnected</div>}
    </>
  );
};
