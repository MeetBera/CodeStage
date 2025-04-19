import { useEffect, useRef, useState } from "react";
import { useSocket } from "../context/SocketContext";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ roomId, initialCode = "// Start coding...", onCodeChange }) => {
  const { socket, isConnected } = useSocket();
  const [code, setCode] = useState(initialCode);
  const isRemoteChange = useRef(false); // prevent infinite loop

  const handleEditorChange = (value) => {
    setCode(value);

    if (onCodeChange) onCodeChange(value); // Call the onCodeChange prop if it exists

    if (isConnected && !isRemoteChange.current) {
      socket.emit("code-change", { roomId, code: value });
    }

    isRemoteChange.current = false;
  };

useEffect(() => {
  if (!isConnected) {
    return;
  }

  console.log("Joining room:", roomId);
  socket.emit("join-room", roomId);

  socket.on("remote-code-change", ({ code }) => {
    console.log("Received remote code change:", code);
    isRemoteChange.current = true;
    setCode(code);
  });

  return () => {
    console.log("Leaving room:", roomId);
    socket.off("remote-code-change");
  };
}, [isConnected, roomId, socket]);

  return (
    <Editor
      height="80vh"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={handleEditorChange}
    />
  );
};

export default CodeEditor;