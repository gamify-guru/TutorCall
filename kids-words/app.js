const KEY='tutorcall-kids-words-v1';
const TABS={extra:{title:'Дополнительные занятия',short:'доп. занятия'},school:{title:'Школьный учебник',short:'учебник'}};
const THEME_META=[
  {id:'animals',label:'Животные',emoji:'🐾'},
  {id:'colours',label:'Цвета',emoji:'🎨'},
  {id:'numbers',label:'Числа',emoji:'🔢'},
  {id:'family',label:'Семья',emoji:'👨‍👩‍👧‍👦'},
  {id:'food',label:'Еда и фрукты',emoji:'🍎'},
  {id:'school',label:'Школа',emoji:'🏫'},
  {id:'toys',label:'Игрушки',emoji:'🧸'},
  {id:'body',label:'Тело',emoji:'🙋'},
  {id:'clothes',label:'Одежда',emoji:'👕'},
  {id:'weather',label:'Погода и сезоны',emoji:'🌈'},
  {id:'home',label:'Дом',emoji:'🏠'},
  {id:'actions',label:'Действия',emoji:'🏃'},
  {id:'other',label:'Другое',emoji:'✨'}
];
const THEMES=THEME_META.map(t=>t.id);
const THEME_LABEL=Object.fromEntries(THEME_META.map(t=>[t.id,t.label]));
const STICKERS=['🌟','🌈','🎈','🦋','🌸','🍀','🦄','🧁','🐥','🚀','🎀','🍉'];
const MAX_WORD=80, MAX_RU=120, MAX_EX=200;
const $=id=>document.getElementById(id);
const norm=s=>(s||'').toLowerCase().trim().replace(/\s+/g,' ').replace(/[’‘`]/g,"'");
const lettersOnly=s=>norm(s).replace(/[^a-z]/g,'');
const hasCyrillic=s=>/[\u0400-\u04FF]/.test(s||'');
const isValidEnWord=s=>{
  const t=(s||'').trim();
  if(!t||t.length>MAX_WORD)return false;
  if(hasCyrillic(t))return false;
  return /^[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/.test(t.replace(/[’']/g,"'"));
};
const themeOf=t=>THEMES.includes(t)?t:(t?'other':'');
const themeName=t=>THEME_LABEL[t]||t||'без темы';

let BANK=[];
let WORDS=[];
let state={v:1,tab:'extra',lists:{extra:[],school:[]},quizLast:null,themeFilter:'',stars:0,stickers:[],gamesLast:null};
let active=null,sug=[],sugI=-1,tLookup=null,audioEl=null,pendingDelete=null,themeFilter='';
let quiz={items:[],i:0,score:0};
let game={mode:'',items:[],i:0,score:0,memory:[],flipped:[],lock:false};
let lookupSeq=0, editingWord=null;

function levenshtein(a,b){
  if(a===b)return 0;
  if(!a.length)return b.length;
  if(!b.length)return a.length;
  const dp=Array(b.length+1);
  for(let j=0;j<=b.length;j++)dp[j]=j;
  for(let i=1;i<=a.length;i++){
    let prev=dp[0]; dp[0]=i;
    for(let j=1;j<=b.length;j++){
      const tmp=dp[j];
      dp[j]=a[i-1]===b[j-1]?prev:Math.min(prev+1,dp[j]+1,dp[j-1]+1);
      prev=tmp;
    }
  }
  return dp[b.length];
}
function lenientOk(input,target){
  const a=lettersOnly(input), b=lettersOnly(target);
  if(!a||!b)return false;
  if(a===b)return true;
  if(a.length>=4 && levenshtein(a,b)<=1)return true;
  return false;
}

function migrateItem(x){
  if(!x||typeof x!=='object')return null;
  const word=String(x.word||'').trim().slice(0,MAX_WORD); if(!word)return null;
  return {
    word,
    ru:String(x.ru||'').slice(0,MAX_RU),
    ipa:String(x.ipa||'').slice(0,80),
    audio:String(x.audio||''),
    example:String(x.example||'').slice(0,MAX_EX),
    def:String(x.def||'').slice(0,200),
    emoji:String(x.emoji||pickEmoji(word)).slice(0,8),
    ts:Number(x.ts)||Date.now(),
    hard:!!x.hard,
    theme:themeOf(x.theme),
    custom:!!x.custom
  };
}
function pickEmoji(word){
  const b=BANK.find(x=>norm(x.word)===norm(word));
  if(b&&b.emoji)return b.emoji;
  const map={cat:'🐱',dog:'🐶',apple:'🍎'};
  return map[norm(word)]||'✨';
}
function load(){
  try{
    const raw=JSON.parse(localStorage.getItem(KEY)||'null');
    if(raw&&raw.lists){
      state.tab=raw.tab==='school'?'school':'extra';
      state.lists.extra=(Array.isArray(raw.lists.extra)?raw.lists.extra:[]).map(migrateItem).filter(Boolean);
      state.lists.school=(Array.isArray(raw.lists.school)?raw.lists.school:[]).map(migrateItem).filter(Boolean);
      state.quizLast=raw.quizLast||null;
      state.gamesLast=raw.gamesLast||null;
      state.stars=Math.max(0,Number(raw.stars)||0);
      state.stickers=Array.isArray(raw.stickers)?raw.stickers.filter(s=>STICKERS.includes(s)):[];
      themeFilter=typeof raw.themeFilter==='string'?raw.themeFilter:'';
      if(themeFilter && !THEMES.includes(themeFilter) && themeFilter!=='') themeFilter='';
      state.v=1;
    }
  }catch{}
}
function save(){
  try{localStorage.setItem(KEY,JSON.stringify({v:1,t:Date.now(),tab:state.tab,lists:state.lists,quizLast:state.quizLast,gamesLast:state.gamesLast,themeFilter,stars:state.stars,stickers:state.stickers}))}catch{}
}
function list(){return state.lists[state.tab]}
function otherTab(){return state.tab==='extra'?'school':'extra'}
function findIn(tab,word){const n=norm(word);return state.lists[tab].find(x=>norm(x.word)===n)}
function findBank(word){const n=norm(word);return BANK.find(x=>norm(x.word)===n)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function attrEsc(s){return escapeHtml(s).replace(/\n/g,' ')}

function makeExample(word,apiEx){
  if(apiEx&&apiEx.length<140&&!/[“"«]/.test(apiEx)) return apiEx.slice(0,MAX_EX);
  const b=findBank(word);
  if(b&&b.example) return b.example;
  const w=word;
  const templates=[
    `I like ${w}.`,
    `This is a ${w}.`,
    `I can see a ${w}.`,
    `Look at the ${w}!`
  ];
  return templates[Math.abs([...w].reduce((a,c)=>a+c.charCodeAt(0),0))%templates.length];
}

function fillThemeSelects(){
  const opts=`<option value="">без темы</option>`+THEME_META.map(t=>`<option value="${t.id}">${t.emoji} ${escapeHtml(t.label)}</option>`).join('');
  ['themePick','cTheme','eTheme'].forEach(id=>{const el=$(id); if(el) el.innerHTML=opts});
}

function setTab(tab,persist=true){
  state.tab=tab==='school'?'school':'extra'; if(persist)save();
  document.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===state.tab)));
  $('addTitle').textContent='Добавить слово · '+TABS[state.tab].title;
  $('addHint').textContent='Слова на этой вкладке не смешиваются с другой. Сейчас открыт «'+TABS[state.tab].title+'». Нет в списке? Добавь своё слово.';
  $('mineSearch').placeholder='Поиск только в «'+TABS[state.tab].short+'»…';
  $('lookup').value=''; hideSuggest(); active=null; $('preview').classList.remove('show'); $('status').textContent=''; $('status').className='status';
  renderThemeFilters(); renderBank(); renderMine(); updateCount(); updateQuizLast(); renderStars();
}
function updateCount(){
  const n=list().length,o=state.lists[otherTab()].length,h=list().filter(x=>x.hard).length,c=list().filter(x=>x.custom).length;
  $('countLine').textContent=n?`В «${TABS[state.tab].short}»: ${n} (трудных: ${h}, своих: ${c}). В другой вкладке: ${o}.`:`Пока пусто на этой вкладке. (в другой: ${o})`;
}
function updateQuizLast(){
  const bits=[];
  const q=state.quizLast; if(q&&q.tab===state.tab) bits.push(`Последняя викторина: ${q.score}/${q.total}`);
  const g=state.gamesLast; if(g&&g.tab===state.tab) bits.push(`Последняя игра: ${g.title} ${g.score}/${g.total}`);
  $('quizLast').textContent=bits.join(' · ');
}
function renderStars(){
  $('starsCount').textContent='⭐ '+state.stars;
  $('stickerRow').innerHTML=state.stickers.map(s=>`<span title="наклейка">${s}</span>`).join('')||'<span class="hint" style="margin:0">Наклеек пока нет</span>';
}
function awardStars(n,perfect){
  state.stars+=Math.max(0,n);
  if(perfect){
    const next=STICKERS.find(s=>!state.stickers.includes(s));
    if(next) state.stickers.push(next);
  }
  save(); renderStars();
}

function hideSuggest(){$('suggest').classList.remove('open');$('suggest').innerHTML='';$('lookup').setAttribute('aria-expanded','false');sug=[];sugI=-1}
function showSuggest(items, rawQuery){
  const q=(rawQuery||$('lookup').value).trim();
  const canCustom=isValidEnWord(q);
  sug=items.map(w=>({type:'word',word:w}));
  if(canCustom){
    const already=items.some(w=>norm(w)===norm(q));
    sug.push({type:'custom',word:q, already});
  }
  sugI=-1; // no preselected suggestion
  const box=$('suggest');
  if(!sug.length){hideSuggest();return}
  const ql=q.length;
  box.innerHTML=sug.map((it,i)=>{
    if(it.type==='custom'){
      return `<button type="button" role="option" class="add-own" aria-selected="false" data-i="${i}" data-ttc-suggest-custom>+ Добавить своё слово «<span>${escapeHtml(it.word)}</span>»</button>`;
    }
    const w=it.word;
    const pic=(findBank(w)||{}).emoji||'✨';
    return `<button type="button" role="option" aria-selected="false" data-i="${i}" data-ttc-suggest-word>${pic} <b>${escapeHtml(w.slice(0,ql))}</b>${escapeHtml(w.slice(ql))}</button>`;
  }).join('');
  box.classList.add('open');$('lookup').setAttribute('aria-expanded','true');
}
function syncSugAria(){
  [...$('suggest').children].forEach((b,i)=>{
    b.setAttribute('aria-selected',String(i===sugI));
    if(i===sugI) b.scrollIntoView({block:'nearest'});
  });
}
function rankSuggest(q){
  const n=norm(q); if(n.length<1)return[];
  const starts=[],contains=[];
  for(const w of WORDS){
    if(w===n){starts.unshift(w);continue}
    if(w.startsWith(n))starts.push(w); else if(n.length>=2&&w.includes(n))contains.push(w);
    if(starts.length>=8)break;
  }
  return [...starts,...contains].slice(0,8);
}
async function ensureWords(){
  if(BANK.length)return;
  try{
    BANK=await(await fetch('./words.json')).json();
  }catch{
    BANK=[{word:'cat',ru:'кот',ipa:'/kæt/',emoji:'🐱',theme:'animals',example:'I see a cat.'}];
  }
  WORDS=BANK.map(x=>x.word);
}

async function enrich(word,seq){
  const w=norm(word); if(!w)return null;
  const bank=findBank(w);
  if(bank){
    return migrateItem({...bank,word:bank.word,custom:false,hard:false,ts:Date.now()});
  }
  $('status').textContent='Ищем перевод и произношение…';$('status').className='status';
  let entry={word:word.trim().slice(0,MAX_WORD),ru:'',ipa:'',audio:'',example:'',def:'',emoji:'✨',hard:false,theme:'',custom:false};
  try{
    const r=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(w));
    if(seq!=null&&seq!==lookupSeq)return null;
    if(r.ok){
      const data=await r.json(); const e=data[0]||{};
      entry.word=e.word||entry.word;
      const ph=(e.phonetics||[]).find(p=>p.audio&&/uk|gb|british/i.test(p.audio))||(e.phonetics||[]).find(p=>p.audio)||(e.phonetics||[])[0];
      entry.ipa=(ph&&ph.text)||e.phonetic||'';
      entry.audio=(ph&&ph.audio)||'';
      const m=(e.meanings||[])[0]; const d=m&&(m.definitions||[])[0];
      entry.def=d&&d.definition||''; entry.example=d&&d.example||'';
    }
  }catch{}
  if(seq!=null&&seq!==lookupSeq)return null;
  try{
    const tr=await fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(entry.word)+'&langpair=en|ru');
    if(seq!=null&&seq!==lookupSeq)return null;
    if(tr.ok){const j=await tr.json(); const t=j&&j.responseData&&j.responseData.translatedText; if(t&&norm(t)!==norm(entry.word)&&!/^MYMEMORY/i.test(t))entry.ru=t}
  }catch{}
  if(seq!=null&&seq!==lookupSeq)return null;
  entry.example=makeExample(entry.word,entry.example);
  entry.emoji=pickEmoji(entry.word);
  return entry;
}
function speakGB(text){
  try{
    if(!window.speechSynthesis)return;
    const u=new SpeechSynthesisUtterance(text); u.lang='en-GB'; u.rate=.92;
    const voices=speechSynthesis.getVoices()||[];
    const v=voices.find(x=>/en(-|_)GB/i.test(x.lang)&&/google|daniel|martha|serena|libby|amy|emma|uk english/i.test(x.name))
      ||voices.find(x=>/en(-|_)GB/i.test(x.lang))
      ||voices.find(x=>/en(-|_)US/i.test(x.lang))
      ||voices.find(x=>/^en/i.test(x.lang));
    if(v)u.voice=v; speechSynthesis.cancel(); speechSynthesis.speak(u);
  }catch{}
}
function listen(entry,withSentence=false){
  const text=entry?(withSentence&&entry.example?`${entry.word}. ${entry.example}`:entry.word):$('lookup').value;
  if(!text)return;
  if(entry&&entry.audio&&!withSentence){
    try{if(audioEl){audioEl.pause();audioEl=null} audioEl=new Audio(entry.audio); audioEl.play().catch(()=>speakGB(text)); return}catch{}
  }
  speakGB(text);
}
function showPreview(entry){
  active=entry; $('preview').classList.add('show');
  $('pPic').textContent=entry.emoji||pickEmoji(entry.word);
  $('pWord').textContent=entry.word;
  $('pRu').textContent=entry.ru||'Перевод не найден — напиши сам или добавь как своё слово';
  $('pIpa').textContent=entry.ipa?`UK ${entry.ipa}`:(entry.audio?'UK audio ✓':'UK · Слушать ≈ голос');
  const ex=makeExample(entry.word,entry.example); entry.example=ex; $('pEx').textContent=ex;
  $('pOwn').hidden=!entry.custom;
  const here=!!findIn(state.tab,entry.word); const there=findIn(otherTab(),entry.word);
  $('savedBadge').hidden=!here; $('saveBtn').hidden=here;
  $('editPreviewBtn').hidden=!here;
  $('themePick').value=here?(findIn(state.tab,entry.word).theme||''):(entry.theme||'');
  $('otherTabNote').textContent=there&&!here?`Это слово уже есть во вкладке «${TABS[otherTab()].title}», но не в текущей.`:'';
  $('manual').classList.toggle('show',!entry.ru);
  $('status').textContent=here?'Уже в твоём словаре на этой вкладке. Можно изменить перевод.':'Готово — можно слушать и сохранить.';
  $('status').className='status ok';
}
async function pickWord(word){
  hideSuggest();
  const raw=String(word||'').trim().slice(0,MAX_WORD);
  if(!raw){ $('status').textContent='Напиши слово.'; $('status').className='status err'; return}
  if(hasCyrillic(raw)){
    $('status').textContent='Похоже на русский. В поле поиска нужно английское слово. Перевод пишется отдельно.';
    $('status').className='status err';
    return;
  }
  $('lookup').value=raw;
  const seq=++lookupSeq;
  const cached=findIn(state.tab,raw);
  const entry=cached?{...cached}:await enrich(raw,seq);
  if(seq!==lookupSeq)return;
  if(!entry){ $('status').textContent='Не получилось загрузить. Добавь слово как своё.'; $('status').className='status err'; openCustomModal(raw); return}
  if(!entry.example) entry.example=makeExample(entry.word,entry.example);
  if(!entry.emoji) entry.emoji=pickEmoji(entry.word);
  showPreview(entry);
  if(!entry.ru){
    $('status').textContent='Перевод не найден. Напиши сам или открой форму «своё слово».';
    $('status').className='status err';
  }
}
function addWord(entry){
  if(!entry||!entry.word)return;
  if(findIn(state.tab,entry.word)){showPreview(findIn(state.tab,entry.word)); flashWord(entry.word); return}
  const ru=(entry.ru||$('manualRu').value.trim()).slice(0,MAX_RU);
  if(!ru){$('status').textContent='Нужен перевод: напиши сам или добавь своё слово.';$('status').className='status err';$('manual').classList.add('show');return}
  const item=migrateItem({...entry,ru,example:makeExample(entry.word,entry.example),theme:$('themePick').value||entry.theme,hard:!!entry.hard,ts:Date.now(),custom:!!entry.custom,emoji:entry.emoji||pickEmoji(entry.word)});
  state.lists[state.tab]=[item,...list()]; save(); showPreview(item); renderMine(); renderBank(); updateCount(); flashWord(item.word);
  $('status').textContent='Сохранено в «'+TABS[state.tab].title+'»!';$('status').className='status ok';
}
function flashWord(word){
  let el=null;
  try{el=document.querySelector(`[data-word="${CSS.escape(norm(word))}"]`)}catch{el=document.querySelector(`[data-word="${norm(word).replace(/"/g,'')}"]`)}
  if(!el)return; el.classList.add('flash'); el.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  setTimeout(()=>el.classList.remove('flash'),1600);
}
function toggleHard(word){
  const it=findIn(state.tab,word); if(!it)return;
  it.hard=!it.hard; save(); renderMine(); updateCount();
}
function removeWord(word,{soft=false}={}){
  const it=findIn(state.tab,word); if(!it)return;
  if(soft){
    pendingDelete={tab:state.tab,item:{...it}};
    state.lists[state.tab]=list().filter(x=>norm(x.word)!==norm(word)); save(); renderMine(); renderBank(); updateCount();
    if(active&&norm(active.word)===norm(word)){active=null;$('preview').classList.remove('show')}
    showToast('Удалено: '+it.word); return;
  }
  if(!confirm('Удалить «'+it.word+'» из словаря?'))return;
  state.lists[state.tab]=list().filter(x=>norm(x.word)!==norm(word)); save(); renderMine(); renderBank(); updateCount();
  if(active&&norm(active.word)===norm(word)){active=null;$('preview').classList.remove('show')}
}
function showToast(msg){
  $('toastMsg').textContent=msg; $('toast').classList.add('show');
  clearTimeout(showToast._t); showToast._t=setTimeout(()=>{$('toast').classList.remove('show'); pendingDelete=null},5000);
}
function undoDelete(){
  if(!pendingDelete)return;
  const {tab,item}=pendingDelete;
  if(!findIn(tab,item.word)) state.lists[tab]=[item,...state.lists[tab]];
  pendingDelete=null; save(); $('toast').classList.remove('show');
  if(tab===state.tab){renderMine(); renderBank(); updateCount()}
}

