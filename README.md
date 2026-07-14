# 🏋️ Generador de Entrenos

Aplicación web de una sola página (HTML + CSS + JS, sin dependencias externas más allá de una tipografía de Google Fonts) para generar rutinas de gimnasio semanales variadas, con seguimiento de pesos por serie, calorías estimadas y sincronización sencilla entre dos personas mediante un código numérico.

## ✨ Funcionalidades

- **Generación de rutinas por días**: elige qué días de la semana entrenas y se genera automáticamente un split (Full Body, Empuje/Tracción/Pierna, Torso/Pierna...) según cuántos días marques.
- **Siempre con el mismo formato**: 10 minutos de cinta al principio, bloque de fuerza y abdominales al final.
- **Prioridad configurable**: máquinas/poleas, peso libre o equilibrado.
- **Estabilidad semanal**: con los mismos días y prioridad, la rutina generada es idéntica durante toda la semana (cambia automáticamente la semana siguiente).
- **Código de 6 dígitos para compartir**: comparte tu entrenamiento con tu compañero/a de gimnasio para que le salga exactamente lo mismo, sin necesidad de servidor.
- **Peso por serie**: anota el peso usado en cada serie de cada ejercicio; se guarda en el dispositivo y se muestra la próxima vez que toque ese ejercicio ("última vez: 40/42/44 kg").
- **Referencia por grupo muscular**: si un ejercicio es nuevo, sugiere el último peso usado en otro ejercicio del mismo grupo.
- **Sugerencia de progresión**: si llevas el mismo peso dos veces seguidas, te sugiere subir un poco.
- **Calorías estimadas (opcional)**: cálculo basado en MET × peso corporal × tiempo, activable/desactivable con un interruptor.
- **Editar ejercicios manualmente**: sustituye cualquier ejercicio propuesto por otro del mismo grupo muscular.
- **Marcar entrenamientos como hechos + racha semanal**: lleva la cuenta de cuántas semanas seguidas has entrenado.
- **Gráfica de progreso**: evolución del peso levantado por ejercicio a lo largo del tiempo (solo visible cuando hay datos).
- **Modo claro / oscuro**.
- Todos los datos personales (pesos, peso corporal, racha, tema) se guardan **localmente en el dispositivo** (`localStorage`); no hay backend ni recogida de datos.

## 📂 Estructura

Un único archivo autocontenido:

```
index.html
```

No requiere build, ni `npm install`, ni servidor: es HTML/CSS/JS puro.

## ⚠️ Notas

- Las calorías son una estimación orientativa (MET × peso × tiempo), no una medición médica exacta.
- El código de 6 dígitos codifica los días elegidos, la prioridad y la semana en curso — no envía ni almacena nada en ningún servidor.
- El histórico de progreso y las sugerencias de progresión se basan en los datos que vayas guardando; cuantas más semanas uses la app, más útiles serán.

## 📄 Licencia

© 2026 Alejandro Arévalo Romero. Todos los derechos reservados.
