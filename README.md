# Generador de Entrenamientos 💪

Aplicación web de entrenamiento personalizado con periodización automática de 4 semanas, seguimiento de progreso y feedback de dificultad.

---

## 🎯 Características principales

### 1. **Plan mensual fijo con periodización**
- **Semana 1 (Adaptación)**: 3 series, cargas moderadas (~70%). Aprende los movimientos sin forzar.
- **Semana 2 (Progresión)**: 4 series, aumenta la carga. Busca el fallo técnico en la última serie.
- **Semana 3 (Sobrecarga)**: 4 series, cargas altas (~85%). Si completas con buena técnica, sube 2,5 kg la próxima semana.
- **Semana 4 (Descarga)**: 2 series, cargas bajas (60%). El cuerpo consolida adaptaciones. No te saltes el descanso activo.

Los ejercicios se generan UNA sola vez y permanecen iguales durante todo el mes — solo cambian las series, reps y descansos según la semana.

### 2. **Selector de días (1-7)**
Elige cuántos días entrenas por semana:
- **1 día**: Full Body
- **2 días**: Full Body A / B
- **3 días**: Empuje / Tracción / Pierna (PushPullLegs)
- **4 días**: Tren superior A/B + Tren inferior A/B
- **5 días**: Empuje / Tracción / Pierna / Tren superior / Tren inferior
- **6 días**: Empuje×2 / Tracción×2 / Pierna×2
- **7 días**: Empuje / Tracción / Pierna / Descanso activo + repetición

### 3. **Orden correcto de ejercicios**
Los ejercicios se ordenan automáticamente:
1. **Primero: compuestos** (cargas más pesadas, sistema nervioso fresco)
2. **Luego: aislamientos** (para acabar la sesión)
3. **Por grupos musculares intercalados** para evitar fatiga local excesiva

Cada ejercicio se etiqueta:
- **MÁQUINA**: si es guiado
- **COMP**: si es compuesto (movimiento multi-articular)

### 4. **Tiempo de descanso específico**
Cada ejercicio muestra el descanso recomendado:
- **Compuestos**: 60-90 seg (semana 1) → 2-3 min (semana 3)
- **Aislamientos**: 45-60 seg (semana 1) → 90 seg (semana 3)

Esto evita que sobre-entrenes sesiones — si respetas los tiempos, no te quemas.

### 5. **Grupos musculares entre paréntesis**
Cada sesión muestra qué músculos se trabajan prioritariamente:
- **(Pecho · Hombro · Tríceps)** para Empuje
- **(Espalda · Bíceps · Hombro posterior)** para Tracción
- **(Cuádriceps · Isquios · Glúteo · Gemelo)** para Pierna

### 6. **Calentamiento simple: 10' de cardio**
Todas las sesiones (excepto descanso activo) comienzan con:
> **Cinta o bicicleta suave** — 10 minutos, ritmo cómodo para elevar temperatura corporal

Sin complicaciones, sin movilidad específica: solo activar el cuerpo.

### 7. **Feedback de dificultad**
Al marcar un día como "Hecho", aparece:
> **¿Cómo fue la sesión?** [😴 Muy fácil] [😊 Fácil] [💪 Perfecto] [🔥 Duro] [😤 Muy duro]

El feedback se guarda semanalmente — puedes usarlo para evaluar cómo fue el esfuerzo real.

### 8. **Abdominales minimalistas**
Solo 2 ejercicios de abs por sesión (no 3, como pediste):
- **Máquina de abdominales** (máquina)
- **Plancha frontal** (libre)
- **Elevación de piernas colgado** (libre)

El sistema elige 2 aleatoriamente. No se abruma.

### 9. **Seguimiento de pesos por semana**
- Cada semana los campos de peso empiezan vacíos
- "**Última vez**" muestra lo que usaste la semana anterior
- Al salir del campo, se guarda automáticamente
- Historial de 12 últimas sesiones de cada ejercicio

### 10. **Código de plan mensual**
Un código de 6 dígitos que combina:
- Número de días (1-7)
- Prioridad de máquinas (máquinas / equilibrado / peso libre)
- Mes actual (YYYYMM)

**Comparte el código con tu compañero/a** → carga el código → obtiene el MISMO plan para todo el mes.

