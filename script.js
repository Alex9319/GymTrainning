const DIAS = [
  { id: "lun", label: "Lun", full: "Lunes" },
  { id: "mar", label: "Mar", full: "Martes" },
  { id: "mie", label: "Mié", full: "Miércoles" },
  { id: "jue", label: "Jue", full: "Jueves" },
  { id: "vie", label: "Vie", full: "Viernes" },
  { id: "sab", label: "Sáb", full: "Sábado" },
  { id: "dom", label: "Dom", full: "Domingo" },
];

const SPLITS = {
  1: ["Full Body"],
  2: ["Full Body A", "Full Body B"],
  3: ["Empuje (Pecho/Hombro/Tríceps)", "Tracción (Espalda/Bíceps)", "Pierna"],
  4: ["Tren superior A", "Tren inferior A", "Tren superior B", "Tren inferior B"],
  5: ["Empuje", "Tracción", "Pierna", "Tren superior", "Tren inferior"],
  6: ["Empuje", "Tracción", "Pierna", "Empuje", "Tracción", "Pierna"],
  7: ["Empuje", "Tracción", "Pierna", "Empuje", "Tracción", "Pierna", "Full Body"],
};

const GRUPO_POR_SESION = {
  "Full Body": "full", "Full Body A": "full", "Full Body B": "full",
  "Empuje (Pecho/Hombro/Tríceps)": "empuje", "Empuje": "empuje",
  "Tracción (Espalda/Bíceps)": "traccion", "Tracción": "traccion",
  "Pierna": "pierna",
  "Tren superior A": "superior", "Tren superior B": "superior", "Tren superior": "superior",
  "Tren inferior A": "pierna", "Tren inferior B": "pierna", "Tren inferior": "pierna",
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
    { n: "Press de pecho en máquina", m: true, c: true, fam: "press_pecho_plano" },
    { n: "Press de hombro en máquina", m: true, c: true, fam: "press_hombro" },
    { n: "Jalón al pecho en polea", m: true, c: true },
    { n: "Remo en polea baja (sentado)", m: true, c: true, fam: "remo_horizontal" },
    { n: "Fondos asistidos en máquina", m: true, c: true, fam: "fondos" },
    { n: "Dominadas asistidas en máquina", m: true, c: true, fam: "dominadas" },
    { n: "Curl de bíceps en máquina", m: true, c: false, fam: "curl_biceps" },
    { n: "Extensión de tríceps en polea", m: true, c: false },
    { n: "Elevaciones laterales en polea", m: true, c: false, fam: "elevacion_lateral" },
    { n: "Face pull en polea", m: true, c: false },
    { n: "Press banca con barra", m: false, c: true, fam: "press_pecho_plano" },
    { n: "Dominadas pronas", m: false, c: true, fam: "dominadas" },
    { n: "Press militar de pie", m: false, c: true, fam: "press_hombro" },
    { n: "Remo con barra", m: false, c: true, fam: "remo_horizontal" },
    { n: "Fondos en paralelas", m: false, c: true, fam: "fondos" },
    { n: "Curl de bíceps con barra", m: false, c: false, fam: "curl_biceps" },
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

const NOMBRE_A_FAM = {};
Object.values(POOLS).forEach((pool) => pool.forEach((e) => { if (e.fam) NOMBRE_A_FAM[e.n] = e.fam; }));

const PRIORIDAD_PESOS = {
  maquina: { m: 3, l: 1 },
  equilibrado: { m: 1, l: 1 },
  libre: { m: 1, l: 3 },
};
const PRIORIDAD_ORDEN = ["maquina", "equilibrado", "libre"];

// Mapa slug -> nombre "bonito" y slug -> conjunto de grupos musculares a los que pertenece.
// Se usa para: listar ejercicios editables, sugerir referencias de peso de otro ejercicio
// del mismo grupo, y poblar el selector de la vista de progreso.
const SLUG_A_NOMBRE = {};
const SLUG_A_GRUPOS = {};
function registrarEjercicio(nombre, grupo) {
  const slug = slugify(nombre);
  SLUG_A_NOMBRE[slug] = nombre;
  if (!SLUG_A_GRUPOS[slug]) SLUG_A_GRUPOS[slug] = new Set();
  SLUG_A_GRUPOS[slug].add(grupo);
}
function construirMapasEjercicios() {
  // Usamos el subgrupo muscular concreto (pecho, hombro, tríceps, espalda, bíceps,
  // cuádriceps, isquios, glúteo, aductor, abductor, gemelo) en vez del banco de sesión
  // (empuje/tracción/pierna), para no sugerir el peso de un press banca como referencia
  // de una extensión de tríceps solo por estar en la misma sesión de "empuje".
  ["empuje", "traccion", "pierna"].forEach((grupo) => POOLS[grupo].forEach((e) => registrarEjercicio(e.n, e.sg)));
  ABDOMINALES.forEach((e) => registrarEjercicio(e.n, "abs"));
}

function pickPriorizandoMaquinas(pool, n, rng, pesos, excluir) {
  excluir = excluir || new Set();
  const porNombre = (e) => excluir.has(e.n);
  const porFamilia = (e) => e.fam && excluir.has(`fam:${e.fam}`);
  // Candidatos "frescos" de una lista (grupo muscular o pool sin grupo), con el mismo
  // criterio de siempre pero aplicado POR GRUPO: si ese subgrupo en concreto se queda sin
  // ningún ejercicio nuevo (p. ej. trapecio, que solo tiene 1), se permite repetir dentro
  // de ese subgrupo antes que dejarlo vacío y desequilibrar la sesión con otro más grande.
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
    for (; idx < weights.length; idx++) {
      r -= weights[idx];
      if (r <= 0) break;
    }
    return lista.splice(Math.min(idx, lista.length - 1), 1)[0];
  }
  function quitarFamiliaDe(lista, fam) {
    if (!fam) return;
    for (let j = lista.length - 1; j >= 0; j--) {
      if (lista[j].fam === fam) lista.splice(j, 1);
    }
  }

  const out = [];
  // Repartir por subgrupo muscular (sg) en rondas, en vez de coger al azar de todo el
  // pool: así una sesión de pierna no cae siempre en cuádriceps y se olvida del gemelo,
  // ni una de empuje se llena de pecho dejando el hombro sin ningún ejercicio.
  const gruposCompletos = {};
  const sinGrupoCompleto = [];
  pool.forEach((e) => (e.sg ? (gruposCompletos[e.sg] = gruposCompletos[e.sg] || []).push(e) : sinGrupoCompleto.push(e)));
  const grupos = {};
  Object.keys(gruposCompletos).forEach((g) => { grupos[g] = candidatosDe(gruposCompletos[g], 1); });
  const sinGrupo = candidatosDe(sinGrupoCompleto, n);
  let nombresGrupos = Object.keys(grupos);
  // Orden aleatorio de subgrupos para no favorecer siempre al mismo en la ronda extra.
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
  // Ejercicios sin subgrupo definido (pools combinados como "full"/"superior"): al azar.
  while (out.length < n && sinGrupo.length > 0) {
    const elegido = elegirDe(sinGrupo);
    out.push(elegido);
    quitarFamiliaDe(sinGrupo, elegido.fam);
  }
  // Red de seguridad: si aun así faltan huecos (pool pequeño + varias familias chocando),
  // se completa desde todo el pool sin restricción de familia/semana, evitando solo el
  // ejercicio exacto ya elegido. Mejor repetir una familia que dejar la sesión coja.
  if (out.length < n) {
    const nombresYaElegidos = new Set(out.map((e) => e.n));
    const relleno = pool.filter((e) => !nombresYaElegidos.has(e.n)).map((e) => ({ ...e }));
    while (out.length < n && relleno.length > 0) {
      out.push(elegirDe(relleno));
    }
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
  const pool = POOLS[grupo];
  const nEjercicios = grupo === "full" ? 6 : 7;
  const elegidos = pickPriorizandoMaquinas(pool, nEjercicios, rng, pesos, usadosSemana);
  const abs = pickPriorizandoMaquinas(ABDOMINALES, 3, rng, pesos, usadosSemana);
  elegidos.forEach((e) => { usadosSemana.add(e.n); if (e.fam) usadosSemana.add(`fam:${e.fam}`); });
  abs.forEach((e) => { usadosSemana.add(e.n); if (e.fam) usadosSemana.add(`fam:${e.fam}`); });
  return {
    nombre: nombreSesion,
    grupo: grupo,
    calentamiento: { nombre: "Cinta / cardio suave", detalle: "10 min, ritmo cómodo para elevar pulsaciones" },
    ejercicios: elegidos.map((ej) => ({ nombre: ej.n, maquina: ej.m, c: ej.c, ...repsFor(ej.n, rng) })),
    abdominales: abs.map((ej) => ({
      nombre: ej.n, maquina: ej.m, series: 3,
      reps: ej.n.includes("Plancha") || ej.n.includes("Hollow") ? "30-45 seg" : "12-15",
    })),
  };
}

function calcularBitmask(seleccion) {
  let mask = 0;
  DIAS.forEach((d, i) => { if (seleccion.includes(d.id)) mask |= (1 << i); });
  return mask;
}
function decodificarBitmask(mask) {
  return DIAS.filter((d, i) => mask & (1 << i)).map((d) => d.id);
}
function calcularSemanaId(fecha) {
  const d = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const inicioAno = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const semana = Math.ceil((((d - inicioAno) / 86400000) + 1) / 7);
  return d.getUTCFullYear() * 100 + semana;
}
function generarCodigo(seleccion, prioridad) {
  const bitmask = calcularBitmask(seleccion);
  const pIdx = PRIORIDAD_ORDEN.indexOf(prioridad);
  const meta = (bitmask - 1) * 3 + pIdx;
  const seedPart = calcularSemanaId(new Date()) % 2600;
  return meta * 2600 + seedPart;
}
function construirPlanDesdeCodigo(codigo) {
  const meta = Math.floor(codigo / 2600);
  const bitmask = Math.floor(meta / 3) + 1;
  const pIdx = meta % 3;
  const prioridad = PRIORIDAD_ORDEN[pIdx];
  if (bitmask < 1 || bitmask > 127) return null;
  const diasIds = decodificarBitmask(bitmask);
  if (diasIds.length === 0) return null;
  const orden = DIAS.filter((d) => diasIds.includes(d.id));
  const splits = SPLITS[Math.min(orden.length, 7)];
  const rng = crearRng(codigo);
  const pesos = PRIORIDAD_PESOS[prioridad];
  const usadosSemana = new Set();
  return {
    plan: orden.map((dia, i) => ({ dia, sesion: generarSesion(splits[i % splits.length], rng, pesos, usadosSemana) })),
    diasIds,
    prioridad,
  };
}

// ---- Historial de pesos por serie (array, no un único valor) ----
// Clave: "serie:<slug>:s<N>" -> [{date, weight}, ...] ordenado por fecha ascendente.
function getHistorialSet(slug, n) {
  try {
    const raw = localStorage.getItem(`serie:${slug}:s${n}`);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function guardarEnHistorialSet(slug, n, weight, fecha) {
  const arr = getHistorialSet(slug, n);
  const dia = fecha || new Date().toISOString().slice(0, 10);
  const idx = arr.findIndex((e) => e.date === dia);
  if (idx >= 0) arr[idx].weight = weight;
  else arr.push({ date: dia, weight });
  arr.sort((a, b) => (a.date > b.date ? 1 : -1));
  const recortado = arr.slice(-12);
  localStorage.setItem(`serie:${slug}:s${n}`, JSON.stringify(recortado));
  return recortado;
}
function entradaEnFecha(slug, n, fecha) {
  const arr = getHistorialSet(slug, n);
  return arr.find((e) => e.date === fecha) || null;
}
function ultimaEntrada(slug, n) {
  const arr = getHistorialSet(slug, n);
  return arr.length ? arr[arr.length - 1] : null;
}
// Última entrada anterior a esta semana: para que "última vez" sea siempre una
// referencia de una semana pasada y no lo que acabas de escribir ahora mismo.
function inicioSemanaActualStr() {
  return formatFechaLocal(fechaParaIndiceSemana(0));
}
function ultimaEntradaAntesDeEstaSemana(slug, n) {
  const arr = getHistorialSet(slug, n);
  const limite = inicioSemanaActualStr();
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].date < limite) return arr[i];
  }
  return null;
}

