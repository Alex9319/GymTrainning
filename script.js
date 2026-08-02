const SPLITS = {
  1: ["Full Body"],
  2: ["Full Body A", "Full Body B"],
  3: ["Empuje (Pecho/Hombro/Tríceps)", "Tracción (Espalda/Bíceps)", "Pierna"],
  4: ["Tren superior A", "Tren inferior A", "Tren superior B", "Tren inferior B"],
  5: ["Empuje", "Tracción", "Pierna", "Tren superior", "Tren inferior"],
  6: ["Empuje", "Tracción", "Pierna", "Empuje", "Tracción", "Pierna"],
  7: ["Empuje", "Tracción", "Pierna", "Descanso activo", "Empuje", "Tracción", "Pierna"],
};

const GRUPO_POR_SESION = {
  "Full Body": "full", "Full Body A": "full", "Full Body B": "full",
  "Empuje (Pecho/Hombro/Tríceps)": "empuje", "Empuje": "empuje",
  "Tracción (Espalda/Bíceps)": "traccion", "Tracción": "traccion",
  "Pierna": "pierna",
  "Tren superior A": "superior", "Tren superior B": "superior", "Tren superior": "superior",
  "Tren inferior A": "pierna", "Tren inferior B": "pierna", "Tren inferior": "pierna",
  "Descanso activo": "descanso",
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
    { n: "Face pull en polea", m: true, c: false, sg: "espalda" },
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
    { n: "Pec deck invertido (deltoide posterior) en máquina", m: true, c: false, sg: "hombro", fam: "deltoide_posterior" },
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
    { n: "Elevación de talones de pie con mancuernas (gemelo)", m: false, c: false, sg: "gemelo", fam: "elevacion_talones" },
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
    { n: "Face pull en polea", m: true, c: false, sg: "espalda" },
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
  { n: "Crunch en máquina", m: true },
  { n: "Crunch en polea alta", m: true },
  { n: "Máquina de rotación de tronco", m: true },
  { n: "Máquina de flexión lateral (oblicuos)", m: true },
  { n: "Pallof press en polea", m: true },
  { n: "Elevación de piernas colgado", m: false },
  { n: "Plancha frontal", m: false },
  { n: "Rueda rusa (ab wheel)", m: false },
  { n: "Plancha lateral", m: false },
  { n: "Elevación de rodillas en paralelas", m: false },
  { n: "Bicicleta (crunch oblicuo)", m: false },
  { n: "Crunch en el suelo", m: false },
  { n: "Mountain climbers", m: false },
  { n: "Crunch inverso", m: false },
  { n: "Hollow hold", m: false },
];

const PRIORIDAD_PESOS = {
  maquina: { m: 3, l: 1 },
  equilibrado: { m: 1, l: 1 },
  libre: { m: 1, l: 3 },
};
const PRIORIDAD_ORDEN = ["maquina", "equilibrado", "libre"];

const NOMBRE_A_FAM = {};
Object.values(POOLS).forEach((pool) => pool.forEach((e) => { if (e.fam) NOMBRE_A_FAM[e.n] = e.fam; }));

const SLUG_A_NOMBRE = {};
const SLUG_A_GRUPOS = {};
function registrarEjercicio(nombre, grupo) {
  const slug = slugify(nombre);
  SLUG_A_NOMBRE[slug] = nombre;
  if (!SLUG_A_GRUPOS[slug]) SLUG_A_GRUPOS[slug] = new Set();
  SLUG_A_GRUPOS[slug].add(grupo);
}
function construirMapasEjercicios() {
  ["empuje", "traccion", "pierna"].forEach((grupo) => POOLS[grupo].forEach((e) => registrarEjercicio(e.n, e.sg)));
  ABDOMINALES.forEach((e) => registrarEjercicio(e.n, "abs"));
}

function pickPriorizandoMaquinas(pool, n, rng, pesos, excluir) {
  excluir = excluir || new Set();
  const porNombre = (e) => excluir.has(e.n);
  const porFamilia = (e) => e.fam && excluir.has(`fam:${e.fam}`);
  function candidatosDe(lista, minimo) {
    let c = lista.filter((e) => !porNombre(e) && !porFamilia(e));
    if (c.length < minimo) c = lista.filter((e) => !porNombre(e));
    if (c.length < minimo) c = lista;
    return c.map((e) => ({ ...e }));
  }
  function elegirDe(lista) {
    const weights = lista.map((e) => (e.m ? pesos.m : pesos.l));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = rng() * total;
    let idx = 0;
    for (; idx < weights.length; idx++) { r -= weights[idx]; if (r <= 0) break; }
    return lista.splice(Math.min(idx, lista.length - 1), 1)[0];
  }
  function quitarFamiliaDe(lista, fam) {
    if (!fam) return;
    for (let j = lista.length - 1; j >= 0; j--) { if (lista[j].fam === fam) lista.splice(j, 1); }
  }
  const out = [];
  const gruposCompletos = {};
  const sinGrupoCompleto = [];
  pool.forEach((e) => (e.sg ? (gruposCompletos[e.sg] = gruposCompletos[e.sg] || []).push(e) : sinGrupoCompleto.push(e)));
  const grupos = {};
  Object.keys(gruposCompletos).forEach((g) => { grupos[g] = candidatosDe(gruposCompletos[g], 1); });
  const sinGrupo = candidatosDe(sinGrupoCompleto, n);
  let nombresGrupos = Object.keys(grupos);
  for (let i = nombresGrupos.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [nombresGrupos[i], nombresGrupos[j]] = [nombresGrupos[j], nombresGrupos[i]];
  }
  let pendientes = nombresGrupos.filter((g) => grupos[g].length > 0);
  while (out.length < n && pendientes.length > 0) {
    for (let i = 0; i < pendientes.length && out.length < n; i++) {
      const g = pendientes[i];
      const elegido = elegirDe(grupos[g]);
      out.push(elegido);
      nombresGrupos.forEach((g2) => quitarFamiliaDe(grupos[g2], elegido.fam));
      quitarFamiliaDe(sinGrupo, elegido.fam);
    }
    pendientes = pendientes.filter((g) => grupos[g].length > 0);
  }
  while (out.length < n && sinGrupo.length > 0) {
    const elegido = elegirDe(sinGrupo);
    out.push(elegido);
    quitarFamiliaDe(sinGrupo, elegido.fam);
  }
  if (out.length < n) {
    const nombresYaElegidos = new Set(out.map((e) => e.n));
    const relleno = pool.filter((e) => !nombresYaElegidos.has(e.n)).map((e) => ({ ...e }));
    while (out.length < n && relleno.length > 0) out.push(elegirDe(relleno));
  }
  return out;
}

