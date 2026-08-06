// ================================================================
// DATOS Y CONSTANTES
// ================================================================
const SPLITS = {
  1: ["Full Body"],
  2: ["Full Body A", "Full Body B"],
  3: ["Empuje", "Tracción", "Pierna"],
  4: ["Tren superior A", "Tren inferior A", "Tren superior B", "Tren inferior B"],
  5: ["Empuje", "Tracción", "Pierna", "Tren superior", "Tren inferior"],
  6: ["Empuje", "Tracción", "Pierna", "Empuje", "Tracción", "Pierna"],
  7: ["Empuje", "Tracción", "Pierna", "Descanso activo", "Empuje", "Tracción", "Pierna"],
};
const GRUPO_POR_SESION = {
  "Full Body": "full", "Full Body A": "full", "Full Body B": "full",
  "Empuje": "empuje", "Tracción": "traccion", "Pierna": "pierna",
  "Tren superior A": "superior", "Tren superior B": "superior", "Tren superior": "superior",
  "Tren inferior A": "pierna", "Tren inferior B": "pierna", "Tren inferior": "pierna",
  "Descanso activo": "descanso",
};
const GRUPOS_DISPLAY = {
  empuje:   "Pecho · Hombro · Tríceps",
  traccion: "Espalda · Bíceps · Hombro posterior",
  pierna:   "Cuádriceps · Isquios · Glúteo · Gemelo",
  superior: "Pecho · Espalda · Hombro · Bíceps · Tríceps",
  full:     "Cuerpo completo",
  descanso: "Cardio suave — recuperación activa",
};

// Plan fijo indefinido: mismos series/reps cada semana
const PLAN_FIJO = {
  seriesComp: 4, repsComp: "8-10", descansoComp: "2-3 min",
  seriesIsol: 3, repsIsol: "10-12", descansoIsol: "90 seg",
  descansoAbs: "45 seg",
  nota: "Plan indefinido. Sube 2,5kg cuando completes todas las reps con buena técnica. Genera una nueva rutina cuando quieras cambiar.",
};

