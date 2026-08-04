# Generador de Entrenamientos 💪

Aplicación web de entrenamiento con **rutina indefinida**, seguimiento de progreso semanal y generación de nuevas rutinas cuando quieras.

---

## 🎯 Características principales

### 1. **Rutina indefinida — tú decides cuándo cambiar**
- Los ejercicios se generan una vez y **permanecen iguales para siempre**, hasta que pulses **"Generar nueva rutina"**.
- No hay periodización automática por semanas ni caducidad mensual: la progresión la marca el peso que levantas, no el calendario.
- Regla simple: **si completas todas las repeticiones con buena técnica, sube 2,5 kg la próxima semana.**

### 2. **Series y repeticiones fijas**
| Tipo de ejercicio | Series | Repeticiones | Descanso |
|---|---|---|---|
| Compuesto (multi-articular) | 4 | 8-10 | 2-3 min |
| Aislamiento | 3 | 10-12 | 90 seg |
| Abdominales | 3 | 10-12 (o 45-60s en plancha) | 45 seg |

Nada de rangos de 15-20 reps: son cargas de trabajo serio para progresar, no de resistencia.

### 3. **Selector de días (1-7)**
- **1 día**: Full Body
- **2 días**: Full Body A / B
- **3 días**: Empuje / Tracción / Pierna
- **4 días**: Tren superior A/B + Tren inferior A/B
- **5 días**: Empuje / Tracción / Pierna / Tren superior / Tren inferior
- **6 días**: Empuje×2 / Tracción×2 / Pierna×2
- **7 días**: Empuje / Tracción / Pierna / Descanso activo + repetición

### 4. **Orden correcto de ejercicios**
1. Compuestos primero (sistema nervioso fresco)
2. Aislamientos al final
3. Intercalados por grupo muscular para no sobrecargar

Etiquetas: **MÁQUINA** y **COMP** (compuesto).

### 5. **Grupos musculares entre paréntesis**
Cada sesión muestra qué se trabaja: **(Pecho · Hombro · Tríceps)** para Empuje, etc.

### 6. **Calentamiento simple**
> Cinta o bicicleta suave — 10 minutos, ritmo cómodo.

### 7. **Abdominales minimalistas**
Solo 2 ejercicios por sesión, elegidos entre:
- Máquina de abdominales
- Plancha frontal
- Elevación de piernas colgado

### 8. **Seguimiento de pesos por semana**
- Los campos de peso se resetean cada semana (empiezan vacíos)
- "**Última vez**" muestra lo que usaste la semana anterior, para que sepas si tienes que subir
- Se guarda automáticamente al salir del campo

### 9. **Generar nueva rutina cuando quieras**
Botón dedicado: cuando te aburras de los ejercicios, o quieras cambiar de enfoque, pulsa **"Generar nueva rutina"** y se crea un plan completamente distinto (mismo número de días y prioridad, ejercicios nuevos).

### 10. **Código de rutina**
Código de 6 dígitos único por rutina generada. Compártelo con tu compañero/a para que tenga exactamente los mismos ejercicios.

### 11. **Historial de entrenamientos**
Al marcar un día como "Hecho" se guarda fecha, ejercicios, series, reps y pesos usados — visible en "Ver historial de entrenos".

### 12. **Gráfica de progreso**
Evolución del peso máximo por ejercicio, semana a semana.

### 13. **Racha de semanas**
Cuenta cuántas semanas seguidas llevas entrenando.

### 14. **Modo claro / oscuro**
Botón ☀️/🌙 en la esquina superior derecha.

---

## 🚀 Cómo usar

### Paso 1: Archivos necesarios
En la **misma carpeta**:
- `index.html`
- `script.js`
- `style.css`

### Paso 2: Configurar
1. Elige días de entreno (1-7)
2. Elige prioridad: Máquinas / Equilibrado / Peso libre
3. Ingresa tu peso corporal (opcional, para kcal)
4. Pulsa **"Generar rutina"**

### Paso 3: Entrenar cada semana
- Anota el peso de cada serie
- Marca el día como "Hecho" al terminar
- La semana siguiente, sube 2,5 kg si completaste todas las reps