### 11. **Historial de entrenamientos**
Cada vez que marcas un día como "Hecho", se guarda:
- Fecha y nombre de la sesión
- Ejercicios realizados (con series, reps y pesos)
- Kcal estimadas (si activaste el cálculo)

### 12. **Gráfica de progreso**
Selecciona cualquier ejercicio del historial y ve la evolución de tu peso máximo semana a semana.

### 13. **Racha de semanas**
Muestra cuántas semanas seguidas has entrenado. Motivación pura.

### 14. **Modo claro / oscuro**
Botón en la esquina superior derecha (☀️ / 🌙) para cambiar de tema.

---

## 🚀 Cómo usar

### Paso 1: Descargar los archivos
Necesitas 3 archivos en la **misma carpeta**:
- `index.html`
- `script.js`
- `style.css`

### Paso 2: Abrir en navegador
Doble clic en `index.html` o sube los 3 archivos a un servidor web y abre el dominio.

### Paso 3: Configurar tu plan
1. **Elegir días de entreno** (1-7)
2. **Elegir prioridad**: Máquinas / Equilibrado / Peso libre
3. **Ingresar tu peso corporal** (si quieres calcular kcal)
4. Hacer clic en **"Generar entrenamientos del mes"**

### Paso 4: Entrenar
- Cada lunes (según tu zona) los campos se resetean
- Anota el peso de cada serie
- Al acabar la sesión, marca el día como "Hecho"
- Valora la dificultad (opcional)

### Paso 5: Monitorear progreso
- **Botón 📈**: Ver gráficas de peso máximo por ejercicio
- **Botón 📖**: Ver historial de todas las sesiones realizadas

---

## 💾 Almacenamiento

Todo se guarda en **localStorage** del navegador (local, sin internet):

| Dato | Clave | Duración |
|------|-------|----------|
| Plan mensual | `planMensual:YYYYMM:numDias:prioIdx` | 1 mes |
| Pesos de esta semana | `semana:SEMANA_ID` | 1 semana (se resetea cada lunes) |
| Historial de pesos (largo plazo) | `serie:SLUG:sN` | 12 últimas sesiones |
| Sesiones marcadas como hechas | `hecho:SEMANA_ID:dayIndex` | 1 semana |
| Feedback de dificultad | `feedback:SEMANA_ID:dayIndex` | 1 semana |
| Historial de entrenamientos | `historialEntrenos:SEMANA_ID:dayIndex` | Permanente |
| Peso corporal | `perfil:peso` | Permanente |
| Configuración (días/prioridad) | `config:numDias`, `config:prioridad` | Permanente |
| Tema (claro/oscuro) | `tema` | Permanente |

**⚠️ Importante**: Si limpias el caché / localStorage del navegador, pierdes todo. Descarga regularmente tu historial si es importante.

---

## 🏋️ Estructura de ejercicios

### Pools disponibles
- **Empuje** (20 ejercicios): Pecho, Hombro, Tríceps
- **Tracción** (21 ejercicios): Espalda, Bíceps, Hombro posterior, Trapecio, Antebrazo
- **Pierna** (19 ejercicios): Cuádriceps, Isquios, Glúteo, Gemelo, Aductores, Abductores
- **Tren superior** (16 ejercicios): Mezcla de empuje + tracción
- **Full Body** (15 ejercicios): Mezcla de todos los patrones

### Abdominales (3 opciones)
- Máquina de abdominales
- Plancha frontal
- Elevación de piernas colgado

El sistema elige 2 por sesión, rotándolos.

---

## 🎓 Entrenador inteligente incorporado

### ✅ Lo que hace bien
1. **Evita repetir el mismo ejercicio en la semana** → Variedad
2. **Ordena compuestos primero** → Máxima fuerza cuando te importa
3. **Intercala grupos musculares** → Menos acumulación de fatiga
4. **Tiene familia de ejercicios** → No mezcla Press banca + Fondos el mismo día
5. **4 semanas de periodización** → Progreso garantizado si respetas el proceso

### ❌ Lo que NO hace
- NO calcula progresión automática de cargas (tú decides cuándo subir)
- NO personaliza según tu nivel inicial (usa los mismos ejercicios para todos)
- NO ajusta macros ni nutrición (solo te dice kcal aproximadas)

---

## 📱 Compatibilidad

- **Desktop**: Chrome, Firefox, Safari, Edge ✅
- **Mobile**: iOS Safari, Chrome Android ✅
- **Offline**: Funciona 100% sin internet (todo en localStorage)