const POOLS = {
  empuje: [
    { n: "Press de pecho en máquina", m: true, c: true, sg: "pecho", fam: "press_pecho_plano" },
    { n: "Press de hombro en máquina", m: true, c: true, sg: "hombro", fam: "press_hombro" },
    { n: "Pec deck / aperturas en máquina", m: true, c: false, sg: "pecho", fam: "aperturas_pecho" },
    { n: "Fondos asistidos en máquina", m: true, c: true, sg: "triceps", fam: "fondos" },
    { n: "Press inclinado en máquina", m: true, c: true, sg: "pecho", fam: "press_pecho_inclinado" },
    { n: "Press convergente en máquina", m: true, c: true, sg: "pecho" },
    { n: "Extensión de tríceps en polea", m: true, c: false, sg: "triceps" },
    { n: "Elevaciones laterales en polea", m: true, c: false, sg: "hombro", fam: "elevacion_lateral" },
    { n: "Press de tríceps en máquina", m: true, c: false, sg: "triceps" },
    { n: "Cruce de poleas (aperturas en polea)", m: true, c: false, sg: "pecho", fam: "aperturas_pecho" },
    { n: "Press banca con barra", m: false, c: true, sg: "pecho", fam: "press_pecho_plano" },
    { n: "Press banca inclinado con mancuernas", m: false, c: true, sg: "pecho", fam: "press_pecho_inclinado" },
    { n: "Press militar de pie", m: false, c: true, sg: "hombro", fam: "press_hombro" },
    { n: "Press Arnold", m: false, c: true, sg: "hombro" },
    { n: "Fondos en paralelas", m: false, c: true, sg: "triceps", fam: "fondos" },
    { n: "Aperturas con mancuernas", m: false, c: false, sg: "pecho", fam: "aperturas_pecho" },
    { n: "Press francés", m: false, c: false, sg: "triceps" },
    { n: "Elevaciones laterales con mancuernas", m: false, c: false, sg: "hombro", fam: "elevacion_lateral" },
    { n: "Fondos en banco", m: false, c: true, sg: "triceps", fam: "fondos" },
    { n: "Patada de tríceps con mancuerna", m: false, c: false, sg: "triceps" },
  ],
  traccion: [
    { n: "Jalón al pecho en polea", m: true, c: true, sg: "espalda" },
    { n: "Remo en polea baja (sentado)", m: true, c: true, sg: "espalda", fam: "remo_horizontal" },
    { n: "Remo horizontal en máquina", m: true, c: true, sg: "espalda", fam: "remo_horizontal" },
    { n: "Curl de bíceps en máquina", m: true, c: false, sg: "biceps", fam: "curl_biceps" },
    { n: "Jalón tras nuca en polea", m: true, c: true, sg: "espalda" },
    { n: "Dominadas asistidas en máquina", m: true, c: true, sg: "espalda", fam: "dominadas" },
    { n: "Face pull en polea", m: true, c: false, sg: "hombro", fam: "deltoide_posterior" },
    { n: "Curl de bíceps en polea", m: true, c: false, sg: "biceps", fam: "curl_biceps" },
    { n: "Pull-over en polea", m: true, c: false, sg: "espalda" },
    { n: "Remo en máquina unilateral", m: true, c: true, sg: "espalda", fam: "remo_unilateral" },
    { n: "Dominadas pronas", m: false, c: true, sg: "espalda", fam: "dominadas" },
    { n: "Remo con barra", m: false, c: true, sg: "espalda", fam: "remo_horizontal" },
    { n: "Remo con mancuerna a una mano", m: false, c: true, sg: "espalda", fam: "remo_unilateral" },
    { n: "Curl de bíceps con barra", m: false, c: false, sg: "biceps", fam: "curl_biceps" },
    { n: "Curl martillo", m: false, c: false, sg: "biceps" },
    { n: "Curl inclinado con mancuernas", m: false, c: false, sg: "biceps" },
    { n: "Peso muerto rumano", m: false, c: true, sg: "espalda" },
    { n: "Pec deck invertido (deltoide posterior)", m: true, c: false, sg: "hombro", fam: "deltoide_posterior" },
    { n: "Pájaros con mancuernas (deltoide posterior)", m: false, c: false, sg: "hombro", fam: "deltoide_posterior" },
    { n: "Encogimientos de hombros con barra (trapecio)", m: false, c: false, sg: "trapecio" },
    { n: "Curl de muñeca con barra (antebrazo)", m: false, c: false, sg: "antebrazo" },
  ],
  pierna: [
    { n: "Prensa de piernas", m: true, c: true, sg: "cuadriceps", fam: "prensa_piernas" },
    { n: "Extensión de cuádriceps en máquina", m: true, c: false, sg: "cuadriceps" },
    { n: "Curl femoral en máquina", m: true, c: false, sg: "isquios" },
    { n: "Máquina de aductores", m: true, c: false, sg: "aductor" },
    { n: "Máquina de abductores", m: true, c: false, sg: "abductor" },
    { n: "Elevación de talones en máquina (gemelo)", m: true, c: false, sg: "gemelo", fam: "elevacion_talones" },
    { n: "Hack squat en máquina", m: true, c: true, sg: "cuadriceps", fam: "sentadilla" },
    { n: "Sentadilla en máquina Smith", m: true, c: true, sg: "cuadriceps", fam: "sentadilla" },
    { n: "Máquina de glúteo (patada en máquina)", m: true, c: false, sg: "gluteo" },
    { n: "Prensa horizontal", m: true, c: true, sg: "cuadriceps", fam: "prensa_piernas" },
    { n: "Sentadilla con barra", m: false, c: true, sg: "cuadriceps", fam: "sentadilla" },
    { n: "Zancadas con mancuernas", m: false, c: true, sg: "cuadriceps" },
    { n: "Peso muerto convencional", m: false, c: true, sg: "isquios" },
    { n: "Hip thrust con barra", m: false, c: true, sg: "gluteo" },
    { n: "Sentadilla búlgara", m: false, c: true, sg: "cuadriceps", fam: "bulgara" },
    { n: "Peso muerto rumano con mancuernas", m: false, c: true, sg: "isquios" },
    { n: "Zancada búlgara con barra", m: false, c: true, sg: "cuadriceps", fam: "bulgara" },
    { n: "Elevación de talones con mancuernas", m: false, c: false, sg: "gemelo", fam: "elevacion_talones" },
    { n: "Puente de glúteo a una pierna", m: false, c: false, sg: "gluteo" },
  ],
  superior: [
    { n: "Press de pecho en máquina", m: true, c: true, sg: "pecho", fam: "press_pecho_plano" },
    { n: "Press de hombro en máquina", m: true, c: true, sg: "hombro", fam: "press_hombro" },
    { n: "Jalón al pecho en polea", m: true, c: true, sg: "espalda" },
    { n: "Remo en polea baja (sentado)", m: true, c: true, sg: "espalda", fam: "remo_horizontal" },
    { n: "Fondos asistidos en máquina", m: true, c: true, sg: "triceps", fam: "fondos" },
    { n: "Dominadas asistidas en máquina", m: true, c: true, sg: "espalda", fam: "dominadas" },
    { n: "Curl de bíceps en máquina", m: true, c: false, sg: "biceps", fam: "curl_biceps" },
    { n: "Extensión de tríceps en polea", m: true, c: false, sg: "triceps" },
    { n: "Elevaciones laterales en polea", m: true, c: false, sg: "hombro", fam: "elevacion_lateral" },
    { n: "Face pull en polea", m: true, c: false, sg: "hombro" },
    { n: "Press banca con barra", m: false, c: true, sg: "pecho", fam: "press_pecho_plano" },
    { n: "Dominadas pronas", m: false, c: true, sg: "espalda", fam: "dominadas" },
    { n: "Press militar de pie", m: false, c: true, sg: "hombro", fam: "press_hombro" },
    { n: "Remo con barra", m: false, c: true, sg: "espalda", fam: "remo_horizontal" },
    { n: "Fondos en paralelas", m: false, c: true, sg: "triceps", fam: "fondos" },
    { n: "Curl de bíceps con barra", m: false, c: false, sg: "biceps", fam: "curl_biceps" },
  ],
  full: [
    { n: "Prensa de piernas", m: true, c: true, fam: "prensa_piernas" },
    { n: "Press de pecho en máquina", m: true, c: true, fam: "press_pecho_plano" },
    { n: "Remo horizontal en máquina", m: true, c: true, fam: "remo_horizontal" },
    { n: "Extensión de cuádriceps en máquina", m: true, c: false },
    { n: "Jalón al pecho en polea", m: true, c: true },
    { n: "Press de hombro en máquina", m: true, c: true, fam: "press_hombro" },
    { n: "Curl femoral en máquina", m: true, c: false },
    { n: "Curl de bíceps en máquina", m: true, c: false, fam: "curl_biceps" },
    { n: "Sentadilla con barra", m: false, c: true, fam: "sentadilla" },
    { n: "Press banca con barra", m: false, c: true, fam: "press_pecho_plano" },
    { n: "Remo con barra", m: false, c: true, fam: "remo_horizontal" },
    { n: "Peso muerto rumano", m: false, c: true },
    { n: "Press militar de pie", m: false, c: true, fam: "press_hombro" },
    { n: "Dominadas pronas", m: false, c: true, fam: "dominadas" },
    { n: "Zancadas con mancuernas", m: false, c: true },
  ],
};

const ABDOMINALES = [
  { n: "Máquina de abdominales", m: true },
  { n: "Plancha frontal", m: false },
  { n: "Elevación de piernas colgado", m: false },
];

const PRIORIDAD_PESOS = { maquina:{m:3,l:1}, equilibrado:{m:1,l:1}, libre:{m:1,l:3} };
const PRIORIDAD_ORDEN = ["maquina", "equilibrado", "libre"];
const PRIORIDAD_LABELS = { maquina:"Máquinas", equilibrado:"Equilibrado", libre:"Peso libre" };
const NOMBRE_A_FAM = {};
Object.values(POOLS).forEach(p => p.forEach(e => { if (e.fam) NOMBRE_A_FAM[e.n] = e.fam; }));
const SLUG_A_NOMBRE = {};
const SLUG_A_GRUPOS = {};
function registrarEjercicio(n, sg) { const s = slugify(n); SLUG_A_NOMBRE[s] = n; if (!SLUG_A_GRUPOS[s]) SLUG_A_GRUPOS[s] = new Set(); if (sg) SLUG_A_GRUPOS[s].add(sg); }
["empuje","traccion","pierna"].forEach(g => POOLS[g].forEach(e => registrarEjercicio(e.n, e.sg)));
ABDOMINALES.forEach(e => registrarEjercicio(e.n, "abs"));

// ================================================================
// LÓGICA
// ================================================================
function crearRng(semilla) {
  let a = semilla >>> 0;
  return function() { a|=0; a=(a+0x6D2B79F5)|0; let t=Math.imul(a^(a>>>15),1|a); t=(t+Math.imul(t^(t>>>7),61|t))^t; return ((t^(t>>>14))>>>0)/4294967296; };
}
function slugify(n) { return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""); }
function repsFor(nombre, rng) {
  const pesados = ["Sentadilla con barra","Peso muerto convencional","Peso muerto rumano","Press banca con barra","Press militar de pie","Dominadas pronas","Remo con barra","Hack squat en máquina","Sentadilla en máquina Smith","Hip thrust con barra"];
  if (pesados.includes(nombre)) return { series:4, reps:"6-8" };
  return { series: 3+(rng()>0.5?1:0), reps:["8-10","10-12","12-15"][Math.floor(rng()*3)] };
}

