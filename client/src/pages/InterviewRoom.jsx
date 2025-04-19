import { useState } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";


const InterviewRoom = () => {
  const { roomId } = useParams();
  const [code, setCode] = useState("// Start coding...");

  if (!roomId) {
    return <div>Error: Room ID is missing.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Room: {roomId}</h1>
      <CodeEditor roomId={roomId} initialCode={code} onCodeChange={setCode} />
    </div>
  );
};

export default InterviewRoom;