function repsFor(nombre, rng) {
  const pesados = ["Sentadilla con barra", "Peso muerto convencional", "Peso muerto rumano",
    "Press banca con barra", "Press militar de pie", "Dominadas pronas", "Remo con barra",
    "Hack squat en máquina", "Sentadilla en máquina Smith"];
  if (pesados.includes(nombre)) return { series: 4, reps: "6-8" };
  return { series: 3 + (rng() > 0.5 ? 1 : 0), reps: ["8-10", "10-12", "12-15"][Math.floor(rng() * 3)] };
}

function crearRng(semilla) {
  let a = semilla >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function slugify(nombre) {
  return nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function kcalPorMinuto(met, pesoKg) { return (met * 3.5 * pesoKg) / 200; }
function kcalSetPrincipal(ej, pesoKg) {
  const met = ej.c ? 6 : 3.5;
  const minutos = ej.c ? 2.25 : 2;
  return kcalPorMinuto(met, pesoKg) * minutos;
}
function kcalSetAbs(pesoKg) { return kcalPorMinuto(4, pesoKg) * 1; }
function kcalCalentamiento(pesoKg) { return kcalPorMinuto(5, pesoKg) * 10; }
function kcalSesion(sesion, pesoKg) {
  const calentamiento = kcalCalentamiento(pesoKg);
  const principal = sesion.ejercicios.reduce((acc, ej) => acc + ej.series * kcalSetPrincipal(ej, pesoKg), 0);
  const abs = sesion.abdominales.reduce((acc, ej) => acc + ej.series * kcalSetAbs(pesoKg), 0);
  return Math.round((calentamiento + principal + abs) / 10) * 10;
}

function generarSesion(nombreSesion, rng, pesos, usadosSemana) {
  usadosSemana = usadosSemana || new Set();
  const grupo = GRUPO_POR_SESION[nombreSesion] || "full";
  if (grupo === "descanso") {
    return {
      nombre: nombreSesion, grupo,
      calentamiento: { nombre: "Cinta / cardio suave", detalle: "10 min, ritmo cómodo para elevar pulsaciones" },
      ejercicios: [], abdominales: [],
    };
  }
  const pool = POOLS[grupo];
  const nEjercicios = grupo === "full" ? 5 : 6;
  const elegidos = pickPriorizandoMaquinas(pool, nEjercicios, rng, pesos, usadosSemana);
  const abs = pickPriorizandoMaquinas(ABDOMINALES, 3, rng, pesos, usadosSemana);
  elegidos.forEach((e) => { usadosSemana.add(e.n); if (e.fam) usadosSemana.add(`fam:${e.fam}`); });
  abs.forEach((e) => { usadosSemana.add(e.n); if (e.fam) usadosSemana.add(`fam:${e.fam}`); });
  return {
    nombre: nombreSesion, grupo,
    calentamiento: { nombre: "Cinta / cardio suave", detalle: "10 min, ritmo cómodo para elevar pulsaciones" },
    ejercicios: elegidos.map((ej) => ({ nombre: ej.n, maquina: ej.m, c: ej.c, ...repsFor(ej.n, rng) })),
    abdominales: abs.map((ej) => ({
      nombre: ej.n, maquina: ej.m, series: 3,
      reps: ej.n.includes("Plancha") || ej.n.includes("Hollow") ? "30-45 seg" : "12-15",
    })),
  };
}

// ---- Código y plan mensual ----
// El código identifica: número de días + prioridad + mes. Es estable todo el mes.
// Formato: meta * 1000 + (yearMonth % 1000)
// meta = numDias * 3 + prioIdx  →  rango 3-23 (21 valores)
function calcularYearMonth() {
  const now = new Date();
  return now.getFullYear() * 100 + (now.getMonth() + 1);
}
function generarCodigo(numDias, prioridad) {
  const pIdx = PRIORIDAD_ORDEN.indexOf(prioridad);
  const meta = numDias * 3 + pIdx;
  return meta * 1000 + (calcularYearMonth() % 1000);
}
function decodificarCodigo(codigo) {
  const meta = Math.floor(codigo / 1000);
  const numDias = Math.floor(meta / 3);
  const pIdx = meta % 3;
  if (numDias < 1 || numDias > 7 || pIdx < 0 || pIdx > 2) return null;
  return { numDias, prioridad: PRIORIDAD_ORDEN[pIdx] };
}

function construirPlan(numDias, prioridad, semilla) {
  const rng = crearRng(semilla != null ? semilla : generarCodigo(numDias, prioridad));
  const pesos = PRIORIDAD_PESOS[prioridad];
  const splits = SPLITS[Math.min(numDias, 7)];
  const usados = new Set();
  return splits.map((nombre, i) => ({
    label: `Día ${i + 1}`,
    sesion: generarSesion(nombre, rng, pesos, usados),
  }));
}

// Clave: planMensual:<YYYYMM>:<numDias>:<prioIdx>
function clavePlanMensual(numDias, prioridad) {
  const pIdx = PRIORIDAD_ORDEN.indexOf(prioridad);
  return `planMensual:${calcularYearMonth()}:${numDias}:${pIdx}`;
}
function guardarPlanMensual() {
  try { localStorage.setItem(clavePlanMensual(numDias, prioridad), JSON.stringify({ plan, numDias, prioridad, codigoActual, codigoDesactualizado })); } catch (e) {}
}
function cargarPlanMensual(nDias, prio) {
  try {
    const raw = localStorage.getItem(clavePlanMensual(nDias, prio));
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

// ---- Semana ----
function calcularSemanaId(fecha) {
  const d = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const inicioAno = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return d.getUTCFullYear() * 100 + Math.ceil((((d - inicioAno) / 86400000) + 1) / 7);
}
// Asigna a cada sesión (índice 0..numDias-1) el día real de la semana actual (Lun=0)
function fechaParaSesion(idx) {
  const hoy = new Date();
  const lunes = new Date(hoy);
  lunes.setHours(0, 0, 0, 0);
  lunes.setDate(hoy.getDate() - (hoy.getDay() + 6) % 7);
  const fecha = new Date(lunes);
  fecha.setDate(lunes.getDate() + idx);
  return fecha;
}
function formatFechaLocal(fecha) {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// ---- Historial de pesos (largo plazo, todas las semanas) ----
function getHistorialSet(slug, n) {
  try { const raw = localStorage.getItem(`serie:${slug}:s${n}`); return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
}
function guardarEnHistorialSet(slug, n, weight, fecha) {
  const arr = getHistorialSet(slug, n);
  const dia = fecha || formatFechaLocal(new Date());
  const idx = arr.findIndex((e) => e.date === dia);
  if (idx >= 0) arr[idx].weight = weight;
  else arr.push({ date: dia, weight });
  arr.sort((a, b) => (a.date > b.date ? 1 : -1));
  localStorage.setItem(`serie:${slug}:s${n}`, JSON.stringify(arr.slice(-12)));
}
function entradaEnFecha(slug, n, fecha) {
  return getHistorialSet(slug, n).find((e) => e.date === fecha) || null;
}
function ultimaEntrada(slug, n) {
  const arr = getHistorialSet(slug, n);
  return arr.length ? arr[arr.length - 1] : null;
}
function ultimaEntradaAntesDeEstaSemana(slug, n) {
  const arr = getHistorialSet(slug, n);
  const limite = formatFechaLocal(fechaParaSesion(0));
  for (let i = arr.length - 1; i >= 0; i--) { if (arr[i].date < limite) return arr[i]; }
  return null;
}

// ---- Pesos de la semana activa (se resetean con cada semana nueva) ----
// Clave: semana:<semanaId> → { "<slug>:s<N>": weight, ... }
function getPesosSemanaActual() {
  try { const raw = localStorage.getItem(`semana:${calcularSemanaId(new Date())}`); return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; }
}
function pesoSemana(slug, n) {
  const v = getPesosSemanaActual()[`${slug}:s${n}`];
  return v === undefined ? null : v;
}
function guardarPesoSemana(slug, n, weight) {
  const key = `semana:${calcularSemanaId(new Date())}`;
  const datos = getPesosSemanaActual();
  datos[`${slug}:s${n}`] = weight;
  localStorage.setItem(key, JSON.stringify(datos));
}

// ---- Referencia de grupo muscular y sugerencia de progresión ----
function buscarReferenciaGrupo(slugActual) {
  const gruposActual = SLUG_A_GRUPOS[slugActual];
  if (!gruposActual) return null;
  let mejor = null;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith("serie:")) continue;
    const slugOtro = k.slice("serie:".length).split(":s")[0];
    if (slugOtro === slugActual) continue;
    const gruposOtro = SLUG_A_GRUPOS[slugOtro];
    if (!gruposOtro) continue;
    let comparten = false;
    for (const g of gruposActual) if (gruposOtro.has(g)) { comparten = true; break; }
    if (!comparten) continue;
    try {
      const arr = JSON.parse(localStorage.getItem(k));
      if (arr && arr.length) {
        const ultimo = arr[arr.length - 1];
        if (!mejor || ultimo.date > mejor.date) mejor = { ...ultimo, slug: slugOtro };
      }
    } catch (e) {}
  }
  return mejor;
}
function sugerenciaProgresion(slug, n) {
  const arr = getHistorialSet(slug, n);
  if (arr.length < 2) return null;
  const ultimas = arr.slice(-2);
  if (ultimas[0].weight === ultimas[1].weight) {
    return `💡 llevas igual 2 veces, prueba ${Math.round((ultimas[1].weight + 2.5) * 2) / 2} kg`;
  }
  return null;
}

// ---- Peso corporal ----
function getPesoUsuarioGuardado() { try { const raw = localStorage.getItem("perfil:peso"); return raw ? JSON.parse(raw) : null; } catch (e) { return null; } }
function guardarPesoUsuario(v) { localStorage.setItem("perfil:peso", JSON.stringify(v)); }

// ---- Marcar hecho + racha ----
function marcarHecho(semanaId, idx) { localStorage.setItem(`hecho:${semanaId}:${idx}`, "1"); }
function desmarcarHecho(semanaId, idx) { localStorage.removeItem(`hecho:${semanaId}:${idx}`); }
function estaHecho(semanaId, idx) { return localStorage.getItem(`hecho:${semanaId}:${idx}`) === "1"; }
function calcularRachaSemanas() {
  const semanas = new Set();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("hecho:")) { const s = parseInt(k.split(":")[1], 10); if (!isNaN(s)) semanas.add(s); }
  }
  if (!semanas.size) return 0;
  const actual = calcularSemanaId(new Date());
  let racha = 0, esperado = actual;
  for (const s of [...semanas].sort((a, b) => b - a)) {
    if (s === esperado) { racha++; esperado--; }
    else if (s < esperado) break;
  }
  return racha;
}

// ---- Historial de entrenos ----
function snapshotSesion(sesion, pesoKg, fecha) {
  const leerPesos = (ej) => {
    const slug = slugify(ej.nombre);
    const pesos = [];
    for (let s = 0; s < ej.series; s++) {
      const entrada = getHistorialSet(slug, s).find((e) => e.date === fecha);
      pesos.push(entrada ? entrada.weight : null);
    }
    return pesos;
  };
  const conAlgunPeso = (ej) => ej.pesos.some((p) => p !== null);
  return {
    nombreSesion: sesion.nombre,
    kcal: calcularCalorias ? kcalSesion(sesion, pesoKg) : null,
    ejercicios: sesion.ejercicios.map((ej) => ({ nombre: ej.nombre, series: ej.series, reps: ej.reps, pesos: leerPesos(ej) })).filter(conAlgunPeso),
    abdominales: sesion.abdominales.map((ej) => ({ nombre: ej.nombre, series: ej.series, reps: ej.reps, pesos: leerPesos(ej) })).filter(conAlgunPeso),
  };
}
function guardarEntrenoEnHistorial(semanaId, idx, label, sesion, pesoKg, fecha) {
  try { localStorage.setItem(`historialEntrenos:${semanaId}:${idx}`, JSON.stringify({ fecha, dia: label, semanaId, ...snapshotSesion(sesion, pesoKg, fecha) })); } catch (e) {}
}
function borrarEntrenoDelHistorial(semanaId, idx) { localStorage.removeItem(`historialEntrenos:${semanaId}:${idx}`); }
function listaHistorialEntrenos() {
  const registros = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("historialEntrenos:")) { try { const r = JSON.parse(localStorage.getItem(k)); if (r) registros.push(r); } catch (e) {} }
  }
  return registros.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

// ---- Tema ----
function getTemaGuardado() { return localStorage.getItem("tema"); }
function guardarTema(v) { localStorage.setItem("tema", v); }

construirMapasEjercicios();

// ---- Estado global ----
let numDias = 0;
let prioridad = "maquina";
let plan = null;
let codigoActual = null;
let codigoDesactualizado = false;
let ultimoSnapshot = null;

// ---- Referencias DOM ----
const mainViewEl = document.getElementById("mainView");
const progressViewEl = document.getElementById("progressView");
const daysEl = document.getElementById("days");
const prioEl = document.getElementById("prioridad");
const genBtn = document.getElementById("genBtn");
const planEl = document.getElementById("plan");
const totalWeekEl = document.getElementById("totalWeek");
const totalWeekValEl = document.getElementById("totalWeekVal");
const footnoteEl = document.getElementById("footnote");
const codeBoxEl = document.getElementById("codeBox");
const resetCodeBtnEl = document.getElementById("resetCodeBtn");
const codeInputEl = document.getElementById("codeInput");
const loadCodeBtn = document.getElementById("loadCodeBtn");
const codeErrorEl = document.getElementById("codeError");
const loadCodeSectionEl = document.getElementById("loadCodeSection");
const pesoUsuarioEl = document.getElementById("pesoUsuario");
const pesoErrorEl = document.getElementById("pesoError");
const pesoViewEl = document.getElementById("pesoView");
const pesoViewTextEl = document.getElementById("pesoViewText");
const pesoEditEl = document.getElementById("pesoEdit");
const pesoModificarLinkEl = document.getElementById("pesoModificarLink");
const rachaBadgeEl = document.getElementById("rachaBadge");
const undoBoxEl = document.getElementById("undoBox");
const undoBtnEl = document.getElementById("undoBtn");
const progressLinkBtnEl = document.getElementById("progressLinkBtn");
const progressBackBtnEl = document.getElementById("progressBackBtn");
const progressSelectEl = document.getElementById("progressSelect");
const progressCanvasEl = document.getElementById("progressCanvas");
const temaBtnEl = document.getElementById("temaBtn");
const historyLinkBtnEl = document.getElementById("historyLinkBtn");
const historyViewEl = document.getElementById("historyView");
const historyBackBtnEl = document.getElementById("historyBackBtn");
const historyListEl = document.getElementById("historyList");
const calcularCalCheckEl = document.getElementById("calcularCalCheck");
const pesoSectionEl = document.getElementById("pesoSection");
const configOptionsEl = document.getElementById("configOptions");
const configResumenEl = document.getElementById("configResumen");
const configResumenCodeEl = document.getElementById("configResumenCode");
const configResumenDetalleEl = document.getElementById("configResumenDetalle");
const expandirConfigBtnEl = document.getElementById("expandirConfigBtn");

// ---- Tema ----
function aplicarTema(tema) {
  if (tema === "light") { document.documentElement.classList.add("light-theme"); temaBtnEl.textContent = "☀️"; }
  else { document.documentElement.classList.remove("light-theme"); temaBtnEl.textContent = "🌙"; }
}
let temaActual = getTemaGuardado() || "dark";
aplicarTema(temaActual);
temaBtnEl.addEventListener("click", () => {
  temaActual = temaActual === "light" ? "dark" : "light";
  guardarTema(temaActual);
  aplicarTema(temaActual);
  if (plan) dibujarGraficaSiVisible();
});

// ---- Peso corporal ----
let pesoUsuarioActual = getPesoUsuarioGuardado();
function mostrarPesoVista(v) { pesoViewTextEl.textContent = `Peso guardado: ${v} kg`; pesoViewEl.style.display = "flex"; pesoEditEl.style.display = "none"; }
function mostrarPesoEdicion() { pesoUsuarioEl.value = pesoUsuarioActual || ""; pesoViewEl.style.display = "none"; pesoEditEl.style.display = "block"; pesoUsuarioEl.focus(); }
function guardarYMostrarPeso(v) { guardarPesoUsuario(v); pesoUsuarioActual = v; mostrarPesoVista(v); pesoErrorEl.style.display = "none"; }
if (pesoUsuarioActual) mostrarPesoVista(pesoUsuarioActual); else mostrarPesoEdicion();
pesoModificarLinkEl.addEventListener("click", (e) => { e.preventDefault(); mostrarPesoEdicion(); });
pesoUsuarioEl.addEventListener("change", () => {
  const val = parseFloat(pesoUsuarioEl.value);
  if (!isNaN(val) && val > 0) { guardarYMostrarPeso(val); if (plan) render(); }
});

const PRIORIDAD_LABELS = { maquina: "Máquinas", equilibrado: "Equilibrado", libre: "Peso libre" };

function colapsarConfig() {
  configOptionsEl.style.display = "none";
  configResumenEl.style.display = "flex";
  configResumenCodeEl.textContent = codigoDesactualizado
    ? "Código no disponible (has hecho cambios)"
    : `Código: ${String(codigoActual).padStart(6, "0")}`;
  configResumenDetalleEl.textContent = `${numDias} día${numDias === 1 ? "" : "s"}/semana · ${PRIORIDAD_LABELS[prioridad]}`;
}
function expandirConfig() { configOptionsEl.style.display = "block"; configResumenEl.style.display = "none"; }
expandirConfigBtnEl.addEventListener("click", expandirConfig);

let calcularCalorias = calcularCalCheckEl.checked;
calcularCalCheckEl.addEventListener("change", () => {
  calcularCalorias = calcularCalCheckEl.checked;
  pesoSectionEl.style.display = calcularCalorias ? "block" : "none";
  pesoErrorEl.style.display = "none";
  if (plan) render();
});

// ---- Selector de número de días (1-7) ----
for (let n = 1; n <= 7; n++) {
  const btn = document.createElement("button");
  btn.className = "day-chip";
  btn.textContent = n === 1 ? "1 día" : `${n} días`;
  btn.dataset.numDias = n;
  btn.onclick = () => {
    numDias = n;
    daysEl.querySelectorAll(".day-chip").forEach((b) => b.classList.toggle("active", parseInt(b.dataset.numDias, 10) === n));
    genBtn.disabled = false;
  };
  daysEl.appendChild(btn);
}

// ---- Prioridad ----
PRIORIDAD_ORDEN.forEach((p) => {
  const btn = document.createElement("button");
  btn.className = "day-chip" + (p === prioridad ? " active" : "");
  btn.textContent = PRIORIDAD_LABELS[p];
  btn.dataset.prioId = p;
  btn.onclick = () => {
    prioridad = p;
    prioEl.querySelectorAll(".day-chip").forEach((b) => b.classList.toggle("active", b.dataset.prioId === p));
  };
  prioEl.appendChild(btn);
});

function actualizarChipsUI() {
  daysEl.querySelectorAll(".day-chip").forEach((btn) => btn.classList.toggle("active", parseInt(btn.dataset.numDias, 10) === numDias));
  prioEl.querySelectorAll(".day-chip").forEach((btn) => btn.classList.toggle("active", btn.dataset.prioId === prioridad));
  genBtn.disabled = numDias === 0;
}

// ---- Generar / recuperar plan ----
function regenerarPlanLimpio() {
  const codigo = generarCodigo(numDias, prioridad);
  plan = construirPlan(numDias, prioridad);
  codigoActual = codigo;
  codigoDesactualizado = false;
  ultimoSnapshot = null;
  guardarPlanMensual();
  render();
}
resetCodeBtnEl.addEventListener("click", regenerarPlanLimpio);

genBtn.onclick = () => {
  if (numDias === 0) return;
  if (calcularCalorias) {
    const pesoVal = pesoUsuarioActual || parseFloat(pesoUsuarioEl.value);
    if (isNaN(pesoVal) || !pesoVal || pesoVal <= 0) { pesoErrorEl.style.display = "block"; mostrarPesoEdicion(); return; }
    guardarYMostrarPeso(pesoVal);
  }
  // Recuperar el plan mensual guardado si existe con la misma config
  const guardado = cargarPlanMensual(numDias, prioridad);
  if (guardado && guardado.plan) {
    plan = guardado.plan;
    codigoActual = guardado.codigoActual;
    codigoDesactualizado = !!guardado.codigoDesactualizado;
  } else {
    const codigo = generarCodigo(numDias, prioridad);
    plan = construirPlan(numDias, prioridad);
    codigoActual = codigo;
    codigoDesactualizado = false;
    guardarPlanMensual();
  }
  ultimoSnapshot = null;
  genBtn.textContent = "Cambiar configuración";
  colapsarConfig();
  render();
};

// ---- Cargar por código ----
loadCodeBtn.onclick = () => {
  codeErrorEl.style.display = "none";
  if (calcularCalorias) {
    const pesoVal = pesoUsuarioActual || parseFloat(pesoUsuarioEl.value);
    if (isNaN(pesoVal) || !pesoVal || pesoVal <= 0) { pesoErrorEl.style.display = "block"; mostrarPesoEdicion(); return; }
    guardarYMostrarPeso(pesoVal);
  }
  const val = parseInt(codeInputEl.value, 10);
  if (isNaN(val) || codeInputEl.value.trim().length === 0) {
    codeErrorEl.textContent = "Introduce un código válido."; codeErrorEl.style.display = "block"; return;
  }
  const decoded = decodificarCodigo(val);
  if (!decoded) { codeErrorEl.textContent = "Ese código no es válido."; codeErrorEl.style.display = "block"; return; }
  numDias = decoded.numDias;
  prioridad = decoded.prioridad;
  plan = construirPlan(numDias, prioridad, val);
  codigoActual = val;
  codigoDesactualizado = false;
  actualizarChipsUI();
  genBtn.textContent = "Cambiar configuración";
  colapsarConfig();
  render();
};

document.getElementById("copyrightYear").textContent = "© " + new Date().getFullYear();

// ---- Racha semanal ----
function actualizarRachaBadge() {
  const racha = calcularRachaSemanas();
  if (racha > 0) {
    rachaBadgeEl.style.display = "flex";
    rachaBadgeEl.innerHTML = `🔥 <span>Llevas <strong>${racha}</strong> semana${racha === 1 ? "" : "s"} seguida${racha === 1 ? "" : "s"} entrenando</span>`;
  } else rachaBadgeEl.style.display = "none";
}

// ---- Deshacer ----
function guardarSnapshot() { ultimoSnapshot = JSON.parse(JSON.stringify(plan)); }
undoBtnEl.addEventListener("click", () => {
  if (!ultimoSnapshot) return;
  plan = ultimoSnapshot; ultimoSnapshot = null; codigoDesactualizado = true;
  guardarPlanMensual(); render();
});

// ---- Progreso ----
function hayDatosDeProgreso() {
  for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith("serie:")) return true; }
  return false;
}
function listaEjerciciosConHistorial() {
  const slugs = new Set();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("serie:")) slugs.add(k.slice("serie:".length).split(":s")[0]);
  }
  return [...slugs].map((slug) => ({ slug, nombre: SLUG_A_NOMBRE[slug] || slug })).sort((a, b) => a.nombre.localeCompare(b.nombre));
}
function abrirProgreso() {
  const lista = listaEjerciciosConHistorial();
  if (!lista.length) return;
  progressSelectEl.innerHTML = lista.map((e) => `<option value="${e.slug}">${e.nombre}</option>`).join("");
  mainViewEl.style.display = "none"; progressViewEl.style.display = "block";
  window.scrollTo(0, 0); dibujarGraficaSiVisible();
}
function cerrarProgreso() { progressViewEl.style.display = "none"; mainViewEl.style.display = "block"; window.scrollTo(0, 0); }
progressLinkBtnEl.addEventListener("click", abrirProgreso);
progressBackBtnEl.addEventListener("click", cerrarProgreso);
progressSelectEl.addEventListener("change", dibujarGraficaSiVisible);