function ordenarEjercicios(lista) {
  const compounds = lista.filter(e=>e.c);
  const isolations = lista.filter(e=>!e.c);
  function intercalar(arr) {
    const gs = {}; arr.forEach(e=>(gs[e.sg||'x']=gs[e.sg||'x']||[]).push(e));
    const keys = Object.keys(gs); const out = []; let i=0;
    while(out.length<arr.length){ const k=keys[i%keys.length]; if(gs[k]&&gs[k].length) out.push(gs[k].shift()); i++; }
    return out;
  }
  return [...intercalar(compounds),...intercalar(isolations)];
}

function pickPriorizandoMaquinas(pool, n, rng, pesos, excluir) {
  excluir = excluir||new Set();
  const pN=(e)=>excluir.has(e.n), pF=(e)=>e.fam&&excluir.has(`fam:${e.fam}`);
  function cands(lista,min){ let c=lista.filter(e=>!pN(e)&&!pF(e)); if(c.length<min) c=lista.filter(e=>!pN(e)); if(c.length<min) c=lista; return c.map(e=>({...e})); }
  function elegir(lista){ const ws=lista.map(e=>e.m?pesos.m:pesos.l),t=ws.reduce((a,b)=>a+b,0); let r=rng()*t,idx=0; for(;idx<ws.length;idx++){r-=ws[idx];if(r<=0)break;} return lista.splice(Math.min(idx,lista.length-1),1)[0]; }
  function quitaFam(lista,fam){ if(!fam)return; for(let j=lista.length-1;j>=0;j--) if(lista[j].fam===fam) lista.splice(j,1); }
  const out=[], gc={}, sinG=[];
  pool.forEach(e=>e.sg?(gc[e.sg]=gc[e.sg]||[]).push(e):sinG.push(e));
  const grupos={}; Object.keys(gc).forEach(g=>{grupos[g]=cands(gc[g],1);}); const sin=cands(sinG,n);
  let ngs=Object.keys(grupos); for(let i=ngs.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[ngs[i],ngs[j]]=[ngs[j],ngs[i]];}
  let pend=ngs.filter(g=>grupos[g].length>0);
  while(out.length<n&&pend.length>0){ for(let i=0;i<pend.length&&out.length<n;i++){const g=pend[i];const el=elegir(grupos[g]);out.push(el);ngs.forEach(g2=>quitaFam(grupos[g2],el.fam));quitaFam(sin,el.fam);} pend=pend.filter(g=>grupos[g].length>0); }
  while(out.length<n&&sin.length>0){const el=elegir(sin);out.push(el);quitaFam(sin,el.fam);}
  if(out.length<n){const ya=new Set(out.map(e=>e.n));const r=pool.filter(e=>!ya.has(e.n)).map(e=>({...e}));while(out.length<n&&r.length>0)out.push(elegir(r));}
  return out;
}

function generarSesion(nombre, rng, pesos, usados) {
  usados = usados||new Set();
  const grupo = GRUPO_POR_SESION[nombre]||"full";
  if (grupo==="descanso") return { nombre, grupo, ejercicios:[], abdominales:[] };
  const pool = POOLS[grupo];
  const nEj = grupo==="full"?5:6;
  const elegidos = pickPriorizandoMaquinas(pool,nEj,rng,pesos,usados);
  const abs = pickPriorizandoMaquinas(ABDOMINALES,2,rng,pesos,usados);
  elegidos.forEach(e=>{usados.add(e.n);if(e.fam)usados.add(`fam:${e.fam}`);});
  abs.forEach(e=>{usados.add(e.n);if(e.fam)usados.add(`fam:${e.fam}`);});
  return {
    nombre, grupo,
    ejercicios: ordenarEjercicios(elegidos).map(ej=>({nombre:ej.n,maquina:ej.m,c:ej.c,sg:ej.sg,...repsFor(ej.n,rng)})),
    abdominales: abs.map(ej=>({nombre:ej.n,maquina:ej.m,series:3,reps:ej.n.includes("Plancha")?"45-60 seg":"10-12"})),
  };
}

// ================================================================
// CÓDIGO Y PLAN
// ================================================================
function generarCodigo(numDias, prioridad) {
  const pIdx=PRIORIDAD_ORDEN.indexOf(prioridad), meta=numDias*3+pIdx;
  const sufijo=Math.floor(Math.random()*1000);
  return meta*1000+sufijo;
}
function decodificarCodigo(codigo) {
  const meta=Math.floor(codigo/1000), numDias=Math.floor(meta/3), pIdx=meta%3;
  if(numDias<1||numDias>7||pIdx<0||pIdx>2) return null;
  return { numDias, prioridad:PRIORIDAD_ORDEN[pIdx] };
}
function construirPlan(numDias, prioridad, semilla) {
  const rng=crearRng(semilla);
  const pesos=PRIORIDAD_PESOS[prioridad], splits=SPLITS[Math.min(numDias,7)], usados=new Set();
  return splits.map((nombre,i)=>({label:`Día ${i+1}`,sesion:generarSesion(nombre,rng,pesos,usados)}));
}
function clavePlan(nD,pr) { return `planIndefinido:${nD}:${pr}`; }
function guardarPlan() { try{localStorage.setItem(clavePlan(numDias,prioridad),JSON.stringify({plan,numDias,prioridad,codigoActual,planEditado}));}catch(e){} }
function cargarPlan(nD,pr) { try{const r=localStorage.getItem(clavePlan(nD,pr));return r?JSON.parse(r):null;}catch(e){return null;} }
// El código ES la semilla exacta usada para generar el plan: siempre reconstruible con el mismo código,
// en cualquier dispositivo, sin depender de datos guardados.
function generarPlanNuevo() {
  const seed = generarCodigo(numDias, prioridad);
  plan = construirPlan(numDias, prioridad, seed);
  codigoActual = seed;
  planEditado = false;
  guardarPlan();
}
// Al editar un ejercicio o variar una sesión: el código (semilla) NO cambia — sigue siendo válido
// para recuperar la base — pero marcamos que hay cambios manuales sobre esa base.
function marcarPlanEditado() {
  planEditado = true;
  guardarPlan();
}

