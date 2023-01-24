import { useEffect, useState } from "react";
import EventSource from "eventsource";

export const Event3 = () => {
  const [source, setSource] = useState<EventSource | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [data, setData] = useState("");

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

  useEffect(() => {
    if (source) {
      source.onmessage = (event) => {
        console.log("event.data:");
        console.log(event.data);
        console.log(data);
        setData(`${data} ${event.data}`);
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