function openCustomModal(prefill){
  hideSuggest();
  $('customStatus').textContent='';$('customStatus').className='status';
  $('cWord').value=(prefill||$('lookup').value||'').trim().slice(0,MAX_WORD);
  $('cRu').value=''; $('cIpa').value=''; $('cEx').value=''; $('cEmoji').value=''; $('cTheme').value=''; $('cHard').checked=false;
  openModal('customModal');
  setTimeout(()=>(($('cWord').value?$('cRu'):$('cWord')).focus()),50);
}
function closeCustomModal(){closeModal('customModal')}
async function saveCustom(ev){
  if(ev)ev.preventDefault();
  const word=$('cWord').value.trim().slice(0,MAX_WORD);
  const ru=$('cRu').value.trim().slice(0,MAX_RU);
  $('customStatus').className='status';
  if(!word){$('customStatus').textContent='Нужно английское слово или фраза.';$('customStatus').className='status err';return}
  if(hasCyrillic(word)){$('customStatus').textContent='В поле слова — английский. Перевод — отдельно.';$('customStatus').className='status err';return}
  if(!isValidEnWord(word)){$('customStatus').textContent='Можно латинские буквы, пробелы, дефис и апостроф (don\'t, ice-cream).';$('customStatus').className='status err';return}
  if(!ru){$('customStatus').textContent='Нужен перевод.';$('customStatus').className='status err';return}
  if(findIn(state.tab,word)){$('customStatus').textContent='Такое слово уже есть на этой вкладке.';$('customStatus').className='status err';return}
  $('customStatus').textContent='Сохраняем…';
  let audio='', ipa=$('cIpa').value.trim();
  try{
    const r=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(norm(word)));
    if(r.ok){
      const data=await r.json(); const e=data[0]||{};
      const ph=(e.phonetics||[]).find(p=>p.audio&&/uk|gb|british/i.test(p.audio))||(e.phonetics||[]).find(p=>p.audio)||(e.phonetics||[])[0];
      if(!ipa) ipa=(ph&&ph.text)||e.phonetic||'';
      audio=(ph&&ph.audio)||'';
    }
  }catch{}
  const example=($('cEx').value.trim()||makeExample(word,'')).slice(0,MAX_EX);
  const item=migrateItem({
    word, ru, ipa, audio, example, def:'', hard:$('cHard').checked,
    theme:$('cTheme').value, ts:Date.now(), custom:true,
    emoji:($('cEmoji').value.trim()||pickEmoji(word))
  });
  state.lists[state.tab]=[item,...list()]; save();
  closeCustomModal(); showPreview(item); renderMine(); renderBank(); updateCount(); flashWord(item.word);
  $('lookup').value=item.word;
  $('status').textContent='Своё слово сохранено в «'+TABS[state.tab].title+'»!';$('status').className='status ok';
}

