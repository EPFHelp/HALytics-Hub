import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, req) => {
  const ip = req.socket.remoteAddress;
  console.log(`New client connected from ${ip}`);

  ws.on('message', (message) => {
    const str = message.toString();
    try {
      const data = JSON.parse(str);
      console.log(`✅ Received JSON:`, data);
    } catch (err) {
      console.log("📦 Received non-JSON:", str);
    }
  });
  
  ws.on('close', () => {
    console.log(`Client disconnected (${ip})`);
  });

  ws.on('error', (error) => {
    console.error("WebSocket error:", error);
  });
});

console.log("WebSocket server listening on ws://localhost:8080");