---

## 🔄 Flujo de la app

```
INICIO
  ↓
Elegir días (1-7) + Prioridad
  ↓
Generar plan mensual (mismo todo el mes)
  ↓
SEMANA 1: Adaptación (3 series, ~70%)
  ├─ Anotar pesos
  ├─ Marcar hecho
  └─ Feedback de dificultad (opcional)
  ↓
SEMANA 2: Progresión (4 series, sube carga)
  ├─ Campos vacíos (nueva semana)
  ├─ "Última vez" muestra semana anterior
  └─ ...
  ↓
SEMANA 3: Sobrecarga (4 series, ~85%)
  ├─ Si completas → sube 2,5 kg la próxima
  └─ ...
  ↓
SEMANA 4: Descarga (2 series, 60%)
  ├─ Recuperación activa
  ├─ El cuerpo consolida
  └─ Vuelta a SEMANA 1
```

---

## 🆘 Preguntas frecuentes

**P: ¿Por qué solo 2 ejercicios de abs?**
R: 2 es suficiente. 3 es demasiado — te acumula fatiga abdominal. Planchas + elevaciones + máquina es un trabajo completo.

**P: ¿Puedo cambiar un ejercicio?**
R: Sí. Haz clic en ✎ al lado del ejercicio → selecciona otro de la lista. El código se marca como "desactualizado".

**P: ¿Qué pasa si me salto una semana?**
R: Los campos de peso no se resetean automáticamente — tú marcar "hecho" o "no hecho". El plan sigue siendo el mismo.

**P: ¿Puedo compartir el plan con alguien?**
R: Sí. El código de 6 dígitos genera el MISMO plan para todo el mes. Comparte el código.

**P: ¿Los pesos se pierden si limpio caché?**
R: Sí. localStorage se borra. Haz backup de tus datos regularmente si es importante.

**P: ¿Por qué el descanso es diferente cada semana?**
R: Porque en la semana 1 recuperas rápido (cargas bajas), pero en la semana 3 (cargas altas) necesitas 2-3 minutos para recuperar el sistema nervioso.

**P: ¿Puedo usar peso libre o solo máquinas?**
R: Puedes elegir "Peso libre" como prioridad — la app da más ejercicios sin máquinas.

---

## 📊 Ejemplo de sesión completa

**DÍA 1 · EMPUJE (Pecho · Hombro · Tríceps)**

```
Calentamiento: Cinta o bicicleta suave — 10 minutos

SEMANA 2 (Progresión 📈)

1. Press de pecho en máquina [MÁQUINA] [COMP] ⏱ 90-120 seg
   4x10-12 · última vez: 70/70/68/65 kg (2025-01-20)
   S1: [70] S2: [70] S3: [68] S4: [65]

2. Remo en polea baja (sentado) [MÁQUINA] [COMP] ⏱ 90-120 seg
   4x10-12 · última vez: 85/85/85/80 kg (2025-01-20)
   S1: [85] S2: [85] S3: [85] S4: [80]

3. Elevaciones laterales en polea [COMP: NO] ⏱ 60-90 seg
   3x12-15 · (sin historial anterior)
   S1: [16] S2: [15] S3: [14]

4. Press francés [COMP: NO] ⏱ 60-90 seg
   3x12-15 · ref. grupo: 20 kg (Press de hombro en máquina, 2025-01-13)
   S1: [20] S2: [19] S3: [18]

Abdominales (Semana 2 - 45-60 seg descanso)

- Máquina de abdominales [MÁQUINA] 3x12-15
  S1: [50] S2: [50] S3: [45]

- Plancha frontal [COMP: NO] 3x45-60 seg
  S1: [50seg] S2: [48seg] S3: [45seg]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Marcar hecho

¿Cómo fue la sesión? [😴] [😊] [💪] [🔥] [😤 Muy duro ← seleccionado]
```

---

## 🚀 Próximas mejoras (opcionales)

- Exportar historial a CSV/PDF
- Notas por sesión ("me dolió el hombro", etc.)
- Calorías quemadas en tiempo real
- Sincronización con Strava o smartwatch
- Modo entrenador en vivo con temporizador audible

---

## 📄 Licencia

Uso personal. Libre de compartir el código con amigos.

---

**Hecho con ❤️ por Alejandro**
