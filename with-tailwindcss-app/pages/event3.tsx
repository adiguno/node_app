import { useEffect, useState } from "react";
import EventSource from "eventsource";

export const Event3 = () => {
  const [source, setSource] = useState<EventSource | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState("");
  let newData = "";

  const handleConnect = () => {
    // use full url here?
    setSource(new EventSource("http://localhost:3000/api/event3"));
    console.log(source);
    setIsConnected(true);
  };
  const handleDisconnect = () => {
    if (source) {
      source.close();
      setIsConnected(false);
    }
  };

  // pulling the setData to here correctly updates the state
  const updateData = (newMessage: string) => {
    setData(`${data} ${newMessage}`);
  };

  useEffect(() => {
    if (source) {
      // the final setData is ran every connect/disconnect
      // aka, this is only taking the previous state
      // not taking the prev sse data as prev state
      source.onopen = (event: MessageEvent) => {
        console.log("event source open");
      };
      source.onmessage = (event: MessageEvent) => {
        console.log("event.data:");
        // console.log(event.data);
        // console.log(data);
        // console.log(newData);

        // work:
        newData = newData + event.data;
        updateData(newData);

        // dont work:
        // updateData(event.data);
        // setData(`${data} ${event.data}`);
        // setData(`${data} ${newData}`);
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

  console.log("data:");
  console.log(data);
  return (
    <>
      <div className="w-screen h-10 bg-slate-500">{data}</div>
      <button className="bg-blue-500" onClick={isConnected ? handleDisconnect : handleConnect}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
      {isConnected ? <div>is currently Connected</div> : <div>it Disconnected</div>}
    </>
  );
};