// ================================================================
// FECHAS
// ================================================================
function calcularSemanaId(fecha) {
  const d=new Date(Date.UTC(fecha.getFullYear(),fecha.getMonth(),fecha.getDate()));
  d.setUTCDate(d.getUTCDate()+4-(d.getUTCDay()||7));
  const ini=new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return d.getUTCFullYear()*100+Math.ceil((((d-ini)/86400000)+1)/7);
}
function fechaParaSesion(idx) { const h=new Date(),l=new Date(h); l.setHours(0,0,0,0); l.setDate(h.getDate()-(h.getDay()+6)%7); const f=new Date(l); f.setDate(l.getDate()+idx); return f; }
function formatFechaLocal(f) { return `${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`; }

// ================================================================
// HISTORIAL
// ================================================================
function getHistorial(slug,n) { try{const r=localStorage.getItem(`serie:${slug}:s${n}`);return r?JSON.parse(r):[];}catch(e){return[];} }
function guardarHistorial(slug,n,weight,fecha) {
  const arr=getHistorial(slug,n), dia=fecha||formatFechaLocal(new Date());
  const idx=arr.findIndex(e=>e.date===dia); if(idx>=0) arr[idx].weight=weight; else arr.push({date:dia,weight});
  arr.sort((a,b)=>a.date>b.date?1:-1); localStorage.setItem(`serie:${slug}:s${n}`,JSON.stringify(arr.slice(-12)));
}
function entradaEnFecha(slug,n,fecha) { return getHistorial(slug,n).find(e=>e.date===fecha)||null; }
function limiteInicioSemana() { return formatFechaLocal(fechaParaSesion(0)); }
function ultimaAntesDeEstaSemana(slug,n) { const arr=getHistorial(slug,n),lim=limiteInicioSemana(); for(let i=arr.length-1;i>=0;i--) if(arr[i].date<lim) return arr[i]; return null; }

// ================================================================
// PESOS SEMANA
// ================================================================
function claveSemanaPesos() { return `semana:${calcularSemanaId(new Date())}`; }
function getPesosSemana() { try{const r=localStorage.getItem(claveSemanaPesos());return r?JSON.parse(r):{}}catch(e){return{};} }
function pesoSemana(slug,n) { const v=getPesosSemana()[`${slug}:s${n}`]; return v===undefined?null:v; }
function guardarPesoSemana(slug,n,w) { const d=getPesosSemana(); d[`${slug}:s${n}`]=w; localStorage.setItem(claveSemanaPesos(),JSON.stringify(d)); }

// ================================================================
// REFERENCIAS
// ================================================================
function buscarRefGrupo(slugActual) {
  const gs=SLUG_A_GRUPOS[slugActual]; if(!gs) return null;
  let mejor=null;
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i); if(!k||!k.startsWith("serie:")) continue;
    const so=k.slice("serie:".length).split(":s")[0]; if(so===slugActual) continue;
    const go=SLUG_A_GRUPOS[so]; if(!go) continue;
    let ok=false; for(const g of gs) if(go.has(g)){ok=true;break;} if(!ok) continue;
    try{ const a=JSON.parse(localStorage.getItem(k)); if(a&&a.length){const u=a[a.length-1]; if(!mejor||u.date>mejor.date) mejor={...u,slug:so};} }catch(e){}
  }
  return mejor;
}
function formatUltimaVez(slug,nSeries) {
  const datos=[]; let maxDate=null,found=false;
  for(let s=0;s<nSeries;s++){ const d=ultimaAntesDeEstaSemana(slug,s); datos.push(d?d.weight:null); if(d){found=true;if(!maxDate||d.date>maxDate)maxDate=d.date;} }
  if(found) return ` · última vez: ${datos.map(d=>d===null?"–":d).join("/")} kg (${maxDate})`;
  const r=buscarRefGrupo(slug); if(r) return ` · ref. grupo: ${r.weight} kg (${SLUG_A_NOMBRE[r.slug]||r.slug}, ${r.date})`;
  return "";
}

// ================================================================
// OTROS
// ================================================================
function getPesoUsuario() { try{const r=localStorage.getItem("perfil:peso");return r?JSON.parse(r):null;}catch(e){return null;} }
function guardarPesoUsuario(v) { localStorage.setItem("perfil:peso",JSON.stringify(v)); }
function marcarHecho(sid,idx) { localStorage.setItem(`hecho:${sid}:${idx}`,"1"); }
function desmarcarHecho(sid,idx) { localStorage.removeItem(`hecho:${sid}:${idx}`); }
function estaHecho(sid,idx) { return localStorage.getItem(`hecho:${sid}:${idx}`)==="1"; }
function calcularRacha() {
  const ss=new Set(); for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("hecho:")){const s=parseInt(k.split(":")[1],10);if(!isNaN(s))ss.add(s);}}
  if(!ss.size) return 0; const actual=calcularSemanaId(new Date()); let racha=0,esp=actual;
  for(const s of [...ss].sort((a,b)=>b-a)){if(s===esp){racha++;esp--;}else if(s<esp)break;}
  return racha;
}
function kcalSesion(sesion,kg){
  return Math.round((kcalPorMin(5,kg)*10+sesion.ejercicios.reduce((a,ej)=>a+ej.series*kcalPorMin(ej.c?6:3.5,kg)*(ej.c?2.25:2),0)+sesion.abdominales.reduce((a,ej)=>a+ej.series*kcalPorMin(4,kg)*1,0))/10)*10;
}
function kcalPorMin(met,kg){return(met*3.5*kg)/200;}
function snapshotSesion(sesion,pesoKg,fecha) {
  const lr=(ej)=>{const s=slugify(ej.nombre);return Array.from({length:ej.series},(_,i)=>{const e=getHistorial(s,i).find(x=>x.date===fecha);return e?e.weight:null;});};
  const cAP=(ej)=>ej.pesos.some(p=>p!==null);
  return {nombreSesion:sesion.nombre,kcal:calcularCalorias?kcalSesion(sesion,pesoKg):null,
    ejercicios:sesion.ejercicios.map(ej=>({nombre:ej.nombre,series:ej.series,reps:ej.reps,pesos:lr(ej)})).filter(cAP),
    abdominales:sesion.abdominales.map(ej=>({nombre:ej.nombre,series:ej.series,reps:ej.reps,pesos:lr(ej)})).filter(cAP)};
}
function guardarEntrenoHistorial(sid,idx,label,sesion,pesoKg,fecha) {
  try{localStorage.setItem(`historialEntrenos:${sid}:${idx}`,JSON.stringify({fecha,dia:label,semanaId:sid,...snapshotSesion(sesion,pesoKg,fecha)}));}catch(e){}
}
function borrarEntrenoHistorial(sid,idx) { localStorage.removeItem(`historialEntrenos:${sid}:${idx}`); }
function listaHistorial() {
  const rs=[]; for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("historialEntrenos:"))try{const r=JSON.parse(localStorage.getItem(k));if(r)rs.push(r);}catch(e){}}
  return rs.sort((a,b)=>a.fecha<b.fecha?1:-1);
}
function getTema() { return localStorage.getItem("tema"); }
function setTema(v) { localStorage.setItem("tema",v); }