function openEditModal(word){
  const it=findIn(state.tab,word); if(!it)return;
  editingWord=it.word;
  $('eWord').value=it.word;
  $('eRu').value=it.ru||'';
  $('eIpa').value=it.ipa||'';
  $('eEx').value=it.example||'';
  $('eEmoji').value=it.emoji||'';
  $('eTheme').value=it.theme||'';
  $('editStatus').textContent='';$('editStatus').className='status';
  openModal('editModal');
  setTimeout(()=>$('eRu').focus(),50);
}
function closeEditModal(){editingWord=null;closeModal('editModal')}
function saveEdit(ev){
  if(ev)ev.preventDefault();
  if(!editingWord)return;
  const it=findIn(state.tab,editingWord); if(!it)return;
  const ru=$('eRu').value.trim().slice(0,MAX_RU);
  if(!ru){$('editStatus').textContent='Перевод обязателен.';$('editStatus').className='status err';return}
  it.ru=ru;
  it.ipa=$('eIpa').value.trim().slice(0,80);
  it.example=($('eEx').value.trim()||makeExample(it.word,'')).slice(0,MAX_EX);
  it.emoji=$('eEmoji').value.trim().slice(0,8)||it.emoji||pickEmoji(it.word);
  it.theme=$('eTheme').value;
  save(); closeEditModal(); renderMine(); renderBank(); updateCount();
  if(active&&norm(active.word)===norm(it.word)) showPreview({...it});
  $('status').textContent='Карточка обновлена.';$('status').className='status ok';
}