// ---- Pesos de la semana activa, aislados por código ----
// No se mezclan entre semanas/códigos distintos, aunque coincida el ejercicio.
// Clave: "semana:<codigo>" -> { "<slug>:s<N>": weight, ... }
function getPesosSemana(codigo) {
  if (codigo == null) return {};
  try {
    const raw = localStorage.getItem(`semana:${codigo}`);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}
function pesoSemana(codigo, slug, n) {
  const datos = getPesosSemana(codigo);
  const v = datos[`${slug}:s${n}`];
  return v === undefined ? null : v;
}
function guardarPesoSemana(codigo, slug, n, weight) {
  if (codigo == null) return;
  const datos = getPesosSemana(codigo);
  datos[`${slug}:s${n}`] = weight;
  localStorage.setItem(`semana:${codigo}`, JSON.stringify(datos));
}

// Referencia de otro ejercicio del mismo grupo muscular cuando el actual no tiene historial propio.
function buscarReferenciaGrupo(slugActual) {
  const gruposActual = SLUG_A_GRUPOS[slugActual];
  if (!gruposActual) return null;
  let mejor = null;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith("serie:")) continue;
    const partes = k.slice("serie:".length).split(":s");
    const slugOtro = partes[0];
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

// Sugerencia de progresión: si las 2 últimas veces se usó el mismo peso, sugiere subir un poco.
function sugerenciaProgresion(slug, n) {
  const arr = getHistorialSet(slug, n);
  if (arr.length < 2) return null;
  const ultimas = arr.slice(-2);
  if (ultimas[0].weight === ultimas[1].weight) {
    const siguiente = Math.round((ultimas[1].weight + 2.5) * 2) / 2;
    return `💡 llevas igual 2 veces, prueba ${siguiente} kg`;
  }
  return null;
}

// ---- Peso corporal del usuario ----
function getPesoUsuarioGuardado() {
  try {
    const raw = localStorage.getItem("perfil:peso");
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}
function guardarPesoUsuario(valor) {
  localStorage.setItem("perfil:peso", JSON.stringify(valor));
}

// ---- Marcar entrenamiento hecho + racha de semanas ----
function marcarHecho(semanaId, indice) {
  localStorage.setItem(`hecho:${semanaId}:${indice}`, "1");
}
function desmarcarHecho(semanaId, indice) {
  localStorage.removeItem(`hecho:${semanaId}:${indice}`);
}
function estaHecho(semanaId, indice) {
  return localStorage.getItem(`hecho:${semanaId}:${indice}`) === "1";
}
function calcularRachaSemanas() {
  const semanas = new Set();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("hecho:")) {
      const semanaId = parseInt(k.split(":")[1], 10);
      if (!isNaN(semanaId)) semanas.add(semanaId);
    }
  }
  if (semanas.size === 0) return 0;
  const actual = calcularSemanaId(new Date());
  let racha = 0;
  let esperado = actual;
  const ordenadas = [...semanas].sort((a, b) => b - a);
  for (const s of ordenadas) {
    if (s === esperado) { racha++; esperado--; }
    else if (s > esperado) { continue; }
    else break;
  }
  return racha;
}
// Fecha real (dentro de la semana en curso) que le corresponde a una posición Lun..Dom.
function fechaParaIndiceSemana(diaIndex) {
  const hoy = new Date();
  const diaSemanaHoy = (hoy.getDay() + 6) % 7;
  const lunes = new Date(hoy);
  lunes.setHours(0, 0, 0, 0);
  lunes.setDate(hoy.getDate() - diaSemanaHoy);
  const fecha = new Date(lunes);
  fecha.setDate(lunes.getDate() + diaIndex);
  return fecha;
}
// Formatea una fecha en YYYY-MM-DD usando componentes locales (evita el desfase
// de un día que da toISOString() al convertir a UTC).
function formatFechaLocal(fecha) {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// ---- Tema claro/oscuro ----
function getTemaGuardado() {
  return localStorage.getItem("tema");
}
function guardarTema(valor) {
  localStorage.setItem("tema", valor);
}

// ---- Plan activo (persistencia de la semana en curso, incluidos cambios manuales) ----
// Se guarda cada vez que el plan cambia, así que si recargas la página o cierras la app,
// al volver encuentras exactamente el mismo entrenamiento con tus ediciones intactas.
function guardarPlanActivo() {
  const semanaId = calcularSemanaId(new Date());
  const datos = { seleccionados, prioridad, plan, codigoActual, codigoDesactualizado };
  try { localStorage.setItem(`planActivo:${semanaId}`, JSON.stringify(datos)); } catch (e) {}
}
function cargarPlanActivo() {
  const semanaId = calcularSemanaId(new Date());
  try {
    const raw = localStorage.getItem(`planActivo:${semanaId}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}
function mismaSeleccion(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  const sa = [...a].sort(), sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

// ---- Historial de entrenos hechos (guardado aparte, con snapshot completo de cada sesión) ----
function snapshotSesion(sesion, pesoKg, fecha) {
  const leerPesos = (ej) => {
    const slug = slugify(ej.nombre);
    const pesos = [];
    for (let s = 0; s < ej.series; s++) {
      const arr = getHistorialSet(slug, s);
      const entradaDia = arr.find((e) => e.date === fecha);
      pesos.push(entradaDia ? entradaDia.weight : null);
    }
    return pesos;
  };
  // Solo se guardan en el historial los ejercicios en los que se anotó al menos un peso ese día;
  // si no anotaste nada, no tiene sentido dejar constancia de que "hiciste" ese ejercicio.
  const conAlgunPeso = (ej) => ej.pesos.some((p) => p !== null);
  return {
    nombreSesion: sesion.nombre,
    kcal: calcularCalorias ? kcalSesion(sesion, pesoKg) : null,
    ejercicios: sesion.ejercicios.map((ej) => ({ nombre: ej.nombre, series: ej.series, reps: ej.reps, pesos: leerPesos(ej) })).filter(conAlgunPeso),
    abdominales: sesion.abdominales.map((ej) => ({ nombre: ej.nombre, series: ej.series, reps: ej.reps, pesos: leerPesos(ej) })).filter(conAlgunPeso),
  };
}
function guardarEntrenoEnHistorial(semanaId, dayIndex, diaFull, sesion, pesoKg, fecha) {
  const clave = `historialEntrenos:${semanaId}:${dayIndex}`;
  const registro = { fecha, dia: diaFull, semanaId, ...snapshotSesion(sesion, pesoKg, fecha) };
  try { localStorage.setItem(clave, JSON.stringify(registro)); } catch (e) {}
}
function borrarEntrenoDelHistorial(semanaId, dayIndex) {
  localStorage.removeItem(`historialEntrenos:${semanaId}:${dayIndex}`);
}
function listaHistorialEntrenos() {
  const registros = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("historialEntrenos:")) {
      try {
        const r = JSON.parse(localStorage.getItem(k));
        if (r) registros.push(r);
      } catch (e) {}
    }
  }
  return registros.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

construirMapasEjercicios();

// ---- Estado ----
let seleccionados = [];
let prioridad = "maquina";
let plan = null;
let codigoActual = null;
let codigoDesactualizado = false;
let ultimoSnapshot = null;

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

// ---- Tema ----
function aplicarTema(tema) {
  if (tema === "light") {
    document.documentElement.classList.add("light-theme");
    temaBtnEl.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("light-theme");
    temaBtnEl.textContent = "🌙";
  }
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
function mostrarPesoVista(valor) {
  pesoViewTextEl.textContent = `Peso guardado: ${valor} kg`;
  pesoViewEl.style.display = "flex";
  pesoEditEl.style.display = "none";
}
function mostrarPesoEdicion() {
  pesoUsuarioEl.value = pesoUsuarioActual || "";
  pesoViewEl.style.display = "none";
  pesoEditEl.style.display = "block";
  pesoUsuarioEl.focus();
}
function guardarYMostrarPeso(valor) {
  guardarPesoUsuario(valor);
  pesoUsuarioActual = valor;
  mostrarPesoVista(valor);
  pesoErrorEl.style.display = "none";
}
if (pesoUsuarioActual) mostrarPesoVista(pesoUsuarioActual);
else mostrarPesoEdicion();

pesoModificarLinkEl.addEventListener("click", (e) => { e.preventDefault(); mostrarPesoEdicion(); });
pesoUsuarioEl.addEventListener("change", () => {
  const val = parseFloat(pesoUsuarioEl.value);
  if (!isNaN(val) && val > 0) {
    guardarYMostrarPeso(val);
    if (plan) render();
  }
});

const calcularCalCheckEl = document.getElementById("calcularCalCheck");
const pesoSectionEl = document.getElementById("pesoSection");
const configOptionsEl = document.getElementById("configOptions");
const configResumenEl = document.getElementById("configResumen");
const configResumenCodeEl = document.getElementById("configResumenCode");
const configResumenDetalleEl = document.getElementById("configResumenDetalle");
const expandirConfigBtnEl = document.getElementById("expandirConfigBtn");

function colapsarConfig() {
  configOptionsEl.style.display = "none";
  configResumenEl.style.display = "flex";
  const nombresDias = DIAS.filter((d) => seleccionados.includes(d.id)).map((d) => d.label).join(", ");
  configResumenCodeEl.textContent = codigoDesactualizado
    ? "Código no disponible (has hecho cambios)"
    : `Código: ${String(codigoActual).padStart(6, "0")}`;
  configResumenDetalleEl.textContent = `${nombresDias} · ${PRIORIDAD_LABELS[prioridad]}`;
}
function expandirConfig() {
  configOptionsEl.style.display = "block";
  configResumenEl.style.display = "none";
}
expandirConfigBtnEl.addEventListener("click", expandirConfig);

let calcularCalorias = calcularCalCheckEl.checked;
calcularCalCheckEl.addEventListener("change", () => {
  calcularCalorias = calcularCalCheckEl.checked;
  pesoSectionEl.style.display = calcularCalorias ? "block" : "none";
  pesoErrorEl.style.display = "none";
  if (plan) render();
});

// ---- Chips de días y prioridad ----
DIAS.forEach((d) => {
  const btn = document.createElement("button");
  btn.className = "day-chip";
  btn.textContent = d.label;
  btn.dataset.dayId = d.id;
  btn.onclick = () => {
    const idx = seleccionados.indexOf(d.id);
    if (idx >= 0) seleccionados.splice(idx, 1);
    else seleccionados.push(d.id);
    btn.classList.toggle("active");
    genBtn.disabled = seleccionados.length === 0;
  };
  daysEl.appendChild(btn);
});

const PRIORIDAD_LABELS = { maquina: "Máquinas", equilibrado: "Equilibrado", libre: "Peso libre" };
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
  daysEl.querySelectorAll(".day-chip").forEach((btn) => {
    btn.classList.toggle("active", seleccionados.includes(btn.dataset.dayId));
  });
  prioEl.querySelectorAll(".day-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.prioId === prioridad);
  });
  genBtn.disabled = seleccionados.length === 0;
}

// Descarta las ediciones locales (✎ / "Variar") y vuelve al plan base de la semana,
// recuperando así un código de 6 dígitos que sí se puede compartir.
function regenerarPlanLimpio() {
  const orden = DIAS.filter((d) => seleccionados.includes(d.id));
  const codigo = generarCodigo(seleccionados, prioridad);
  const rng = crearRng(codigo);
  const splits = SPLITS[Math.min(orden.length, 7)];
  const pesos = PRIORIDAD_PESOS[prioridad];
  const usadosSemana = new Set();
  plan = orden.map((dia, i) => ({ dia, sesion: generarSesion(splits[i % splits.length], rng, pesos, usadosSemana) }));
  codigoActual = codigo;
  codigoDesactualizado = false;
  ultimoSnapshot = null;
  render();
}
resetCodeBtnEl.addEventListener("click", regenerarPlanLimpio);

genBtn.onclick = () => {
  if (seleccionados.length === 0) return;
  if (calcularCalorias) {
    const pesoVal = pesoUsuarioActual || parseFloat(pesoUsuarioEl.value);
    if (isNaN(pesoVal) || !pesoVal || pesoVal <= 0) {
      pesoErrorEl.style.display = "block";
      mostrarPesoEdicion();
      return;
    }
    guardarYMostrarPeso(pesoVal);
  }
  // Si ya existe un plan activo para esta semana con los mismos días y prioridad,
  // lo recuperamos tal cual (con tus ediciones manuales) en vez de regenerarlo desde cero.
  const activo = cargarPlanActivo();
  if (activo && mismaSeleccion(activo.seleccionados, seleccionados) && activo.prioridad === prioridad && activo.plan) {
    plan = activo.plan;
    codigoActual = activo.codigoActual;
    codigoDesactualizado = activo.codigoDesactualizado;
  } else {
    const orden = DIAS.filter((d) => seleccionados.includes(d.id));
    const codigo = generarCodigo(seleccionados, prioridad);
    const rng = crearRng(codigo);
    const splits = SPLITS[Math.min(orden.length, 7)];
    const pesos = PRIORIDAD_PESOS[prioridad];
    const usadosSemana = new Set();
    plan = orden.map((dia, i) => ({ dia, sesion: generarSesion(splits[i % splits.length], rng, pesos, usadosSemana) }));
    codigoActual = codigo;
    codigoDesactualizado = false;
  }
  ultimoSnapshot = null;
  genBtn.textContent = "Generar de nuevo";
  colapsarConfig();
  render();
};

loadCodeBtn.onclick = () => {
  codeErrorEl.style.display = "none";
  if (calcularCalorias) {
    const pesoVal = pesoUsuarioActual || parseFloat(pesoUsuarioEl.value);
    if (isNaN(pesoVal) || !pesoVal || pesoVal <= 0) {
      pesoErrorEl.style.display = "block";
      mostrarPesoEdicion();
      return;
    }
    guardarYMostrarPeso(pesoVal);
  }
  const val = parseInt(codeInputEl.value, 10);
  if (isNaN(val) || codeInputEl.value.trim().length === 0) {
    codeErrorEl.textContent = "Introduce un código de 6 dígitos.";
    codeErrorEl.style.display = "block";
    return;
  }
  const resultado = construirPlanDesdeCodigo(val);
  if (!resultado) {
    codeErrorEl.textContent = "Ese código no es válido.";
    codeErrorEl.style.display = "block";
    return;
  }
  seleccionados = resultado.diasIds;
  prioridad = resultado.prioridad;
  actualizarChipsUI();
  plan = resultado.plan;
  codigoActual = val;
  codigoDesactualizado = false;
  ultimoSnapshot = null;
  genBtn.textContent = "Generar de nuevo";
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
  } else {
    rachaBadgeEl.style.display = "none";
  }
}

// ---- Deshacer último cambio ----
function guardarSnapshot() {
  ultimoSnapshot = JSON.parse(JSON.stringify(plan));
}
undoBtnEl.addEventListener("click", () => {
  if (!ultimoSnapshot) return;
  plan = ultimoSnapshot;
  ultimoSnapshot = null;
  codigoDesactualizado = true;
  render();
});

// ---- Navegación a la vista de progreso ----
function hayDatosDeProgreso() {
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("serie:")) return true;
  }
  return false;
}
function listaEjerciciosConHistorial() {
  const slugs = new Set();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("serie:")) {
      const slug = k.slice("serie:".length).split(":s")[0];
      slugs.add(slug);
    }
  }
  return [...slugs]
    .map((slug) => ({ slug, nombre: SLUG_A_NOMBRE[slug] || slug }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
}
function abrirProgreso() {
  const lista = listaEjerciciosConHistorial();
  if (lista.length === 0) return;
  progressSelectEl.innerHTML = lista.map((e) => `<option value="${e.slug}">${e.nombre}</option>`).join("");
  mainViewEl.style.display = "none";
  progressViewEl.style.display = "block";
  window.scrollTo(0, 0);
  dibujarGraficaSiVisible();
}
function cerrarProgreso() {
  progressViewEl.style.display = "none";
  mainViewEl.style.display = "block";
  window.scrollTo(0, 0);
}
progressLinkBtnEl.addEventListener("click", abrirProgreso);
progressBackBtnEl.addEventListener("click", cerrarProgreso);
progressSelectEl.addEventListener("change", dibujarGraficaSiVisible);

function filaHistorialEjercicioHTML(ej) {
  const pesosTxt = ej.pesos.map((p) => (p === null || p === undefined ? "–" : p)).join("/");
  return `
    <div class="row">
      <div class="info">
        <div>${ej.nombre}</div>
        <div class="sub">${ej.series}x${ej.reps} · pesos: ${pesosTxt} kg</div>
      </div>
    </div>`;
}
function renderizarHistorial() {
  const registros = listaHistorialEntrenos();
  if (registros.length === 0) {
    historyListEl.innerHTML = `<div class="progress-empty">Todavía no has marcado ningún entreno como hecho.</div>`;
    return;
  }
  historyListEl.innerHTML = registros.map((r) => {
    const conPeso = (ej) => ej.pesos.some((p) => p !== null && p !== undefined);
    const ejercicios = r.ejercicios.filter(conPeso);
    const abdominales = r.abdominales.filter(conPeso);
    return `
    <div class="day-card">
      <div class="day-head">
        <div>
          <div class="dia-full">${r.fecha} · ${r.dia}</div>
          <div class="sesion-nombre">${r.nombreSesion}</div>
        </div>
        ${r.kcal != null ? `
        <div class="kcal-box">
          <div class="num">~${r.kcal}</div>
          <div class="lbl">kcal</div>
        </div>` : ''}
      </div>
      ${ejercicios.map(filaHistorialEjercicioHTML).join("")}
      ${abdominales.length > 0 ? `<div class="abs-label">Abdominales</div>${abdominales.map(filaHistorialEjercicioHTML).join("")}` : ''}
    </div>
  `;
  }).join("");
}
function abrirHistorial() {
  renderizarHistorial();
  mainViewEl.style.display = "none";
  historyViewEl.style.display = "block";
  window.scrollTo(0, 0);
}
function cerrarHistorial() {
  historyViewEl.style.display = "none";
  mainViewEl.style.display = "block";
  window.scrollTo(0, 0);
}
historyLinkBtnEl.addEventListener("click", abrirHistorial);
historyBackBtnEl.addEventListener("click", cerrarHistorial);

// ---- Dibujar la gráfica de progreso en canvas ----
function colorVar(nombre) {
  return getComputedStyle(document.documentElement).getPropertyValue(nombre).trim();
}
function dibujarGraficaSiVisible() {
  if (progressViewEl.style.display === "none") return;
  const slug = progressSelectEl.value;
  if (!slug) return;
  // Combina el histórico de todas las series guardadas de este ejercicio, usando por
  // fecha el peso más alto registrado entre sus series (la serie más exigente del día).
  const porFecha = {};
  for (let n = 0; n < 6; n++) {
    getHistorialSet(slug, n).forEach((e) => {
      if (!porFecha[e.date] || e.weight > porFecha[e.date]) porFecha[e.date] = e.weight;
    });
  }
  const datos = Object.entries(porFecha).map(([date, weight]) => ({ date, weight })).sort((a, b) => (a.date > b.date ? 1 : -1));
  dibujarGrafica(progressCanvasEl, datos);
}
function dibujarGrafica(canvas, datos) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const muted = colorVar("--muted2") || "#7d786f";
  const border = colorVar("--rowborder") || "#322F2C";
  const accent = colorVar("--accent") || "#E8B93A";
  const text = colorVar("--text") || "#EDEAE3";
  if (!datos || datos.length === 0) {
    ctx.fillStyle = muted;
    ctx.font = "14px Barlow, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Todavía no hay suficientes datos para este ejercicio.", w / 2, h / 2);
    return;
  }
  const pad = { left: 44, right: 16, top: 16, bottom: 28 };
  const pesos = datos.map((d) => d.weight);
  let min = Math.min(...pesos), max = Math.max(...pesos);
  if (min === max) { min -= 5; max += 5; }
  const margen = (max - min) * 0.15;
  min -= margen; max += margen;
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;
  const x = (i) => pad.left + (datos.length === 1 ? plotW / 2 : (i / (datos.length - 1)) * plotW);
  const y = (val) => pad.top + plotH - ((val - min) / (max - min)) * plotH;

  // líneas de referencia horizontales
  ctx.strokeStyle = border;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 3; i++) {
    const yy = pad.top + (plotH / 3) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, yy); ctx.lineTo(w - pad.right, yy); ctx.stroke();
    const valor = max - ((max - min) / 3) * i;
    ctx.fillStyle = muted;
    ctx.font = "10px Barlow, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(Math.round(valor) + "kg", pad.left - 6, yy + 3);
  }

  // línea de progreso
  ctx.strokeStyle = accent;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  datos.forEach((d, i) => { const px = x(i), py = y(d.weight); if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); });
  ctx.stroke();

  // puntos + fechas (solo primero, último y algunos intermedios si caben)
  ctx.font = "10px Barlow, sans-serif";
  ctx.fillStyle = muted;
  ctx.textAlign = "center";
  const pasoEtiqueta = Math.max(1, Math.ceil(datos.length / 5));
  datos.forEach((d, i) => {
    const px = x(i), py = y(d.weight);
    ctx.fillStyle = accent;
    ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2); ctx.fill();
    if (i % pasoEtiqueta === 0 || i === datos.length - 1) {
      ctx.fillStyle = muted;
      ctx.fillText(d.date.slice(5), px, h - pad.bottom + 16);
    }
  });

  // último valor destacado
  const ultimo = datos[datos.length - 1];
  ctx.fillStyle = text;
  ctx.font = "bold 13px Oswald, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(`${ultimo.weight} kg`, w - pad.right, pad.top + 4);
}

function formatUltimaVez(slug, nSeries) {
  const datos = [];
  let maxDate = null;
  let algunaEncontrada = false;
  for (let s = 0; s < nSeries; s++) {
    const d = ultimaEntradaAntesDeEstaSemana(slug, s);
    datos.push(d ? d.weight : null);
    if (d) { algunaEncontrada = true; if (!maxDate || d.date > maxDate) maxDate = d.date; }
  }
  if (algunaEncontrada) {
    const pesosTxt = datos.map((d) => (d === null ? "–" : d)).join("/");
    return ` · última vez: ${pesosTxt} kg (${maxDate})`;
  }
  const ref = buscarReferenciaGrupo(slug);
  if (ref) {
    return ` · ref. grupo: ${ref.weight} kg (${SLUG_A_NOMBRE[ref.slug] || ref.slug}, ${ref.date})`;
  }
  return "";
}

function opcionesEdicion(poolGrupo, nombreActual) {
  const fuente = poolGrupo === "abs" ? ABDOMINALES : POOLS[poolGrupo];
  return fuente.filter((e) => e.n !== nombreActual);
}

function filaEjercicioHTML(ej, posIndex, mostrarNumero, dayIndex, tipo, poolGrupo, fechaDia) {
  const slug = slugify(ej.nombre);
  const nSeries = ej.series;
  const numLabel = mostrarNumero ? (posIndex + 1) + ". " : "";
  const setsHtml = Array.from({ length: nSeries }).map((_, s) => {
    const ant = ultimaEntradaAntesDeEstaSemana(slug, s);
    const pesoDelCodigo = pesoSemana(codigoActual, slug, s);
    const deEstaSemana = pesoDelCodigo !== null ? pesoDelCodigo : (entradaEnFecha(slug, s, fechaDia) || {}).weight;
    return `
      <div class="set-box">
        <span class="set-lbl">S${s + 1}</span>
        <input type="number" inputmode="decimal" data-slug="${slug}" data-set="${s}" data-fecha="${fechaDia}"
          value="${deEstaSemana !== undefined && deEstaSemana !== null ? deEstaSemana : ''}"
          placeholder="${ant ? ant.weight : 'kg'}" />
      </div>`;
  }).join("");
  const sugerencia = sugerenciaProgresion(slug, 0);
  const opciones = opcionesEdicion(poolGrupo, ej.nombre);
  const selectId = `edit-${dayIndex}-${tipo}-${posIndex}`;
  return `
    <div class="row" data-exslug="${slug}" data-exseries="${nSeries}">
      <div class="info">
        <div>${numLabel}${ej.nombre}${ej.maquina ? '<span class="machine-tag">MÁQUINA</span>' : ''}<button class="edit-btn" data-toggle-edit="${selectId}">✎</button></div>
        <div class="sub" data-sub="${slug}">${ej.series}x${ej.reps}${formatUltimaVez(slug, nSeries)}</div>
        ${sugerencia ? `<div class="suggestion">${sugerencia}</div>` : ''}
      </div>
      <div class="sets-row">${setsHtml}</div>
      <div class="edit-select-row" id="${selectId}">
        <select data-day-index="${dayIndex}" data-tipo="${tipo}" data-pos-index="${posIndex}">
          <option value="">Elegir otro ejercicio...</option>
          ${opciones.map((o) => `<option value="${o.n.replace(/"/g, '&quot;')}">${o.n}${o.m ? ' (máquina)' : ''}</option>`).join("")}
        </select>
      </div>
    </div>
  `;
}

function render() {
  if (!plan) return;

  guardarPlanActivo();
  loadCodeSectionEl.style.display = "none";
  actualizarRachaBadge();
  progressLinkBtnEl.style.display = hayDatosDeProgreso() ? "block" : "none";
  historyLinkBtnEl.style.display = listaHistorialEntrenos().length > 0 ? "block" : "none";
  undoBoxEl.style.display = ultimoSnapshot ? "flex" : "none";
  if (configResumenEl.style.display !== "none") colapsarConfig();

  const pesoKg = pesoUsuarioActual || parseFloat(pesoUsuarioEl.value) || 75;
  if (calcularCalorias) {
    const totalSemana = plan.reduce((acc, { sesion }) => acc + kcalSesion(sesion, pesoKg), 0);
    totalWeekEl.style.display = "flex";
    totalWeekValEl.textContent = `~${totalSemana} kcal`;
  } else {
    totalWeekEl.style.display = "none";
  }
  footnoteEl.style.display = "block";

  if (codigoActual != null) {
    codeBoxEl.style.display = "block";
    if (codigoDesactualizado) {
      codeBoxEl.classList.add("stale");
      codeBoxEl.querySelector(".code-value").textContent = "— — — — — —";
      codeBoxEl.querySelector(".code-note").textContent = "Has cambiado algo, así que el código ya no coincide con lo que ves. Tu compañero/a no se ve afectado por tus cambios (cada uno guarda su plan por separado), pero si quieres volver a tener un código compartible, descarta los cambios.";
      resetCodeBtnEl.style.display = "block";
    } else {
      codeBoxEl.classList.remove("stale");
      codeBoxEl.querySelector(".code-value").textContent = String(codigoActual).padStart(6, "0");
      codeBoxEl.querySelector(".code-note").textContent = "Compártelo con tu compañero/a de entreno para que le salga exactamente lo mismo.";
      resetCodeBtnEl.style.display = "none";
    }
  }

  const semanaId = calcularSemanaId(new Date());
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);

  planEl.innerHTML = plan.map(({ dia, sesion }, index) => {
    const hecho = estaHecho(semanaId, index);
    const diaIndexReal = DIAS.findIndex((d) => d.id === dia.id);
    const fechaDia = fechaParaIndiceSemana(diaIndexReal);
    const fechaDiaStr = formatFechaLocal(fechaDia);
    const esPasado = fechaDia < hoy;
    const mostrarAviso = esPasado && !hecho;
    return `
    <div class="day-card" data-day-index="${index}">
      <div class="day-head">
        <div>
          <div class="dia-full">${dia.full}</div>
          <div class="sesion-nombre">${sesion.nombre}</div>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          ${calcularCalorias ? `
          <div class="kcal-box">
            <div class="num">~${kcalSesion(sesion, pesoKg)}</div>
            <div class="lbl">kcal</div>
          </div>` : ''}
          <button class="hecho-btn${hecho ? ' done' : ''}" data-hecho="${index}">${hecho ? '✓ Hecho' : 'Marcar hecho'}</button>
          <button class="regen-btn" data-regen="${index}">↻ Variar</button>
        </div>
      </div>
      ${mostrarAviso ? `<div class="warning-badge">⚠ No marcaste este día como hecho</div>` : ''}
      <div class="row warmup">
        <span>🏃 ${sesion.calentamiento.nombre}</span>
        <span class="detalle">${sesion.calentamiento.detalle}</span>
      </div>
      ${sesion.ejercicios.map((ej, i) => filaEjercicioHTML(ej, i, true, index, "principal", sesion.grupo, fechaDiaStr)).join("")}
      <div class="abs-label">Abdominales</div>
      ${sesion.abdominales.map((ej, i) => filaEjercicioHTML(ej, i, false, index, "abs", "abs", fechaDiaStr)).join("")}
    </div>
  `;
  }).join("");

  // Guardar peso al salir del campo (uno por cada serie)
  planEl.querySelectorAll("input[data-slug]").forEach((input) => {
    input.addEventListener("blur", () => {
      const val = parseFloat(input.value);
      if (!isNaN(val) && val >= 0) {
        guardarEnHistorialSet(input.dataset.slug, parseInt(input.dataset.set, 10), val, input.dataset.fecha);
        guardarPesoSemana(codigoActual, input.dataset.slug, parseInt(input.dataset.set, 10), val);
        input.classList.add("saved");
        setTimeout(() => input.classList.remove("saved"), 1200);
        const row = input.closest(".row");
        const sub = row.querySelector(`[data-sub="${input.dataset.slug}"]`);
        if (sub) {
          const nSeries = parseInt(row.dataset.exseries, 10);
          const baseTxt = sub.textContent.split(" · última vez")[0].split(" · ref. grupo")[0];
          sub.textContent = baseTxt + formatUltimaVez(input.dataset.slug, nSeries);
        }
        progressLinkBtnEl.style.display = "block";
      }
    });
  });

  // Variar ejercicios de un día completo
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
      render();
    });
  });

  // Marcar/desmarcar entrenamiento como hecho (guarda un snapshot completo en el historial)
  planEl.querySelectorAll("[data-hecho]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.hecho, 10);
      if (estaHecho(semanaId, idx)) {
        desmarcarHecho(semanaId, idx);
        borrarEntrenoDelHistorial(semanaId, idx);
      } else {
        marcarHecho(semanaId, idx);
        const diaIndexReal = DIAS.findIndex((d) => d.id === plan[idx].dia.id);
        guardarEntrenoEnHistorial(semanaId, idx, plan[idx].dia.full, plan[idx].sesion, pesoKg, formatFechaLocal(fechaParaIndiceSemana(diaIndexReal)));
      }
      render();
    });
  });

  // Mostrar/ocultar el selector de "editar ejercicio"
  planEl.querySelectorAll("[data-toggle-edit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.toggleEdit);
      if (target) target.classList.toggle("open");
    });
  });

  // Aplicar el cambio manual de ejercicio elegido en el selector
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
        plan[dayIndex].sesion.abdominales[posIndex] = {
          nombre: elegido.n, maquina: elegido.m, series: 3,
          reps: elegido.n.includes("Plancha") || elegido.n.includes("Hollow") ? "30-45 seg" : actual.reps,
        };
      } else {
        const nuevasReps = repsFor(elegido.n, Math.random);
        plan[dayIndex].sesion.ejercicios[posIndex] = { nombre: elegido.n, maquina: elegido.m, c: elegido.c, ...nuevasReps };
      }
      codigoDesactualizado = true;
      render();
    });
  });
}

// ---- Recuperar el plan activo de esta semana al abrir la app (si existe) ----
(function inicializarPlanActivo() {
  const activo = cargarPlanActivo();
  if (activo && activo.plan && activo.seleccionados && activo.seleccionados.length > 0) {
    seleccionados = activo.seleccionados;
    prioridad = activo.prioridad || "maquina";
    plan = activo.plan;
    codigoActual = activo.codigoActual;
    codigoDesactualizado = !!activo.codigoDesactualizado;
    actualizarChipsUI();
    genBtn.textContent = "Generar de nuevo";
    colapsarConfig();
    render();
  }
})();
