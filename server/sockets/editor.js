const setupEditorSocket = (io) => {
    io.on("connection", (socket) => {
      console.log("🧑‍💻 New client connected");
  
      socket.on("join-room", (roomId) => {
        socket.join(roomId);
        console.log(`Client joined ${roomId}`);
      });
  
      socket.on("code-change", ({ roomId, code }) => {
        socket.to(roomId).emit("remote-code-change", { code });
      });
  
      socket.on("disconnect", () => {
        console.log("❌ Client disconnected");
      });
    });
  };
  
  module.exports = setupEditorSocket;
  