function renderThemeFilters(){
  const box=$('themeFilters');
  const src=list().length?list():BANK;
  const counts=Object.fromEntries(THEME_META.map(t=>[t.id,src.filter(x=>x.theme===t.id).length]));
  box.innerHTML=`<span class="hint" style="margin:0">Тема:</span>`+
    [`<button type="button" class="chip" data-theme-filter="" aria-pressed="${themeFilter===''}">все</button>`]
    .concat(THEME_META.filter(t=>t.id!=='other'||counts.other).map(t=>`<button type="button" class="chip" data-theme-filter="${t.id}" aria-pressed="${themeFilter===t.id}">${t.emoji} ${escapeHtml(t.label)}${counts[t.id]?` · ${counts[t.id]}`:''}</button>`)).join('');
}

function tileHTML(x){
  return `<div class="swipe" data-word="${attrEsc(norm(x.word))}">
    <div class="swipe-bg" aria-hidden="true">Удалить</div>
    <article class="tile" data-ttc-card="${attrEsc(norm(x.word))}" ${x.custom?'data-ttc-custom="1"':''}>
      <button type="button" class="hard-btn ${x.hard?'on':''}" data-hard="${attrEsc(x.word)}" aria-pressed="${x.hard}" title="Трудное / Повторить сегодня" data-ttc-hard>${x.hard?'★':'☆'}</button>
      <div class="pic" aria-hidden="true">${escapeHtml(x.emoji||'✨')}</div>
      <div class="ew">${escapeHtml(x.word)}</div>
      <div class="rw">${escapeHtml(x.ru)}</div>
      <div class="ph">${escapeHtml(x.ipa||'UK · Слушать')}</div>
      <p class="ex" data-ttc-example>${escapeHtml(makeExample(x.word,x.example))}</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center">
        ${x.custom?`<span class="own-tag" data-ttc-custom-tag>своё слово</span>`:''}
        ${x.theme?`<span class="theme-tag">${escapeHtml(themeName(x.theme))}</span>`:''}
      </div>
      <div class="meta">
        <button type="button" class="btn btn-listen" data-listen="${attrEsc(x.word)}" data-ttc-listen>🔊</button>
        <span>
          <button type="button" class="edit" data-edit="${attrEsc(x.word)}" data-ttc-edit>изменить</button>
          <button type="button" class="kill" data-del="${attrEsc(x.word)}" data-ttc-del>удалить</button>
        </span>
      </div>
    </article>
  </div>`;
}