### Paso 4: Cambiar de rutina cuando quieras
Pulsa **"Generar nueva rutina"** — se crean ejercicios nuevos, mismo formato.

---

## 💾 Almacenamiento (localStorage)

| Dato | Clave | Duración |
|------|-------|----------|
| Rutina activa | `planIndefinido:numDias:prioridad` | Hasta que generes otra |
| Pesos de esta semana | `semana:SEMANA_ID` | 1 semana (reset lunes) |
| Historial de pesos | `serie:SLUG:sN` | 12 últimas sesiones |
| Días marcados como hechos | `hecho:SEMANA_ID:dayIndex` | 1 semana |
| Historial de entrenamientos | `historialEntrenos:SEMANA_ID:dayIndex` | Permanente |
| Peso corporal | `perfil:peso` | Permanente |
| Configuración (días/prioridad) | `config:numDias`, `config:prioridad` | Permanente |
| Tema | `tema` | Permanente |

**⚠️ Importante**: Limpiar caché del navegador borra todo. Haz backup si es importante.

---

## 🏋️ Ejercicios disponibles

- **Empuje** (20): Pecho, Hombro, Tríceps
- **Tracción** (21): Espalda, Bíceps, Hombro posterior, Trapecio, Antebrazo
- **Pierna** (19): Cuádriceps, Isquios, Glúteo, Gemelo, Aductores, Abductores
- **Tren superior** (16): Mezcla empuje + tracción
- **Full Body** (15): Todos los patrones
- **Abdominales** (3): Máquina, Plancha, Elevación de piernas

---

## 📊 Ejemplo de sesión

**DÍA 1 · EMPUJE (Pecho · Hombro · Tríceps)**

```
Calentamiento: Cinta o bicicleta suave — 10 minutos

1. Press de pecho en máquina [MÁQUINA] [COMP] ⏱ 2-3 min
   4x8-10 · última vez: 70/70/68/65 kg (2026-07-28)
   S1: [72.5] S2: [72.5] S3: [70] S4: [70]

2. Remo en polea baja (sentado) [MÁQUINA] [COMP] ⏱ 2-3 min
   4x8-10 · última vez: 85/85/85/80 kg (2026-07-28)
   S1: [87.5] S2: [87.5] S3: [85] S4: [85]

3. Elevaciones laterales en polea ⏱ 90 seg
   3x10-12 · última vez: 16/15/14 kg (2026-07-28)
   S1: [16] S2: [15] S3: [14]

4. Press francés ⏱ 90 seg
   3x10-12 · ref. grupo: 20 kg (Press de hombro, 2026-07-21)
   S1: [20] S2: [19] S3: [18]

Abdominales · 45 seg descanso

- Máquina de abdominales 3x10-12
- Plancha frontal 3x45-60 seg

✓ Marcar hecho
```

Si completaste todas las reps con buena técnica → la próxima semana subes 2,5 kg en cada serie.

---

## ❓ Preguntas frecuentes

**P: ¿Cuándo debo generar una nueva rutina?**
R: Cuando lleves varias semanas (4-8 típicamente) con los mismos ejercicios y quieras variar estímulo, o si te aburres. No hay límite de tiempo — tú decides.

**P: ¿Cómo sé cuándo subir peso?**
R: Si completas TODAS las series con TODAS las repeticiones del rango (ej. 4x8-10 significa 8-10 reps en cada una de las 4 series) con buena técnica, sube 2,5 kg la semana siguiente.

**P: ¿Y si no completo las reps?**
R: Mantén el mismo peso una semana más, o bájalo ligeramente (2-2.5 kg) si fallaste por mucho.

**P: ¿Por qué ya no hay periodización de 4 semanas?**
R: Porque complicaba el seguimiento y forzaba cambios de reps que no seguían tu progreso real. Ahora la progresión depende de ti, no del calendario.

**P: ¿Puedo cambiar un ejercicio?**
R: Sí. Clic en ✎ junto al ejercicio → elige otro de la lista.

**P: ¿Los pesos se pierden si limpio caché?**
R: Sí. Haz backup si es importante.

---

## 📄 Licencia

Uso personal. Libre de compartir con amigos.

---

**Hecho con ❤️ por Alejandro**