// ================================================================
// DOM
// ================================================================
let numDias=0, prioridad="maquina", plan=null, codigoActual=null, planEditado=false, ultimoSnapshot=null, calcularCalorias=true;

const $=id=>document.getElementById(id);
const mainViewEl=$("mainView"), progressViewEl=$("progressView"), historyViewEl=$("historyView");
const daysEl=$("days"), prioEl=$("prioridad"), genBtn=$("genBtn"), planEl=$("plan");
const totalWeekEl=$("totalWeek"), totalWeekValEl=$("totalWeekVal"), footnoteEl=$("footnote");
const codeBoxEl=$("codeBox"), resetCodeBtnEl=$("resetCodeBtn"), codeInputEl=$("codeInput");
const loadCodeBtn=$("loadCodeBtn"), codeErrorEl=$("codeError"), loadCodeSectionEl=$("loadCodeSection"), toggleLoadCodeBtnEl=$("toggleLoadCodeBtn");
const pesoUsuarioEl=$("pesoUsuario"), pesoErrorEl=$("pesoError"), pesoViewEl=$("pesoView");
const pesoViewTextEl=$("pesoViewText"), pesoEditEl=$("pesoEdit"), pesoModLinkEl=$("pesoModificarLink");
const rachaBadgeEl=$("rachaBadge"), undoBoxEl=$("undoBox"), undoBtnEl=$("undoBtn");
const progressLinkBtnEl=$("progressLinkBtn"), progressBackBtnEl=$("progressBackBtn");
const progressSelectEl=$("progressSelect"), progressCanvasEl=$("progressCanvas");
const temaBtnEl=$("temaBtn"), historyLinkBtnEl=$("historyLinkBtn");
const historyBackBtnEl=$("historyBackBtn"), historyListEl=$("historyList");
const calcularCalCheckEl=$("calcularCalCheck"), pesoSectionEl=$("pesoSection");
const configOptionsEl=$("configOptions"), configResumenEl=$("configResumen");
const configResumenCodeEl=$("configResumenCode"), configResumenDetalleEl=$("configResumenDetalle");
const expandirConfigBtnEl=$("expandirConfigBtn");

// ---- Tema ----
let temaActual=getTema()||"dark";
function aplicarTema(t){ if(t==="light"){document.documentElement.classList.add("light-theme");temaBtnEl.textContent="☀️";}else{document.documentElement.classList.remove("light-theme");temaBtnEl.textContent="🌙";} }
aplicarTema(temaActual);
temaBtnEl.addEventListener("click",()=>{temaActual=temaActual==="light"?"dark":"light";setTema(temaActual);aplicarTema(temaActual);if(plan)dibujarGraficaSiVisible();});

// ---- Peso ----
let pesoUsuarioActual=getPesoUsuario();
function mostrarPesoVista(v){pesoViewTextEl.textContent=`Peso guardado: ${v} kg`;pesoViewEl.style.display="flex";pesoEditEl.style.display="none";}
function mostrarPesoEdicion(){pesoUsuarioEl.value=pesoUsuarioActual||"";pesoViewEl.style.display="none";pesoEditEl.style.display="block";pesoUsuarioEl.focus();}
function guardarPeso(v){guardarPesoUsuario(v);pesoUsuarioActual=v;mostrarPesoVista(v);pesoErrorEl.style.display="none";}
if(pesoUsuarioActual) mostrarPesoVista(pesoUsuarioActual); else mostrarPesoEdicion();
pesoModLinkEl.addEventListener("click",e=>{e.preventDefault();mostrarPesoEdicion();});
pesoUsuarioEl.addEventListener("change",()=>{const v=parseFloat(pesoUsuarioEl.value);if(!isNaN(v)&&v>0){guardarPeso(v);if(plan)render();}});

// ---- Calorías ----
calcularCalCheckEl.checked=true;
calcularCalCheckEl.addEventListener("change",()=>{calcularCalorias=calcularCalCheckEl.checked;pesoSectionEl.style.display=calcularCalorias?"block":"none";pesoErrorEl.style.display="none";if(plan)render();});

// ---- Config ----
function colapsarConfig(){
  configOptionsEl.style.display="none";configResumenEl.style.display="flex";
  configResumenCodeEl.textContent=`Código: ${String(codigoActual).padStart(6,"0")}`;
  configResumenDetalleEl.textContent=`${numDias} día${numDias===1?"":"s"}/semana · ${PRIORIDAD_LABELS[prioridad]}`;
}
function expandirConfig(){configOptionsEl.style.display="block";configResumenEl.style.display="none";}
expandirConfigBtnEl.addEventListener("click",expandirConfig);

// ---- Días ----
for(let n=1;n<=7;n++){
  const b=document.createElement("button"); b.className="day-chip"; b.textContent=n===1?"1 día":`${n} días`; b.dataset.numDias=n;
  b.onclick=()=>{numDias=n;daysEl.querySelectorAll(".day-chip").forEach(x=>x.classList.toggle("active",parseInt(x.dataset.numDias,10)===n));genBtn.disabled=false;};
  daysEl.appendChild(b);
}
PRIORIDAD_ORDEN.forEach(p=>{
  const b=document.createElement("button"); b.className="day-chip"+(p===prioridad?" active":""); b.textContent=PRIORIDAD_LABELS[p]; b.dataset.prioId=p;
  b.onclick=()=>{prioridad=p;prioEl.querySelectorAll(".day-chip").forEach(x=>x.classList.toggle("active",x.dataset.prioId===p));};
  prioEl.appendChild(b);
});
function actualizarChipsUI(){
  daysEl.querySelectorAll(".day-chip").forEach(b=>b.classList.toggle("active",parseInt(b.dataset.numDias,10)===numDias));
  prioEl.querySelectorAll(".day-chip").forEach(b=>b.classList.toggle("active",b.dataset.prioId===prioridad));
  genBtn.disabled=numDias===0;
}

// ---- Generar plan ----
genBtn.onclick=()=>{
  if(!numDias) return;
  if(calcularCalorias){const v=pesoUsuarioActual||parseFloat(pesoUsuarioEl.value);if(isNaN(v)||!v||v<=0){pesoErrorEl.style.display="block";mostrarPesoEdicion();return;}guardarPeso(v);}
  const guardado=cargarPlan(numDias,prioridad);
  if(guardado&&guardado.plan){plan=guardado.plan;codigoActual=guardado.codigoActual;planEditado=!!guardado.planEditado;}
  else{generarPlanNuevo();}
  localStorage.setItem("config:numDias",numDias);localStorage.setItem("config:prioridad",prioridad);
  ultimoSnapshot=null; genBtn.textContent="Generar nueva rutina"; colapsarConfig(); render();
};