function renderMine(){
  const q=norm($('mineSearch').value);
  let items=list();
  if(themeFilter) items=items.filter(x=>x.theme===themeFilter);
  if(q) items=items.filter(x=>norm(x.word).includes(q)||norm(x.ru).includes(q)||norm(x.example).includes(q)||norm(x.ipa).includes(q));
  const root=$('rows');
  if(!list().length){
    root.innerHTML=`<div class="empty"><strong>Твой словарь пока пустой</strong>Возьми слово из словарика по темам или добавь своё кнопкой «+ Добавить своё слово».</div>`;
    $('printBlock').textContent=''; return;
  }
  if(!items.length){
    root.innerHTML=`<div class="empty"><strong>Ничего не нашлось</strong>Попробуй другую тему, поиск или вкладку.</div>`;
    return;
  }
  const hard=items.filter(x=>x.hard);
  const recent=items.slice().sort((a,b)=>b.ts-a.ts).slice(0,16);
  const az=items.slice().sort((a,b)=>norm(a.word).localeCompare(norm(b.word)));
  root.innerHTML=
    (hard.length?`<section class="row" data-ttc-hard-row><h3>Повторить сегодня <span>${hard.length} трудных</span></h3><div class="rail">${hard.map(tileHTML).join('')}</div></section>`:'')+
    `<section class="row"><h3>Недавно добавленные <span>${escapeHtml(TABS[state.tab].title)}</span></h3><div class="rail">${recent.map(tileHTML).join('')}</div></section>
     <section class="row"><h3>А–Я / A–Z <span>${items.length}</span></h3><div class="rail">${az.map(tileHTML).join('')}</div></section>`;
  $('printBlock').innerHTML=`<h2>${escapeHtml(TABS[state.tab].title)}</h2>`+az.map(x=>`<p><b>${escapeHtml(x.emoji||'')} ${escapeHtml(x.word)}</b> — ${escapeHtml(x.ipa||'—')} — ${escapeHtml(x.ru)}${x.hard?' ★':''}${x.custom?' [своё]':''}${x.theme?' ['+escapeHtml(themeName(x.theme))+']':''}<br><i>${escapeHtml(makeExample(x.word,x.example))}</i></p>`).join('');
  bindSwipe();
}

function bankCardHTML(x){
  const here=!!findIn(state.tab,x.word);
  return `<article class="bank-card" data-bank="${attrEsc(norm(x.word))}">
    <div class="pic" aria-hidden="true">${escapeHtml(x.emoji||'✨')}</div>
    <div class="ew">${escapeHtml(x.word)}</div>
    <div class="rw">${escapeHtml(x.ru)}</div>
    <div class="ph">${escapeHtml(x.ipa||'UK')}</div>
    <p class="ex">${escapeHtml(x.example||'')}</p>
    <div class="meta">
      <button type="button" class="btn btn-listen" data-bank-listen="${attrEsc(x.word)}">🔊</button>
      ${here?`<span class="badge">✓ уже есть</span>`:`<button type="button" class="btn btn-red" data-bank-add="${attrEsc(x.word)}" style="min-height:48px;padding:8px 12px">＋ В словарь</button>`}
    </div>
  </article>`;
}
function visibleBank(){
  let items=BANK.slice();
  if(themeFilter) items=items.filter(x=>x.theme===themeFilter);
  return items;
}
function renderBank(){
  const items=visibleBank();
  const box=$('bankGrid');
  if(!items.length){box.innerHTML=`<div class="empty"><strong>Нет слов в этой теме</strong></div>`;return}
  box.innerHTML=items.map(bankCardHTML).join('');
  $('addThemeBtn').hidden=!themeFilter || themeFilter==='other';
  $('addThemeBtn').textContent=themeFilter?`＋ Добавить всю тему «${themeName(themeFilter)}»`:'＋ Добавить всю тему';
}
function addWholeTheme(){
  if(!themeFilter){showToast('Сначала выбери тему');return}
  let n=0;
  visibleBank().forEach(w=>{
    if(findIn(state.tab,w.word))return;
    const item=migrateItem({...w,ts:Date.now(),custom:false});
    state.lists[state.tab]=[item,...list()];
    n++;
  });
  save(); renderMine(); renderBank(); updateCount();
  $('status').textContent=n?`Добавлено слов: ${n}.`:'Все слова этой темы уже в словаре.';
  $('status').className='status ok';
}

function bindSwipe(){
  document.querySelectorAll('.swipe').forEach(sw=>{
    if(sw._swipeBound)return; sw._swipeBound=true;
    const tile=sw.querySelector('.tile'); let x0=0,dx=0,dragging=false;
    const onStart=e=>{if(e.touches&&e.touches.length>1)return; dragging=true; x0=(e.touches?e.touches[0].clientX:e.clientX); dx=0; tile.style.transition='none'};
    const onMove=e=>{if(!dragging)return; const x=(e.touches?e.touches[0].clientX:e.clientX); dx=Math.min(0,x-x0); if(dx<-8&&e.cancelable)e.preventDefault(); tile.style.transform=`translateX(${dx}px)`};
    const onEnd=()=>{if(!dragging)return; dragging=false; tile.style.transition='transform .2s'; if(dx<-96){tile.style.transform='translateX(-120%)'; removeWord(sw.dataset.word,{soft:true})} else tile.style.transform='translateX(0)'; dx=0};
    sw.addEventListener('touchstart',onStart,{passive:true});
    sw.addEventListener('touchmove',onMove,{passive:false});
    sw.addEventListener('touchend',onEnd);
  });
}

function exportText(){
  const lines=list().slice().sort((a,b)=>norm(a.word).localeCompare(norm(b.word)))
    .map(x=>`${x.emoji||''} ${x.word} — ${x.ipa||'—'} — ${x.ru}${x.hard?' ★':''}${x.custom?' [своё]':''}${x.theme?' ['+themeName(x.theme)+']':''}`);
  return `Мой первый словарик · ${TABS[state.tab].title}\n`+lines.join('\n');
}
async function copyExport(){
  const text=exportText();
  try{await navigator.clipboard.writeText(text); $('status').textContent='Список скопирован.'; $('status').className='status ok'}
  catch{
    const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type:'text/plain'})); a.download=`kids-words-${state.tab}.txt`; a.click();
  }
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([exportText()],{type:'text/plain'})); a.download=`kids-words-${state.tab}.txt`; a.setAttribute('data-ttc-download','1'); document.body.appendChild(a); a.click(); a.remove();
}

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function gamePool(min){
  const need=Math.max(1, min||1);
  const mine=list();
  const extra=visibleBank().filter(b=>!mine.some(m=>norm(m.word)===norm(b.word)));
  // Practice the child's list when it is already rich; otherwise mix in the theme bank.
  const mixed=mine.length>=8?mine.slice():mine.concat(extra);
  const pool=mixed.length>=need?mixed:(extra.length?extra:mine.slice());
  return pool;
}
function poolNote(pool){
  if(list().length) return `слова из «${TABS[state.tab].short}»`;
  return themeFilter?`слова темы «${themeName(themeFilter)}»`:'слова из словарика';
}