// ---- Historial ----
function filaHistorialEjercicioHTML(ej) {
  return `<div class="row"><div class="info"><div>${ej.nombre}</div><div class="sub">${ej.series}x${ej.reps} · pesos: ${ej.pesos.map((p) => p == null ? "–" : p).join("/")} kg</div></div></div>`;
}
function renderizarHistorial() {
  const registros = listaHistorialEntrenos();
  if (!registros.length) { historyListEl.innerHTML = `<div class="progress-empty">Todavía no has marcado ningún entreno como hecho.</div>`; return; }
  historyListEl.innerHTML = registros.map((r) => {
    const conPeso = (ej) => ej.pesos.some((p) => p != null);
    const ejercicios = r.ejercicios.filter(conPeso);
    const abdominales = r.abdominales.filter(conPeso);
    return `<div class="day-card"><div class="day-head"><div><div class="dia-full">${r.fecha} · ${r.dia}</div><div class="sesion-nombre">${r.nombreSesion}</div></div>${r.kcal != null ? `<div class="kcal-box"><div class="num">~${r.kcal}</div><div class="lbl">kcal</div></div>` : ""}</div>${ejercicios.map(filaHistorialEjercicioHTML).join("")}${abdominales.length ? `<div class="abs-label">Abdominales</div>${abdominales.map(filaHistorialEjercicioHTML).join("")}` : ""}</div>`;
  }).join("");
}
function abrirHistorial() { renderizarHistorial(); mainViewEl.style.display = "none"; historyViewEl.style.display = "block"; window.scrollTo(0, 0); }
function cerrarHistorial() { historyViewEl.style.display = "none"; mainViewEl.style.display = "block"; window.scrollTo(0, 0); }
historyLinkBtnEl.addEventListener("click", abrirHistorial);
historyBackBtnEl.addEventListener("click", cerrarHistorial);

