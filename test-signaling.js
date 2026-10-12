// Быстрая проверка сигнализации: 2 клиента обмениваются сообщениями, 3-й отклоняется.
const WebSocket = require('ws');
const URL = process.env.WS_URL || 'ws://localhost:3000/ws';
const room = 'test-' + Date.now();
const open = (n) => new Promise((res) => { const w = new WebSocket(URL); w.name = n; w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const a = await open('A'); a.send(JSON.stringify({ type: 'join', room })); await wait(100);
  const b = await open('B'); b.send(JSON.stringify({ type: 'join', room })); await wait(100);
  b.send(JSON.stringify({ type: 'offer', sdp: { type: 'offer', sdp: 'x' } })); await wait(100);
  a.send(JSON.stringify({ type: 'answer', sdp: { type: 'answer', sdp: 'y' } })); await wait(100);
  const c = await open('C'); c.send(JSON.stringify({ type: 'join', room })); await wait(150);
  const ok = a.msgs.some((m) => m.type === 'joined' && !m.initiator) && a.msgs.some((m) => m.type === 'peer-joined')
    && b.msgs.some((m) => m.type === 'joined' && m.initiator) && a.msgs.some((m) => m.type === 'offer')
    && b.msgs.some((m) => m.type === 'answer') && c.msgs.some((m) => m.type === 'full');
  b.close(); await wait(100);
  const left = a.msgs.some((m) => m.type === 'peer-left');
  console.log({ A: a.msgs.map((m) => m.type), B: b.msgs.map((m) => m.type), C: c.msgs.map((m) => m.type) });
  console.log(ok && left ? 'PASS' : 'FAIL'); a.close(); process.exit(ok && left ? 0 : 1);
})();
