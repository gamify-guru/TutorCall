// ===== Настройки ICE =====
const ICE_SERVERS = [
  { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
  // ---- TURN-сервер (нужен за строгими NAT/корпоративными сетями) ----
  // Раскомментируйте и подставьте свои данные (например, coturn, Twilio, Metered):
  // { urls: 'turn:turn.example.com:3478', username: 'USER', credential: 'PASSWORD' },
  // { urls: 'turns:turn.example.com:5349', username: 'USER', credential: 'PASSWORD' },
];

const roomId = decodeURIComponent(location.pathname.split('/').pop());
const $ = (id) => document.getElementById(id);
const status = (t) => ($('status').textContent = t);
$('link').value = location.href;
$('copy').onclick = () => navigator.clipboard?.writeText(location.href);

let ws, pc, localStream, camTrack, screenTrack = null;

async function start() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  } catch (e) {
    status('Нет доступа к камере/микрофону: ' + e.message);
    localStream = new MediaStream();
  }
  camTrack = localStream.getVideoTracks()[0] || null;
  $('local').srcObject = localStream;
  connect();
}

function connect() {
  ws = new WebSocket((location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws');
  ws.onopen = () => ws.send(JSON.stringify({ type: 'join', room: roomId }));
  ws.onmessage = async (ev) => {
    const msg = JSON.parse(ev.data);
    switch (msg.type) {
      case 'full': status('Комната заполнена (максимум 2 участника).'); break;
      case 'joined':
        status(msg.initiator ? 'Соединение с собеседником…' : 'Ожидание собеседника…');
        if (msg.initiator) { createPC(); await makeOffer(); }
        break;
      case 'peer-joined': status('Собеседник подключается…'); createPC(); break;
      case 'offer':
        if (!pc) createPC();
        await pc.setRemoteDescription(msg.sdp);
        await pc.setLocalDescription(await pc.createAnswer());
        sendMsg({ type: 'answer', sdp: pc.localDescription });
        break;
      case 'answer': await pc.setRemoteDescription(msg.sdp); break;
      case 'candidate': try { await pc.addIceCandidate(msg.candidate); } catch (e) { console.warn(e); } break;
      case 'peer-left':
        status('Собеседник вышел. Ожидание…');
        closePC(); break;
    }
  };
  ws.onclose = () => { if (!$('status').textContent.includes('заполнена')) status('Соединение с сервером потеряно.'); };
}

const sendMsg = (m) => ws.readyState === 1 && ws.send(JSON.stringify(m));

function createPC() {
  closePC();
  pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });
  localStream.getAudioTracks().forEach((t) => pc.addTrack(t, localStream));
  const v = screenTrack || camTrack;
  if (v) pc.addTrack(v, localStream);
  else pc.addTransceiver('video', { direction: 'recvonly' });
  pc.onicecandidate = (e) => e.candidate && sendMsg({ type: 'candidate', candidate: e.candidate });
  pc.ontrack = (e) => { $('remote').srcObject = e.streams[0] || new MediaStream([e.track]); };
  pc.onconnectionstatechange = () => {
    const s = pc.connectionState;
    if (s === 'connected') status('Звонок идёт');
    if (s === 'failed') status('Не удалось соединиться (возможно, нужен TURN-сервер).');
  };
}
function closePC() { if (pc) { pc.close(); pc = null; } $('remote').srcObject = null; }
async function makeOffer() {
  await pc.setLocalDescription(await pc.createOffer());
  sendMsg({ type: 'offer', sdp: pc.localDescription });
}

function videoSender() { return pc?.getSenders().find((s) => s.track?.kind === 'video' || s.track === null); }

// ----- Управление -----
$('mic').onclick = () => {
  const t = localStream.getAudioTracks()[0]; if (!t) return;
  t.enabled = !t.enabled;
  $('mic').textContent = t.enabled ? 'Выключить микрофон' : 'Включить микрофон';
  $('mic').classList.toggle('off', !t.enabled);
};
$('cam').onclick = () => {
  if (!camTrack) return;
  camTrack.enabled = !camTrack.enabled;
  $('cam').textContent = camTrack.enabled ? 'Выключить камеру' : 'Включить камеру';
  $('cam').classList.toggle('off', !camTrack.enabled);
};
$('share').onclick = () => (screenTrack ? stopShare() : startShare());

async function startShare() {
  if (!navigator.mediaDevices.getDisplayMedia) return alert('Демонстрация экрана не поддерживается (нужен HTTPS или localhost).');
  try {
    const s = await navigator.mediaDevices.getDisplayMedia({ video: true });
    screenTrack = s.getVideoTracks()[0];
    screenTrack.onended = stopShare; // пользователь нажал «Остановить» в браузере
    await videoSender()?.replaceTrack(screenTrack);
    $('local').srcObject = new MediaStream([screenTrack]);
    $('share').textContent = 'Остановить показ';
  } catch (e) { console.warn(e); }
}
async function stopShare() {
  if (!screenTrack) return;
  screenTrack.stop(); screenTrack = null;
  await videoSender()?.replaceTrack(camTrack);
  $('local').srcObject = localStream;
  $('share').textContent = 'Показать экран';
}
$('leave').onclick = () => {
  closePC(); ws?.close(); localStream.getTracks().forEach((t) => t.stop()); screenTrack?.stop();
  status('Вы вышли из звонка.');
  document.querySelectorAll('.controls button').forEach((b) => (b.disabled = true));
};

start();