// ---- Gráfica de progreso ----
function colorVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function dibujarGraficaSiVisible() {
  if (progressViewEl.style.display === "none") return;
  const slug = progressSelectEl.value;
  if (!slug) return;
  const porFecha = {};
  for (let n = 0; n < 6; n++) getHistorialSet(slug, n).forEach((e) => { if (!porFecha[e.date] || e.weight > porFecha[e.date]) porFecha[e.date] = e.weight; });
  dibujarGrafica(progressCanvasEl, Object.entries(porFecha).map(([date, weight]) => ({ date, weight })).sort((a, b) => (a.date > b.date ? 1 : -1)));
}
function dibujarGrafica(canvas, datos) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const muted = colorVar("--muted2") || "#7d786f";
  const border = colorVar("--rowborder") || "#322F2C";
  const accent = colorVar("--accent") || "#E8B93A";
  const text = colorVar("--text") || "#EDEAE3";
  if (!datos || !datos.length) { ctx.fillStyle = muted; ctx.font = "14px Barlow, sans-serif"; ctx.textAlign = "center"; ctx.fillText("Todavía no hay datos para este ejercicio.", w / 2, h / 2); return; }
  const pad = { left: 44, right: 16, top: 16, bottom: 28 };
  const pesos = datos.map((d) => d.weight);
  let min = Math.min(...pesos), max = Math.max(...pesos);
  if (min === max) { min -= 5; max += 5; }
  const margen = (max - min) * 0.15; min -= margen; max += margen;
  const plotW = w - pad.left - pad.right, plotH = h - pad.top - pad.bottom;
  const x = (i) => pad.left + (datos.length === 1 ? plotW / 2 : (i / (datos.length - 1)) * plotW);
  const y = (val) => pad.top + plotH - ((val - min) / (max - min)) * plotH;
  ctx.strokeStyle = border; ctx.lineWidth = 1;
  for (let i = 0; i <= 3; i++) {
    const yy = pad.top + (plotH / 3) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, yy); ctx.lineTo(w - pad.right, yy); ctx.stroke();
    ctx.fillStyle = muted; ctx.font = "10px Barlow, sans-serif"; ctx.textAlign = "right";
    ctx.fillText(Math.round(max - ((max - min) / 3) * i) + "kg", pad.left - 6, yy + 3);
  }
  ctx.strokeStyle = accent; ctx.lineWidth = 2.5; ctx.beginPath();
  datos.forEach((d, i) => { const px = x(i), py = y(d.weight); if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); });
  ctx.stroke();
  ctx.font = "10px Barlow, sans-serif"; ctx.fillStyle = muted; ctx.textAlign = "center";
  const paso = Math.max(1, Math.ceil(datos.length / 5));
  datos.forEach((d, i) => {
    const px = x(i), py = y(d.weight);
    ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2); ctx.fill();
    if (i % paso === 0 || i === datos.length - 1) { ctx.fillStyle = muted; ctx.fillText(d.date.slice(5), px, h - pad.bottom + 16); }
  });
  const ultimo = datos[datos.length - 1];
  ctx.fillStyle = text; ctx.font = "bold 13px Oswald, sans-serif"; ctx.textAlign = "right";
  ctx.fillText(`${ultimo.weight} kg`, w - pad.right, pad.top + 4);
}

