<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<title>Generador de Entrenos</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<button class="tema-btn" id="temaBtn" aria-label="Cambiar tema">🌙</button>

<div class="wrap" id="mainView">
  <div class="badge">Cinta 10' → Fuerza → Abdominales</div>
  <h1 class="oswald">GENERADOR<br/>DE ENTRENOS</h1>
  <p class="subtitle">Elige los días que entrenas. Anota el peso que uses en cada ejercicio y la próxima vez que te toque verás con qué kilos empezaste la última vez.</p>

  <div class="racha-badge" id="rachaBadge" style="display:none;"></div>

  <div class="config-resumen" id="configResumen" style="display:none;">
    <div class="config-resumen-info">
      <div class="config-resumen-code" id="configResumenCode"></div>
      <div class="config-resumen-detalle" id="configResumenDetalle"></div>
    </div>
    <button id="expandirConfigBtn">✎ Cambiar</button>
  </div>

  <div id="configOptions">
    <label class="check-row">
      <span class="switch">
        <input type="checkbox" id="calcularCalCheck" checked />
        <span class="switch-track"></span>
      </span>
      <span class="switch-label">Calcular calorías estimadas</span>
    </label>

    <div id="pesoSection">
      <div class="section-label">Tu peso corporal (para calcular las kcal)</div>
      <div class="peso-view" id="pesoView" style="display:none;">
        <span id="pesoViewText"></span>
        <a href="#" id="pesoModificarLink">Modificar</a>
      </div>
      <div class="peso-edit" id="pesoEdit">
        <div class="peso-row">
          <input type="number" id="pesoUsuario" placeholder="kg" min="30" max="200" />
          <span>kg</span>
        </div>
      </div>
      <div class="peso-error" id="pesoError" style="display:none;">Introduce tu peso antes de generar el entrenamiento.</div>
    </div>

    <div class="section-label">¿Qué días entrenas?</div>
    <div class="days" id="days"></div>

    <div class="section-label">¿Qué prefieres priorizar?</div>
    <div class="days" id="prioridad"></div>

    <button class="gen-btn oswald" id="genBtn" disabled>Generar entrenamientos</button>
  </div>

  <div class="undo-box" id="undoBox" style="display:none;">
    <span>Has cambiado un ejercicio.</span>
    <button id="undoBtn">↩ Deshacer</button>
  </div>

  <div class="code-box" id="codeBox" style="display:none;">
    <div class="code-lbl">Tu código para compartir</div>
    <div class="code-value oswald">000000</div>
    <div class="code-note"></div>
    <button class="regen-btn" id="resetCodeBtn" style="display:none; margin-top:10px;">Descartar cambios y generar código limpio</button>
  </div>

  <div class="load-code" id="loadCodeSection">
    <div class="section-label">¿Tienes un código de tu compañero/a?</div>
    <div class="load-code-row">
      <input type="text" inputmode="numeric" maxlength="6" placeholder="123456" id="codeInput" />
      <button id="loadCodeBtn">Cargar entrenamiento</button>
    </div>
    <div class="code-error" id="codeError" style="display:none;"></div>
  </div>

  <div class="total-week" id="totalWeek" style="display:none;">
    <span>Total estimado de la semana</span>
    <span class="val" id="totalWeekVal">~0 kcal</span>
  </div>

  <button class="progress-link-btn" id="progressLinkBtn" style="display:none;">📈 Ver progreso</button>
  <button class="progress-link-btn" id="historyLinkBtn" style="display:none;">📖 Ver historial de entrenos</button>

  <div id="plan"></div>

  <p class="footnote" id="footnote" style="display:none;">
    Puedes anotar el peso de cada serie por separado (S1, S2, S3...). Se guardan en este dispositivo
    (en este navegador) al salir de cada casilla. Cuando el ejercicio se repita en una futura sesión,
    verás "última vez" con el peso de cada serie y la fecha, para saber por dónde empezar.
    Las calorías se calculan con tu peso corporal y una estimación de esfuerzo (MET) por tipo de
    ejercicio y descanso entre series — es una aproximación razonable, no una medición exacta.
  </p>
</div>

<div class="wrap" id="progressView" style="display:none;">
  <button class="progress-back" id="progressBackBtn">← Volver</button>
  <h2>Tu progreso</h2>
  <select class="progress-select" id="progressSelect"></select>
  <div class="progress-chart-card">
    <canvas id="progressCanvas" width="600" height="240" style="width:100%; height:auto; display:block;"></canvas>
  </div>
</div>

<div class="wrap" id="historyView" style="display:none;">
  <button class="progress-back" id="historyBackBtn">← Volver</button>
  <h2>Historial de entrenos hechos</h2>
  <div id="historyList"></div>
</div>

<footer class="app-footer">

  <span id="copyrightYear"></span> Alejandro Arévalo Romero. Todos los derechos reservados.
</footer>

<script src="script.js"></script>
</body>
</html>