function openModal(id){
  const el=$(id);
  el.classList.add('open');
  el.setAttribute('aria-hidden','false');
  el.style.display='flex';
  el.style.opacity='1';
  el.style.pointerEvents='auto';
}
function closeModal(id){
  const el=$(id);
  el.classList.remove('open');
  el.setAttribute('aria-hidden','true');
  el.style.display='none';
  el.style.pointerEvents='none';
}

function buildQuiz(){
  const words=gamePool(2);
  if(!words.length) return null;
  const target=words.length>=6?Math.min(8,words.length):Math.min(8,Math.max(1,words.length*2));
  const pool=shuffle(words.slice());
  const items=[];
  const formats=['en2ru','ru2en','gap','listen'];
  let i=0;
  while(items.length<target && i<60){
    const w=pool[i%pool.length];
    const fmt=formats[items.length%formats.length];
    if((fmt==='en2ru'||fmt==='ru2en') && words.length<2){
      items.push({fmt:'gap',word:w});
    } else {
      items.push({fmt,word:w});
    }
    i++;
  }
  return items;
}
function openQuiz(){
  const items=buildQuiz();
  if(!items){alert('Сначала добавь хотя бы одно слово или выбери тему.'); return}
  quiz={items,i:0,score:0};
  openModal('quizModal');
  renderQuizStep();
  setTimeout(()=>$('quizClose').focus(),30);
}
function closeQuiz(){closeModal('quizModal')}
function renderQuizStep(){
  const {items,i,score}=quiz;
  if(i>=items.length){
    state.quizLast={tab:state.tab,score,total:items.length,ts:Date.now()};
    awardStars(score, score===items.length && items.length>0);
    save(); updateQuizLast();
    $('quizProg').textContent='Готово!';
    $('quizBody').innerHTML=`<p class="quiz-q" data-ttc-quiz-score>Результат: ${score} / ${items.length}</p>
      <p class="hint">${score===items.length?'Супер! Все ответы верные. 🌟':'Молодец! Можно сыграть ещё раз.'}</p>
      <button type="button" class="btn btn-red" id="quizAgain">Ещё раз</button>`;
    $('quizAgain').onclick=()=>openQuiz();
    return;
  }
  const step=items[i]; const w=step.word;
  $('quizProg').textContent=`Вопрос ${i+1} из ${items.length} · ${poolNote()}`;
  let html=`<p class="hint">${({en2ru:'Английский → русский',ru2en:'Русский → английский',gap:'Какая буква пропущена?',listen:'Слушай и напиши'})[step.fmt]}</p>`;
  if(step.fmt==='en2ru'||step.fmt==='ru2en'){
    const prompt=step.fmt==='en2ru'?`${w.emoji||''} ${w.word}`:w.ru;
    const answer=step.fmt==='en2ru'?w.ru:w.word;
    let distractors=shuffle(gamePool().filter(x=>norm(x.word)!==norm(w.word)))
      .map(x=>step.fmt==='en2ru'?x.ru:x.word)
      .filter((v,idx,arr)=>arr.findIndex(z=>norm(z)===norm(v))===idx)
      .slice(0,3);
    const fillers=step.fmt==='en2ru'?['другой перевод','ещё вариант','не то слово']:['option','other','word'];
    let f=0; while(distractors.length<3){distractors.push(fillers[f++%fillers.length])}
    const opts=shuffle([answer,...distractors.slice(0,3)]);
    html+=`<p class="quiz-q">${escapeHtml(prompt)}</p><div class="quiz-opts" data-ttc-quiz-opts>${opts.map(o=>`<button type="button" data-ans="${attrEsc(o)}">${escapeHtml(o)}</button>`).join('')}</div>`;
    $('quizBody').innerHTML=html;
    $('quizBody').querySelectorAll('[data-ans]').forEach(b=>b.onclick=()=>answerQuiz(norm(b.dataset.ans)===norm(answer), answer));
  } else if(step.fmt==='gap'){
    const letters=[...w.word];
    let idx=Math.floor(w.word.length/2); if(letters[idx]===' '||letters[idx]==="'"||letters[idx]==='-')idx=Math.max(0,[...w.word].findIndex(ch=>/[A-Za-z]/.test(ch)));
    const missing=letters[idx]; letters[idx]='_';
    html+=`<p class="quiz-q">${escapeHtml(w.emoji||'')} ${escapeHtml(letters.join(''))}</p>
      <p class="hint">Напиши пропущенную букву или всё слово</p>
      <input class="quiz-input" id="quizInput" data-ttc-quiz-input autocomplete="off" autocapitalize="off" value="">
      <button type="button" class="quiz-check" id="quizCheck" style="margin-top:8px">Проверить</button>`;
    $('quizBody').innerHTML=html;
    const check=()=>{
      const v=norm($('quizInput').value);
      const ok=v===norm(missing)||lenientOk(v,w.word)||v===norm(w.word);
      answerQuiz(ok,w.word);
    };
    $('quizCheck').onclick=check; $('quizInput').onkeydown=e=>{if(e.key==='Enter')check()};
    $('quizInput').focus();
  } else {
    html+=`<p class="quiz-q">Слушай и напиши слово</p>
      <div class="actions"><button type="button" class="btn btn-listen" id="quizListen" data-ttc-quiz-listen>🔊 Слушать</button></div>
      <input class="quiz-input" id="quizInput" data-ttc-quiz-input style="margin-top:10px" autocomplete="off" autocapitalize="off" value="">
      <button type="button" class="quiz-check" id="quizCheck" style="margin-top:8px">Проверить</button>`;
    $('quizBody').innerHTML=html;
    $('quizListen').onclick=()=>listen(w,false);
    const check=()=>answerQuiz(lenientOk($('quizInput').value,w.word), w.word);
    $('quizCheck').onclick=check; $('quizInput').onkeydown=e=>{if(e.key==='Enter')check()};
    setTimeout(()=>listen(w,false),200);
  }
}
function answerQuiz(ok,reveal){
  if(ok) quiz.score++;
  $('quizBody').insertAdjacentHTML('beforeend',`<p class="status ${ok?'ok':'err'}" data-ttc-quiz-feedback>${ok?'✓ Молодец!':'✗ Правильный ответ: '+escapeHtml(reveal)}</p>`);
  quiz.i++; setTimeout(renderQuizStep, ok?500:900);
}