// ---- Helpers de render ----
function formatUltimaVez(slug, nSeries) {
  const datos = [];
  let maxDate = null, algunaEncontrada = false;
  for (let s = 0; s < nSeries; s++) {
    const d = ultimaEntradaAntesDeEstaSemana(slug, s);
    datos.push(d ? d.weight : null);
    if (d) { algunaEncontrada = true; if (!maxDate || d.date > maxDate) maxDate = d.date; }
  }
  if (algunaEncontrada) return ` · última vez: ${datos.map((d) => (d === null ? "–" : d)).join("/")} kg (${maxDate})`;
  const ref = buscarReferenciaGrupo(slug);
  if (ref) return ` · ref. grupo: ${ref.weight} kg (${SLUG_A_NOMBRE[ref.slug] || ref.slug}, ${ref.date})`;
  return "";
}
function opcionesEdicion(poolGrupo, nombreActual) {
  return (poolGrupo === "abs" ? ABDOMINALES : POOLS[poolGrupo]).filter((e) => e.n !== nombreActual);
}
function filaEjercicioHTML(ej, posIndex, mostrarNumero, dayIndex, tipo, poolGrupo, fechaDia) {
  const slug = slugify(ej.nombre);
  const nSeries = ej.series;
  const numLabel = mostrarNumero ? (posIndex + 1) + ". " : "";
  const setsHtml = Array.from({ length: nSeries }).map((_, s) => {
    const ant = ultimaEntradaAntesDeEstaSemana(slug, s);
    const pesoAct = pesoSemana(slug, s);
    const deEstaSemana = pesoAct !== null ? pesoAct : (entradaEnFecha(slug, s, fechaDia) || {}).weight;
    return `<div class="set-box"><span class="set-lbl">S${s + 1}</span><input type="number" inputmode="decimal" data-slug="${slug}" data-set="${s}" data-fecha="${fechaDia}" value="${deEstaSemana !== undefined && deEstaSemana !== null ? deEstaSemana : ""}" placeholder="${ant ? ant.weight : "kg"}" /></div>`;
  }).join("");
  const sugerencia = sugerenciaProgresion(slug, 0);
  const opciones = opcionesEdicion(poolGrupo, ej.nombre);
  const selectId = `edit-${dayIndex}-${tipo}-${posIndex}`;
  return `<div class="row" data-exslug="${slug}" data-exseries="${nSeries}"><div class="info"><div>${numLabel}${ej.nombre}${ej.maquina ? '<span class="machine-tag">MÁQUINA</span>' : ''}<button class="edit-btn" data-toggle-edit="${selectId}">✎</button></div><div class="sub" data-sub="${slug}">${ej.series}x${ej.reps}${formatUltimaVez(slug, nSeries)}</div>${sugerencia ? `<div class="suggestion">${sugerencia}</div>` : ""}</div><div class="sets-row">${setsHtml}</div><div class="edit-select-row" id="${selectId}"><select data-day-index="${dayIndex}" data-tipo="${tipo}" data-pos-index="${posIndex}"><option value="">Elegir otro ejercicio...</option>${opciones.map((o) => `<option value="${o.n.replace(/"/g, "&quot;")}">${o.n}${o.m ? " (máquina)" : ""}</option>`).join("")}</select></div></div>`;
}