// ---- Nueva rutina ----
resetCodeBtnEl.addEventListener("click",()=>{
  ultimoSnapshot=null; generarPlanNuevo(); render();
});

// ---- Mostrar/ocultar carga de código de un compañero/a cuando ya tienes plan propio ----
toggleLoadCodeBtnEl.addEventListener("click",()=>{
  const abierto = loadCodeSectionEl.style.display !== "none";
  loadCodeSectionEl.style.display = abierto ? "none" : "block";
  toggleLoadCodeBtnEl.textContent = abierto ? "🔑 Usar el código de un compañero/a" : "✕ Cerrar";
  if(!abierto) codeInputEl.focus();
});

// ---- Cargar por código ----
loadCodeBtn.onclick=()=>{
  codeErrorEl.style.display="none";
  if(calcularCalorias){const v=pesoUsuarioActual||parseFloat(pesoUsuarioEl.value);if(isNaN(v)||!v||v<=0){pesoErrorEl.style.display="block";mostrarPesoEdicion();return;}guardarPeso(v);}
  const val=parseInt(codeInputEl.value,10);
  if(isNaN(val)||!codeInputEl.value.trim()){codeErrorEl.textContent="Introduce un código válido.";codeErrorEl.style.display="block";return;}
  const dec=decodificarCodigo(val);
  if(!dec){codeErrorEl.textContent="Ese código no es válido.";codeErrorEl.style.display="block";return;}
  numDias=dec.numDias;prioridad=dec.prioridad;
  plan=construirPlan(numDias,prioridad,val);
  codigoActual=val; planEditado=false; guardarPlan();
  actualizarChipsUI();genBtn.textContent="Generar nueva rutina";colapsarConfig();render();
};

$("copyrightYear").textContent="© "+new Date().getFullYear();

// ---- Racha ----
function actualizarRacha(){const r=calcularRacha();if(r>0){rachaBadgeEl.style.display="flex";rachaBadgeEl.innerHTML=`🔥 <span>Llevas <strong>${r}</strong> semana${r===1?"":"s"} seguida${r===1?"":"s"} entrenando</span>`;}else rachaBadgeEl.style.display="none";}

// ---- Deshacer ----
function guardarSnapshot(){ultimoSnapshot=JSON.parse(JSON.stringify(plan));}
undoBtnEl.addEventListener("click",()=>{if(!ultimoSnapshot)return;plan=ultimoSnapshot;ultimoSnapshot=null;guardarPlan();render();});

// ---- Progreso ----
function hayProgreso(){for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("serie:"))return true;}return false;}
function listaEjerciciosHistorial(){
  const ss=new Set(); for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("serie:"))ss.add(k.slice("serie:".length).split(":s")[0]);}
  return [...ss].map(s=>({slug:s,nombre:SLUG_A_NOMBRE[s]||s})).sort((a,b)=>a.nombre.localeCompare(b.nombre));
}
function abrirProgreso(){const l=listaEjerciciosHistorial();if(!l.length)return;progressSelectEl.innerHTML=l.map(e=>`<option value="${e.slug}">${e.nombre}</option>`).join("");mainViewEl.style.display="none";progressViewEl.style.display="block";window.scrollTo(0,0);dibujarGraficaSiVisible();}
function cerrarProgreso(){progressViewEl.style.display="none";mainViewEl.style.display="block";window.scrollTo(0,0);}
progressLinkBtnEl.addEventListener("click",abrirProgreso);
progressBackBtnEl.addEventListener("click",cerrarProgreso);
progressSelectEl.addEventListener("change",dibujarGraficaSiVisible);

// ---- Historial ----
function filaHistHTML(ej){return `<div class="row"><div class="info"><div>${ej.nombre}</div><div class="sub">${ej.series}x${ej.reps} · ${ej.pesos.map(p=>p==null?"–":p).join("/")} kg</div></div></div>`;}
function renderizarHistorial(){
  const rs=listaHistorial();
  if(!rs.length){historyListEl.innerHTML=`<div class="progress-empty">Todavía no has marcado ningún entreno como hecho.</div>`;return;}
  historyListEl.innerHTML=rs.map(r=>{
    const ej=r.ejercicios.filter(e=>e.pesos.some(p=>p!=null)), ab=r.abdominales.filter(e=>e.pesos.some(p=>p!=null));
    return `<div class="day-card"><div class="day-head"><div><div class="dia-full">${r.fecha} · ${r.dia}</div><div class="sesion-nombre">${r.nombreSesion}</div></div>${r.kcal!=null?`<div class="kcal-box"><div class="num">~${r.kcal}</div><div class="lbl">kcal</div></div>`:""}</div>${ej.map(filaHistHTML).join("")}${ab.length?`<div class="abs-label">Abdominales</div>${ab.map(filaHistHTML).join("")}`:""}</div>`;
  }).join("");
}
function abrirHistorial(){renderizarHistorial();mainViewEl.style.display="none";historyViewEl.style.display="block";window.scrollTo(0,0);}
function cerrarHistorial(){historyViewEl.style.display="none";mainViewEl.style.display="block";window.scrollTo(0,0);}
historyLinkBtnEl.addEventListener("click",abrirHistorial);
historyBackBtnEl.addEventListener("click",cerrarHistorial);

