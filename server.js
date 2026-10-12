const path = require('path');
const http = require('http');
const express = require('express');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  const id = Math.random().toString(36).slice(2, 8);
  res.redirect(`/room/${id}`);
});
app.get('/room/:id', (req, res) => res.sendFile(path.join(__dirname, 'public', 'room.html')));

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
const rooms = new Map(); // roomId -> Set<ws>

function send(ws, msg) { if (ws.readyState === 1) ws.send(JSON.stringify(msg)); }

wss.on('connection', (ws) => {
  ws.room = null;
  ws.on('message', (raw) => {
    let msg; try { msg = JSON.parse(raw); } catch { return; }
    if (msg.type === 'join') {
      const id = String(msg.room || '').slice(0, 64);
      if (!id || ws.room) return;
      const set = rooms.get(id) || new Set();
      if (set.size >= 2) { send(ws, { type: 'full' }); return ws.close(); }
      set.add(ws); rooms.set(id, set); ws.room = id;
      // second participant is the initiator (creates the offer)
      send(ws, { type: 'joined', initiator: set.size === 2, peers: set.size - 1 });
      for (const p of set) if (p !== ws) send(p, { type: 'peer-joined' });
      return;
    }
    // relay offer/answer/candidate to the other peer
    if (!ws.room) return;
    if (['offer', 'answer', 'candidate'].includes(msg.type)) {
      for (const p of rooms.get(ws.room) || []) if (p !== ws) send(p, msg);
    }
  });
  ws.on('close', () => {
    const set = rooms.get(ws.room); if (!set) return;
    set.delete(ws);
    for (const p of set) send(p, { type: 'peer-left' });
    if (!set.size) rooms.delete(ws.room);
  });
});

server.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
module.exports = server;