function openGame(mode){
  if(mode==='quiz'){openQuiz();return}
  const pool=gamePool(mode==='memory'?2:2);
  const titles={pic:'Картинка и слово',listen:'Слушай и выбери',memory:'Найди пару',type:'Напечатай слово'};
  if(!pool.length){alert('Сначала добавь слово или выбери тему в словарике.');return}
  if(mode==='memory' && pool.length<2){alert('Для этой игры нужно хотя бы 2 слова. Выбери тему или добавь слова.');return}
  if((mode==='pic'||mode==='listen') && pool.length<2){alert('Для этой игры нужно хотя бы 2 слова. Выбери тему или добавь слова.');return}
  const n=Math.min(mode==='memory'?6:6, pool.length);
  const items=shuffle(pool.slice()).slice(0,n);
  game={mode,items,i:0,score:0,memory:[],flipped:[],lock:false,title:titles[mode]};
  $('gameTitle').textContent=titles[mode];
  openModal('gameModal');
  renderGameStep();
  setTimeout(()=>$('gameClose').focus(),30);
}
function closeGame(){closeModal('gameModal')}
function finishGame(){
  const {score,items,title,mode}=game;
  const total=mode==='memory'?items.length:items.length;
  state.gamesLast={tab:state.tab,title,score,total,ts:Date.now()};
  awardStars(score, score===total && total>0);
  save(); updateQuizLast();
  $('gameProg').textContent='Готово!';
  $('gameBody').innerHTML=`<p class="quiz-q" data-ttc-game-score>⭐ ${score} / ${total}</p>
    <p class="hint">${score===total?'Супер! Все верно. Держи наклейку, если она новая!':'Молодец! Можно сыграть ещё раз.'}</p>
    <button type="button" class="btn btn-red" id="gameAgain">Ещё раз</button>`;
  $('gameAgain').onclick=()=>openGame(mode);
}
function fourOptions(correct, mapFn){
  const others=shuffle(gamePool(4).filter(x=>norm(x.word)!==norm(correct.word)));
  const uniq=[correct];
  for(const x of others){
    if(uniq.length>=4)break;
    if(!uniq.some(u=>norm(u.word)===norm(x.word))) uniq.push(x);
  }
  return shuffle(uniq.map(mapFn));
}
function letterHint(word){
  const chars=[...word];
  return chars.map((ch,i)=>{
    if(!/[A-Za-z]/.test(ch)) return ch;
    if(i===0) return ch;
    return (i%2===0)?ch:'_';
  }).join(' ');
}
function renderGameStep(){
  const {mode,items,i,score}=game;
  if(mode==='memory'){renderMemory();return}
  if(i>=items.length){finishGame();return}
  const w=items[i];
  $('gameProg').textContent=`Шаг ${i+1} из ${items.length} · ${poolNote()} · ⭐ ${score}`;
  if(mode==='pic'){
    const opts=fourOptions(w,x=>({word:x.word,label:x.word}));
    $('gameBody').innerHTML=`<div class="pic" style="font-size:96px">${escapeHtml(w.emoji||'✨')}</div>
      <p class="quiz-q">Какое это слово?</p>
      <div class="quiz-opts" data-ttc-game-opts>${opts.map(o=>`<button type="button" data-ans="${attrEsc(o.word)}">${escapeHtml(o.label)}</button>`).join('')}</div>`;
    $('gameBody').querySelectorAll('[data-ans]').forEach(b=>b.onclick=()=>answerGame(norm(b.dataset.ans)===norm(w.word), w.word));
  } else if(mode==='listen'){
    const opts=fourOptions(w,x=>({word:x.word,label:`${x.emoji||'✨'} ${x.word}`}));
    $('gameBody').innerHTML=`<p class="quiz-q">Слушай и выбери слово</p>
      <div class="actions"><button type="button" class="btn btn-listen" id="gameListenBtn">🔊 Слушать</button></div>
      <div class="quiz-opts" data-ttc-game-opts style="margin-top:12px">${opts.map(o=>`<button type="button" data-ans="${attrEsc(o.word)}">${escapeHtml(o.label)}</button>`).join('')}</div>`;
    $('gameListenBtn').onclick=()=>listen(w,false);
    $('gameBody').querySelectorAll('[data-ans]').forEach(b=>b.onclick=()=>answerGame(norm(b.dataset.ans)===norm(w.word), w.word));
    setTimeout(()=>listen(w,false),200);
  } else if(mode==='type'){
    $('gameBody').innerHTML=`<div class="pic" style="font-size:84px">${escapeHtml(w.emoji||'✨')}</div>
      <p class="ru">${escapeHtml(w.ru)}</p>
      <p class="hint">Подсказка буквами — напиши слово</p>
      <p class="hint-word" aria-label="подсказка">${escapeHtml(letterHint(w.word))}</p>
      <input class="quiz-input" id="gameInput" autocomplete="off" autocapitalize="off" spellcheck="false" value="" placeholder="напиши слово">
      <button type="button" class="quiz-check" id="gameCheck" style="margin-top:8px">Проверить</button>`;
    const check=()=>answerGame(lenientOk($('gameInput').value,w.word), w.word);
    $('gameCheck').onclick=check; $('gameInput').onkeydown=e=>{if(e.key==='Enter')check()};
    $('gameInput').focus();
  }
}
function answerGame(ok,reveal){
  if(ok) game.score++;
  $('gameBody').insertAdjacentHTML('beforeend',`<p class="status ${ok?'ok':'err'}">${ok?'✓ Молодец!':'✗ Это слово: '+escapeHtml(reveal)}</p>`);
  game.i++; setTimeout(renderGameStep, ok?550:1000);
}
function renderMemory(){
  if(!game.memory.length){
    const pairs=game.items.slice(0,6);
    game.items=pairs;
    const cards=[];
    pairs.forEach((w,idx)=>{
      cards.push({id:'p'+idx,pair:idx,kind:'pic',show:w.emoji||'✨',word:w.word});
      cards.push({id:'w'+idx,pair:idx,kind:'word',show:w.word,word:w.word});
    });
    game.memory=shuffle(cards);
    game.flipped=[];
    game.matched=new Set();
    game.score=0;
    game.moves=0;
  }
  const done=game.matched.size===game.items.length;
  $('gameProg').textContent=done?'Готово!':`Найди пары · открыто ${game.matched.size} из ${game.items.length}`;
  if(done){finishGame();return}
  $('gameBody').innerHTML=`<div class="mem-grid" data-ttc-memory>${game.memory.map((c,i)=>{
    const on=game.flipped.includes(i)||game.matched.has(c.pair);
    const cls='mem-card'+(on?' flipped':'')+(game.matched.has(c.pair)?' matched':'');
    return `<button type="button" class="${cls}" data-mem="${i}" aria-pressed="${on?'true':'false'}">${on?escapeHtml(c.show):'❓'}</button>`;
  }).join('')}</div>`;
  $('gameBody').querySelectorAll('[data-mem]').forEach(b=>b.onclick=()=>flipMem(+b.dataset.mem));
}
function flipMem(i){
  if(game.lock)return;
  const c=game.memory[i];
  if(!c||game.matched.has(c.pair)||game.flipped.includes(i))return;
  if(game.flipped.length>=2)return;
  game.flipped.push(i);
  renderMemoryBoardOnly();
  if(game.flipped.length<2)return;
  const [a,b]=game.flipped;
  const A=game.memory[a], B=game.memory[b];
  game.lock=true;
  if(A.pair===B.pair){
    game.matched.add(A.pair);
    game.score++;
    game.flipped=[];
    game.lock=false;
    setTimeout(renderMemory,350);
  } else {
    setTimeout(()=>{game.flipped=[];game.lock=false;renderMemoryBoardOnly()},700);
  }
}
function renderMemoryBoardOnly(){
  // keep grid, just update faces — easier to re-render
  if(game.matched.size===game.items.length){renderMemory();return}
  const box=$('gameBody').querySelector('.mem-grid');
  if(!box){renderMemory();return}
  [...box.children].forEach((btn,i)=>{
    const c=game.memory[i];
    const on=game.flipped.includes(i)||game.matched.has(c.pair);
    btn.className='mem-card'+(on?' flipped':'')+(game.matched.has(c.pair)?' matched':'');
    btn.setAttribute('aria-pressed',on?'true':'false');
    btn.textContent=on?c.show:'❓';
  });
}