// ---- Gráfica ----
function colorVar(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim();}
function dibujarGraficaSiVisible(){
  if(progressViewEl.style.display==="none")return;
  const slug=progressSelectEl.value; if(!slug)return;
  const pf={}; for(let n=0;n<6;n++) getHistorial(slug,n).forEach(e=>{if(!pf[e.date]||e.weight>pf[e.date])pf[e.date]=e.weight;});
  dibujarGrafica(progressCanvasEl,Object.entries(pf).map(([d,w])=>({date:d,weight:w})).sort((a,b)=>a.date>b.date?1:-1));
}
function dibujarGrafica(canvas,datos){
  const ctx=canvas.getContext("2d"),w=canvas.width,h=canvas.height; ctx.clearRect(0,0,w,h);
  const mu=colorVar("--muted2")||"#7d786f",bd=colorVar("--rowborder")||"#322F2C",ac=colorVar("--accent")||"#E8B93A",tx=colorVar("--text")||"#EDEAE3";
  if(!datos||!datos.length){ctx.fillStyle=mu;ctx.font="14px Barlow,sans-serif";ctx.textAlign="center";ctx.fillText("Todavía no hay datos.",w/2,h/2);return;}
  const pad={left:44,right:16,top:16,bottom:28};
  const ps=datos.map(d=>d.weight);let mn=Math.min(...ps),mx=Math.max(...ps);
  if(mn===mx){mn-=5;mx+=5;}const mg=(mx-mn)*0.15;mn-=mg;mx+=mg;
  const pw=w-pad.left-pad.right,ph=h-pad.top-pad.bottom;
  const x=i=>pad.left+(datos.length===1?pw/2:(i/(datos.length-1))*pw);
  const y=v=>pad.top+ph-((v-mn)/(mx-mn))*ph;
  ctx.strokeStyle=bd;ctx.lineWidth=1;
  for(let i=0;i<=3;i++){const yy=pad.top+(ph/3)*i;ctx.beginPath();ctx.moveTo(pad.left,yy);ctx.lineTo(w-pad.right,yy);ctx.stroke();ctx.fillStyle=mu;ctx.font="10px Barlow,sans-serif";ctx.textAlign="right";ctx.fillText(Math.round(mx-((mx-mn)/3)*i)+"kg",pad.left-6,yy+3);}
  ctx.strokeStyle=ac;ctx.lineWidth=2.5;ctx.beginPath();
  datos.forEach((d,i)=>{const px=x(i),py=y(d.weight);i===0?ctx.moveTo(px,py):ctx.lineTo(px,py);});ctx.stroke();
  const paso=Math.max(1,Math.ceil(datos.length/5));
  datos.forEach((d,i)=>{const px=x(i),py=y(d.weight);ctx.fillStyle=ac;ctx.beginPath();ctx.arc(px,py,3.5,0,Math.PI*2);ctx.fill();if(i%paso===0||i===datos.length-1){ctx.fillStyle=mu;ctx.font="10px Barlow,sans-serif";ctx.textAlign="center";ctx.fillText(d.date.slice(5),px,h-pad.bottom+16);}});
  const ul=datos[datos.length-1];ctx.fillStyle=tx;ctx.font="bold 13px Oswald,sans-serif";ctx.textAlign="right";ctx.fillText(`${ul.weight} kg`,w-pad.right,pad.top+4);
}