// ---- Render principal ----
function render() {
  if (!plan) return;
  guardarPlanMensual();
  loadCodeSectionEl.style.display = "none";
  actualizarRachaBadge();
  progressLinkBtnEl.style.display = hayDatosDeProgreso() ? "block" : "none";
  historyLinkBtnEl.style.display = listaHistorialEntrenos().length > 0 ? "block" : "none";
  undoBoxEl.style.display = ultimoSnapshot ? "flex" : "none";
  if (configResumenEl.style.display !== "none") colapsarConfig();

  const pesoKg = pesoUsuarioActual || parseFloat(pesoUsuarioEl.value) || 75;
  if (calcularCalorias) {
    const total = plan.reduce((acc, { sesion }) => acc + kcalSesion(sesion, pesoKg), 0);
    totalWeekEl.style.display = "flex"; totalWeekValEl.textContent = `~${total} kcal`;
  } else totalWeekEl.style.display = "none";
  footnoteEl.style.display = "block";

  if (codigoActual != null) {
    codeBoxEl.style.display = "block";
    if (codigoDesactualizado) {
      codeBoxEl.classList.add("stale");
      codeBoxEl.querySelector(".code-value").textContent = "— — — — — —";
      codeBoxEl.querySelector(".code-note").textContent = "Has cambiado ejercicios, el código ya no coincide. Descarta los cambios para recuperarlo.";
      resetCodeBtnEl.style.display = "block";
    } else {
      codeBoxEl.classList.remove("stale");
      codeBoxEl.querySelector(".code-value").textContent = String(codigoActual).padStart(6, "0");
      codeBoxEl.querySelector(".code-note").textContent = "Este código genera el mismo plan de entrenamientos para todo el mes. Compártelo con tu compañero/a.";
      resetCodeBtnEl.style.display = "none";
    }
  }

  const semanaId = calcularSemanaId(new Date());
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);

  planEl.innerHTML = plan.map(({ label, sesion }, index) => {
    const hecho = estaHecho(semanaId, index);
    const fechaDia = fechaParaSesion(index);
    const fechaDiaStr = formatFechaLocal(fechaDia);
    const esPasado = fechaDia < hoy;
    const mostrarAviso = esPasado && !hecho;
    const esDescanso = sesion.grupo === "descanso";
    return `<div class="day-card" data-day-index="${index}"><div class="day-head"><div><div class="dia-full">${label}</div><div class="sesion-nombre">${sesion.nombre}</div></div><div style="display:flex;align-items:center;gap:10px;">${calcularCalorias ? `<div class="kcal-box"><div class="num">~${kcalSesion(sesion, pesoKg)}</div><div class="lbl">kcal</div></div>` : ""}<button class="hecho-btn${hecho ? " done" : ""}" data-hecho="${index}">${hecho ? "✓ Hecho esta semana" : "Marcar hecho"}</button>${esDescanso ? "" : `<button class="regen-btn" data-regen="${index}">↻ Variar</button>`}</div></div>${mostrarAviso ? `<div class="warning-badge">⚠ No marcaste este día como hecho</div>` : ""}<div class="row warmup"><span>🏃 ${sesion.calentamiento.nombre}</span><span class="detalle">${sesion.calentamiento.detalle}</span></div>${esDescanso ? `<div class="row" style="color:var(--muted);font-style:italic;">Día de descanso activo: solo la cinta, sin ejercicios de fuerza. Deja que el cuerpo recupere.</div>` : `${sesion.ejercicios.map((ej, i) => filaEjercicioHTML(ej, i, true, index, "principal", sesion.grupo, fechaDiaStr)).join("")}<div class="abs-label">Abdominales</div>${sesion.abdominales.map((ej, i) => filaEjercicioHTML(ej, i, false, index, "abs", "abs", fechaDiaStr)).join("")}`}</div>`;
  }).join("");

  // Guardar peso al salir del campo
  planEl.querySelectorAll("input[data-slug]").forEach((input) => {
    input.addEventListener("blur", () => {
      const val = parseFloat(input.value);
      if (!isNaN(val) && val >= 0) {
        guardarEnHistorialSet(input.dataset.slug, parseInt(input.dataset.set, 10), val, input.dataset.fecha);
        guardarPesoSemana(input.dataset.slug, parseInt(input.dataset.set, 10), val);
        input.classList.add("saved");
        setTimeout(() => input.classList.remove("saved"), 1200);
        const row = input.closest(".row");
        const sub = row && row.querySelector(`[data-sub="${input.dataset.slug}"]`);
        if (sub) { const nSeries = parseInt(row.dataset.exseries, 10); sub.textContent = sub.textContent.split(" · última vez")[0].split(" · ref. grupo")[0] + formatUltimaVez(input.dataset.slug, nSeries); }
        progressLinkBtnEl.style.display = "block";
      }
    });
  });

  // Variar sesión
  planEl.querySelectorAll("[data-regen]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.regen, 10);
      guardarSnapshot();
      const usadosOtrosDias = new Set();
      plan.forEach((p, i) => {
        if (i === idx) return;
        p.sesion.ejercicios.forEach((e) => { usadosOtrosDias.add(e.nombre); if (NOMBRE_A_FAM[e.nombre]) usadosOtrosDias.add(`fam:${NOMBRE_A_FAM[e.nombre]}`); });
        p.sesion.abdominales.forEach((e) => { usadosOtrosDias.add(e.nombre); if (NOMBRE_A_FAM[e.nombre]) usadosOtrosDias.add(`fam:${NOMBRE_A_FAM[e.nombre]}`); });
      });
      plan[idx].sesion = generarSesion(plan[idx].sesion.nombre, Math.random, PRIORIDAD_PESOS[prioridad], usadosOtrosDias);
      codigoDesactualizado = true;
      guardarPlanMensual();
      render();
    });
  });

  // Marcar/desmarcar hecho — solo afecta a la semana actual
  planEl.querySelectorAll("[data-hecho]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.hecho, 10);
      if (estaHecho(semanaId, idx)) {
        desmarcarHecho(semanaId, idx);
        borrarEntrenoDelHistorial(semanaId, idx);
      } else {
        marcarHecho(semanaId, idx);
        const fechaDiaStr = formatFechaLocal(fechaParaSesion(idx));
        guardarEntrenoEnHistorial(semanaId, idx, plan[idx].label, plan[idx].sesion, pesoKg, fechaDiaStr);
      }
      render();
    });
  });

  // Toggle editor de ejercicio
  planEl.querySelectorAll("[data-toggle-edit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.toggleEdit);
      if (target) target.classList.toggle("open");
    });
  });

  // Cambio manual de ejercicio
  planEl.querySelectorAll(".edit-select-row select").forEach((select) => {
    select.addEventListener("change", () => {
      const nuevoNombre = select.value;
      if (!nuevoNombre) return;
      const dayIndex = parseInt(select.dataset.dayIndex, 10);
      const tipo = select.dataset.tipo;
      const posIndex = parseInt(select.dataset.posIndex, 10);
      const poolGrupo = tipo === "abs" ? "abs" : plan[dayIndex].sesion.grupo;
      const fuente = poolGrupo === "abs" ? ABDOMINALES : POOLS[poolGrupo];
      const elegido = fuente.find((e) => e.n === nuevoNombre);
      if (!elegido) return;
      guardarSnapshot();
      if (tipo === "abs") {
        const actual = plan[dayIndex].sesion.abdominales[posIndex];
        plan[dayIndex].sesion.abdominales[posIndex] = { nombre: elegido.n, maquina: elegido.m, series: 3, reps: elegido.n.includes("Plancha") || elegido.n.includes("Hollow") ? "30-45 seg" : actual.reps };
      } else {
        plan[dayIndex].sesion.ejercicios[posIndex] = { nombre: elegido.n, maquina: elegido.m, c: elegido.c, ...repsFor(elegido.n, Math.random) };
      }
      codigoDesactualizado = true;
      guardarPlanMensual();
      render();
    });
  });
}

// ---- Inicializar al abrir la app ----
(function inicializarApp() {
  const nd = parseInt(localStorage.getItem("config:numDias") || "0", 10);
  const pr = localStorage.getItem("config:prioridad") || "maquina";
  if (nd >= 1 && nd <= 7) {
    numDias = nd;
    prioridad = pr;
    actualizarChipsUI();
    const guardado = cargarPlanMensual(numDias, prioridad);
    if (guardado && guardado.plan) {
      plan = guardado.plan;
      codigoActual = guardado.codigoActual;
      codigoDesactualizado = !!guardado.codigoDesactualizado;
      genBtn.textContent = "Cambiar configuración";
      colapsarConfig();
      render();
    }
  }
})();

// Guardar config al generar
genBtn.addEventListener("click", () => {
  if (numDias > 0) {
    localStorage.setItem("config:numDias", numDias);
    localStorage.setItem("config:prioridad", prioridad);
  }
}, true);