function chooseSuggest(i){
  const it=sug[i]; if(!it)return;
  if(it.type==='custom') openCustomModal(it.word);
  else pickWord(it.word);
}

document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
$('lookup').addEventListener('input',async e=>{
  const raw=e.target.value.slice(0,MAX_WORD);
  if(e.target.value!==raw) e.target.value=raw;
  await ensureWords();
  const n=norm(raw);
  if(!n){hideSuggest(); $('status').textContent=''; $('status').className='status'; return}
  if(hasCyrillic(raw)){
    showSuggest([], raw);
    $('status').textContent='Похоже, ты вводишь кириллицу. Здесь нужно английское слово; перевод — при сохранении.';
    $('status').className='status err';
    return;
  }
  showSuggest(rankSuggest(raw), raw);
  clearTimeout(tLookup);
  const seq=++lookupSeq;
  tLookup=setTimeout(()=>{
    if(seq!==lookupSeq)return;
    const exact=WORDS.find(w=>norm(w)===norm(raw));
    if(exact) pickWord(exact);
  },360);
});
$('lookup').addEventListener('keydown',e=>{
  if(!$('suggest').classList.contains('open')){
    if(e.key==='Enter'&&norm($('lookup').value)){e.preventDefault();
      const q=$('lookup').value.trim();
      if(isValidEnWord(q)&&!rankSuggest(q).some(w=>norm(w)===norm(q))) openCustomModal(q);
      else pickWord(q);
    }
    return;
  }
  if(e.key==='ArrowDown'){e.preventDefault();sugI=Math.min(sug.length-1,sugI+1);syncSugAria()}
  else if(e.key==='ArrowUp'){e.preventDefault();sugI=Math.max(0,sugI-1);syncSugAria()}
  else if(e.key==='Enter'){e.preventDefault();if(sugI>=0)chooseSuggest(sugI);else if(norm($('lookup').value))pickWord($('lookup').value.trim())}
  else if(e.key==='Escape')hideSuggest();
});
$('suggest').addEventListener('click',e=>{const b=e.target.closest('button[data-i]'); if(b)chooseSuggest(+b.dataset.i)});
$('listenBtn').addEventListener('click',()=>active&&listen(active,true));
$('saveBtn').addEventListener('click',()=>active&&addWord(active));
$('manualSave').addEventListener('click',()=>active&&addWord(active));
$('openCustomFromManual').addEventListener('click',()=>openCustomModal(active?active.word:$('lookup').value));
$('editPreviewBtn').addEventListener('click',()=>active&&openEditModal(active.word));
$('mineSearch').addEventListener('input',renderMine);
$('themeFilters').addEventListener('click',e=>{
  const b=e.target.closest('[data-theme-filter]'); if(!b)return;
  themeFilter=b.dataset.themeFilter; save(); renderThemeFilters(); renderBank(); renderMine();
});
$('rows').addEventListener('click',e=>{
  const L=e.target.closest('[data-listen]'); const D=e.target.closest('[data-del]'); const H=e.target.closest('[data-hard]'); const E=e.target.closest('[data-edit]');
  if(L){const it=findIn(state.tab,L.dataset.listen); if(it)listen(it,true)}
  if(D)removeWord(D.dataset.del);
  if(H)toggleHard(H.dataset.hard);
  if(E)openEditModal(E.dataset.edit);
});
$('bankGrid').addEventListener('click',e=>{
  const L=e.target.closest('[data-bank-listen]');
  const A=e.target.closest('[data-bank-add]');
  const card=e.target.closest('[data-bank]');
  if(L){const it=findBank(L.dataset.bankListen); if(it)listen(it,true); return}
  if(A){const it=findBank(A.dataset.bankAdd); if(it){ $('themePick').value=it.theme||''; addWord({...it,custom:false}); } return}
  if(card && !e.target.closest('button')) pickWord(card.dataset.bank);
});
$('addThemeBtn').addEventListener('click',addWholeTheme);
$('undoBtn').addEventListener('click',undoDelete);
$('quizBtn').addEventListener('click',openQuiz);
$('quizClose').addEventListener('click',closeQuiz);
$('gameClose').addEventListener('click',closeGame);
document.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',()=>openGame(b.dataset.game)));
$('exportBtn').addEventListener('click',copyExport);
$('printBtn').addEventListener('click',()=>window.print());
$('resetBtn').addEventListener('click',()=>{
  if(confirm('Начать заново? Оба словаря (доп. занятия и учебник), звёзды и наклейки будут очищены.')){
    try{localStorage.removeItem(KEY)}catch{} location.reload();
  }
});
$('customForm').addEventListener('submit',saveCustom);
$('customClose').addEventListener('click',closeCustomModal);
$('customCancel').addEventListener('click',closeCustomModal);
$('cListen').addEventListener('click',()=>{
  const w=$('cWord').value.trim(); if(!w)return;
  listen({word:w,audio:'',example:$('cEx').value.trim()}, !!$('cEx').value.trim());
});
$('editForm').addEventListener('submit',saveEdit);
$('editClose').addEventListener('click',closeEditModal);
$('editCancel').addEventListener('click',closeEditModal);

document.addEventListener('click',e=>{if(!e.target.closest('.field'))hideSuggest()});
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  if($('customModal').classList.contains('open')){closeCustomModal();return}
  if($('editModal').classList.contains('open')){closeEditModal();return}
  if($('quizModal').classList.contains('open')){closeQuiz();return}
  if($('gameModal').classList.contains('open')){closeGame();return}
  hideSuggest();
});
if(window.speechSynthesis) speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices();
load();
ensureWords().then(()=>{fillThemeSelects(); setTab(state.tab,false)});