// ================================================================
// RENDER
// ================================================================
function filaEjercicioHTML(ej, posIdx, mostrarNum, dayIdx, tipo, poolGrupo, fechaDia) {
  const slug=slugify(ej.nombre), nS=PLAN_FIJO[ej.c?'seriesComp':'seriesIsol'];
  const reps = ej.c ? PLAN_FIJO.repsComp : PLAN_FIJO.repsIsol;
  const descanso = ej.c ? PLAN_FIJO.descansoComp : PLAN_FIJO.descansoIsol;
  const numLabel=mostrarNum?(posIdx+1)+". ":"";
  const setsHtml=Array.from({length:nS}).map((_,s)=>{
    const ant=ultimaAntesDeEstaSemana(slug,s), pAct=pesoSemana(slug,s);
    const valor=pAct!==null?pAct:(entradaEnFecha(slug,s,fechaDia)||{}).weight;
    return `<div class="set-box"><span class="set-lbl">S${s+1}</span><input type="number" inputmode="decimal" data-slug="${slug}" data-set="${s}" data-fecha="${fechaDia}" value="${valor!==undefined&&valor!==null?valor:""}" placeholder="${ant?ant.weight:"kg"}" /></div>`;
  }).join("");
  const opciones=(poolGrupo==="abs"?ABDOMINALES:POOLS[poolGrupo]).filter(e=>e.n!==ej.nombre);
  const selId=`edit-${dayIdx}-${tipo}-${posIdx}`;
  return `<div class="row" data-exslug="${slug}" data-exseries="${nS}">
    <div class="info">
      <div>${numLabel}${ej.nombre}${ej.maquina?'<span class="machine-tag">MÁQUINA</span>':''}${ej.c?'<span class="compound-tag">COMP</span>':''}
        <button class="edit-btn" data-toggle-edit="${selId}">✎</button>
        <span class="descanso-tag">⏱ ${descanso}</span>
      </div>
      <div class="sub" data-sub="${slug}">${nS}x${reps}${formatUltimaVez(slug,nS)}</div>
    </div>
    <div class="sets-row">${setsHtml}</div>
    <div class="edit-select-row" id="${selId}">
      <select data-day-index="${dayIdx}" data-tipo="${tipo}" data-pos-index="${posIdx}">
        <option value="">Elegir otro ejercicio...</option>
        ${opciones.map(o=>`<option value="${o.n.replace(/"/g,"&quot;")}">${o.n}${o.m?" (máquina)":""}</option>`).join("")}
      </select>
    </div>
  </div>`;
}

function render() {
  if (!plan) return;
  guardarPlan();
  // Si ya hay un plan generado, el bloque "cargar código" se colapsa por defecto,
  // pero queda accesible desde el botón "Usar el código de un compañero/a"
  loadCodeSectionEl.style.display="none";
  toggleLoadCodeBtnEl.style.display="block";
  toggleLoadCodeBtnEl.textContent="🔑 Usar el código de un compañero/a";
  actualizarRacha();
  progressLinkBtnEl.style.display=hayProgreso()?"block":"none";
  historyLinkBtnEl.style.display=listaHistorial().length>0?"block":"none";
  undoBoxEl.style.display=ultimoSnapshot?"flex":"none";
  if(configResumenEl.style.display!=="none") colapsarConfig();

  const pesoKg=pesoUsuarioActual||parseFloat(pesoUsuarioEl.value)||75;
  if(calcularCalorias){
    const total=plan.reduce((a,{sesion})=>a+kcalSesion(sesion,pesoKg),0);
    totalWeekEl.style.display="flex";totalWeekValEl.textContent=`~${total} kcal`;
  } else totalWeekEl.style.display="none";
  footnoteEl.style.display="block";

  if(codigoActual!=null){
    codeBoxEl.style.display="block";
    codeBoxEl.classList.remove("stale");
    codeBoxEl.querySelector(".code-value").textContent=String(codigoActual).padStart(6,"0");
    if(planEditado){
      codeBoxEl.classList.add("editado");
      codeBoxEl.querySelector(".code-note").textContent="✏️ Has editado ejercicios manualmente. Este código sigue recuperando la versión BASE (sin tus cambios) — tus ediciones se guardan solo en este dispositivo. Sube 2,5kg cuando completes todas las reps.";
    } else {
      codeBoxEl.classList.remove("editado");
      codeBoxEl.querySelector(".code-note").textContent="Este código siempre reconstruye exactamente esta rutina, en cualquier dispositivo. Sube 2,5kg cuando completes todas las reps con buena técnica.";
    }
    resetCodeBtnEl.textContent="Generar nueva rutina";
    resetCodeBtnEl.style.display="block";
  }

  const sid=calcularSemanaId(new Date()), hoy=new Date(); hoy.setHours(0,0,0,0);

  const bannerHtml=`<div class="periodo-banner adaptacion">
    <div class="periodo-titulo">📌 Plan Indefinido</div>
    <div class="periodo-nota">${PLAN_FIJO.nota}</div>
  </div>`;

  planEl.innerHTML = bannerHtml + plan.map(({label,sesion},index)=>{
    const hecho=estaHecho(sid,index), fechaDia=fechaParaSesion(index), fechaDiaStr=formatFechaLocal(fechaDia);
    const esPasado=fechaDia<hoy, esDescanso=sesion.grupo==="descanso";
    const gruposStr=GRUPOS_DISPLAY[sesion.grupo]||"";
    return `<div class="day-card" data-day-index="${index}">
      <div class="day-head">
        <div>
          <div class="dia-full">${label}</div>
          <div class="sesion-nombre">${sesion.nombre}</div>
          <div class="grupos-tag">(${gruposStr})</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          ${calcularCalorias?`<div class="kcal-box"><div class="num">~${kcalSesion(sesion,pesoKg)}</div><div class="lbl">kcal</div></div>`:""}
          <button class="hecho-btn${hecho?" done":""}" data-hecho="${index}">${hecho?"✓ Hecho esta semana":"Marcar hecho"}</button>
          ${esDescanso?"":` <button class="regen-btn" data-regen="${index}">↻ Variar</button>`}
        </div>
      </div>
      ${esPasado&&!hecho?'<div class="warning-badge">⚠ No marcaste este día como hecho</div>':""}
      <div class="row warmup">
        <div class="warmup-step"><span class="w-nombre">Cinta o bicicleta suave</span><span class="w-detalle">10 minutos, ritmo cómodo para elevar temperatura corporal</span></div>
      </div>
      ${esDescanso
        ?`<div class="row" style="color:var(--muted);font-style:italic;">Día de descanso activo: solo cardio suave, sin ejercicios de fuerza. Deja que el cuerpo recupere.</div>`
        :`${sesion.ejercicios.map((ej,i)=>filaEjercicioHTML(ej,i,true,index,"principal",sesion.grupo,fechaDiaStr)).join("")}
         <div class="abs-label">Abdominales · ${PLAN_FIJO.descansoAbs} descanso</div>
         ${sesion.abdominales.map((ej,i)=>filaEjercicioHTML(ej,i,false,index,"abs","abs",fechaDiaStr)).join("")}`
      }
    </div>`;
  }).join("");

  // Guardar peso
  planEl.querySelectorAll("input[data-slug]").forEach(input=>{
    input.addEventListener("blur",()=>{
      const val=parseFloat(input.value); if(isNaN(val)||val<0) return;
      guardarHistorial(input.dataset.slug,parseInt(input.dataset.set,10),val,input.dataset.fecha);
      guardarPesoSemana(input.dataset.slug,parseInt(input.dataset.set,10),val);
      input.classList.add("saved"); setTimeout(()=>input.classList.remove("saved"),1200);
      const row=input.closest(".row"), sub=row&&row.querySelector(`[data-sub="${input.dataset.slug}"]`);
      if(sub){const nS=parseInt(row.dataset.exseries,10);sub.textContent=sub.textContent.split(" · última vez")[0].split(" · ref. grupo")[0]+formatUltimaVez(input.dataset.slug,nS);}
      progressLinkBtnEl.style.display="block";
    });
  });

  // Variar
  planEl.querySelectorAll("[data-regen]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=parseInt(btn.dataset.regen,10); guardarSnapshot();
      const usados=new Set();
      plan.forEach((p,i)=>{if(i===idx)return;p.sesion.ejercicios.forEach(e=>{usados.add(e.nombre);if(NOMBRE_A_FAM[e.nombre])usados.add(`fam:${NOMBRE_A_FAM[e.nombre]}`);});p.sesion.abdominales.forEach(e=>{usados.add(e.nombre);if(NOMBRE_A_FAM[e.nombre])usados.add(`fam:${NOMBRE_A_FAM[e.nombre]}`);});});
      plan[idx].sesion=generarSesion(plan[idx].sesion.nombre,Math.random,PRIORIDAD_PESOS[prioridad],usados);
      marcarPlanEditado(); render();
    });
  });

  // Marcar hecho
  planEl.querySelectorAll("[data-hecho]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx=parseInt(btn.dataset.hecho,10);
      if(estaHecho(sid,idx)){desmarcarHecho(sid,idx);borrarEntrenoHistorial(sid,idx);}
      else{marcarHecho(sid,idx);guardarEntrenoHistorial(sid,idx,plan[idx].label,plan[idx].sesion,pesoKg,formatFechaLocal(fechaParaSesion(idx)));}
      render();
    });
  });

  // Toggle editor
  planEl.querySelectorAll("[data-toggle-edit]").forEach(btn=>{
    btn.addEventListener("click",()=>{const t=document.getElementById(btn.dataset.toggleEdit);if(t)t.classList.toggle("open");});
  });

  // Cambio ejercicio
  planEl.querySelectorAll(".edit-select-row select").forEach(sel=>{
    sel.addEventListener("change",()=>{
      const nn=sel.value; if(!nn) return;
      const dI=parseInt(sel.dataset.dayIndex,10),tipo=sel.dataset.tipo,pI=parseInt(sel.dataset.posIndex,10);
      const pg=tipo==="abs"?"abs":plan[dI].sesion.grupo, fuente=pg==="abs"?ABDOMINALES:POOLS[pg];
      const el=fuente.find(e=>e.n===nn); if(!el) return; guardarSnapshot();
      if(tipo==="abs"){const act=plan[dI].sesion.abdominales[pI];plan[dI].sesion.abdominales[pI]={nombre:el.n,maquina:el.m,series:3,reps:el.n.includes("Plancha")?"45-60 seg":"10-12"};}
      else plan[dI].sesion.ejercicios[pI]={nombre:el.n,maquina:el.m,c:el.c,sg:el.sg,...repsFor(el.n,Math.random)};
      marcarPlanEditado(); render();
    });
  });
}

// ---- Init ----
(function init(){
  const nd=parseInt(localStorage.getItem("config:numDias")||"0",10);
  const pr=localStorage.getItem("config:prioridad")||"maquina";
  if(nd>=1&&nd<=7){numDias=nd;prioridad=pr;actualizarChipsUI();const g=cargarPlan(nd,pr);if(g&&g.plan){plan=g.plan;codigoActual=g.codigoActual;planEditado=!!g.planEditado;genBtn.textContent="Generar nueva rutina";colapsarConfig();render();}}
})();
