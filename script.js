const escenarios = {
  cobranzas: {
    texto: "💼 Debés enviar un mail a un cliente recordando el pago de una factura vencida hace 15 días, con un tono cordial.",
    respuestaIA: "Estimado cliente, le recordamos que la factura N°248 continúa pendiente de pago. Agradeceremos su colaboración para regularizar el saldo. Quedamos atentos. Saludos cordiales."
  },
  rrhh: {
    texto: "👥 Un empleado pidió 2 días de licencia sin goce de sueldo. Necesitás responder de manera formal.",
    respuestaIA: "Estimado Juan, confirmamos que su solicitud por los días 14 y 15 de junio fue aprobada. Quedamos atentos. Saludos cordiales, RRHH."
  },
  finanzas: {
    texto: "💰 Debés redactar un resumen mensual de ingresos y egresos para enviar a la gerencia.",
    respuestaIA: "Durante mayo ingresaron $8.500.000 y egresaron $6.200.000, resultando en un saldo positivo de $2.300.000. Se adjunta detalle."
  },
  compras: {
    texto: "📦 Querés solicitar una nueva cotización a un proveedor habitual por aumento de precios.",
    respuestaIA: "Estimado proveedor, le solicitamos una cotización actualizada para los productos habituales. Agradecemos su atención."
  },
  ventas: {
    texto: "🛍️ Querés enviar un mensaje de seguimiento por WhatsApp a un cliente que recibió presupuesto hace 10 días.",
    respuestaIA: "Hola, ¿cómo estás? Quería saber si tuviste oportunidad de revisar la propuesta que te enviamos. Quedo a disposición."
  },
  atencion: {
    texto: "📞 Un cliente pregunta si su matafuego está vencido y cuándo puede renovarlo.",
    respuestaIA: "Hola, tu equipo vence el 20 de junio. Podemos pasar esta semana para renovarlo. ¿Te parece bien?"
  },
  tecnica: {
    texto: "🔧 Debés armar un paso a paso para detectar una falla eléctrica en una central de incendios.",
    respuestaIA: "1. Revisar alimentación general. 2. Comprobar baterías. 3. Testear sensores. 4. Reiniciar la central. 5. Registrar la intervención."
  },
  cotizaciones: {
    texto: "📄 Vas a enviar por mail una cotización formal con detalles técnicos y precios.",
    respuestaIA: "Estimado cliente, adjuntamos la cotización solicitada con los detalles técnicos y económicos. Quedamos atentos a comentarios."
  },
  obras: {
    texto: "🏗️ Necesitás redactar un informe breve de avance de obra para instalación contra incendios.",
    respuestaIA: "Al 11/6: cañerías principales instaladas (100%), pruebas hidráulicas iniciadas, rociadores en área B pendientes. Tiempo estimado: 3 días."
  }
};

function cambiarEscenario() {
  const area = document.getElementById("areaSelect").value;
  const escenario = document.getElementById("escenario");
  const promptInput = document.getElementById("promptInput");
  document.getElementById("analisis").classList.add("oculto");
  document.getElementById("respuesta").classList.add("oculto");
  promptInput.value = "";

  if (escenarios[area]) {
    escenario.innerText = escenarios[area].texto;
    escenario.classList.remove("oculto");
    escenario.classList.add("highlight");
    setTimeout(() => escenario.classList.remove("highlight"), 600);
  } else {
    escenario.classList.add("oculto");
  }
}

function procesarPrompt() {
  const prompt = document.getElementById("promptInput").value.toLowerCase().trim();
  const area = document.getElementById("areaSelect").value;
  const analisis = document.getElementById("analisis");
  const respuesta = document.getElementById("respuesta");

  if (!area || !prompt) {
    alert("Por favor, seleccioná un área y escribí tu prompt.");
    return;
  }

  let nivel = "🔴 Bajo";
  let claseNivel = "nivel-bajo";
  let sugerencia = "Tu prompt es muy general. Agregá contexto, objetivo y tono (ej: formal, urgente, cordial).";
  let explicacion = "El prompt no contiene información clara sobre lo que querés que haga la IA.";

  if (prompt.length > 30) {
    if (prompt.includes("redacta") || prompt.includes("correo") || prompt.includes("mensaje") || prompt.includes("respuesta")) {
      nivel = "🟡 Medio";
      claseNivel = "nivel-medio";
      sugerencia = "Vas bien. Agregá detalles como a quién va dirigido, de qué se trata y estilo de redacción.";
      explicacion = "Hay una intención clara, pero faltan algunos datos clave para obtener una buena respuesta.";
    }
    if (
      prompt.includes("factura") ||
      prompt.includes("cordial") ||
      prompt.includes("formal") ||
      prompt.includes("detalle") ||
      prompt.includes("seguimiento") ||
      prompt.includes("informe") ||
      prompt.includes("cliente") ||
      prompt.includes("cotización") ||
      prompt.includes("paso a paso")
    ) {
      nivel = "🟢 Alto";
      claseNivel = "nivel-alto";
      sugerencia = "¡Excelente! Prompt claro, completo y enfocado. La IA podrá ayudarte mejor.";
      explicacion = "El prompt tiene contexto, intención y detalles específicos.";
    }
  }

  analisis.innerHTML = `
    <strong>📊 Análisis del prompt:</strong><br>
    <b class="${claseNivel}">Nivel: ${nivel}</b><br>
    <b>Explicación:</b> ${explicacion}<br>
    <b>Sugerencia:</b> ${sugerencia}
  `;
  respuesta.innerHTML = `<strong>🤖 Respuesta simulada de IA:</strong><br>${escenarios[area].respuestaIA}`;

  analisis.className = `evaluacion ${claseNivel}`;
  respuesta.classList.remove("oculto");
  respuesta.classList.add("respuesta", "highlight");

  setTimeout(() => {
    respuesta.classList.remove("highlight");
  }, 600);
}

function reiniciar() {
  document.getElementById("promptInput").value = "";
  document.getElementById("analisis").className = "evaluacion oculto";
  document.getElementById("respuesta").classList.add("oculto");
}

function exportarPDF() {
  const area = document.getElementById("areaSelect").value;
  if (!area) {
    alert("Seleccioná un área antes de exportar.");
    return;
  }

  const element = document.createElement("div");
  element.innerHTML = `
    <h2>Simulador IA - Resultado</h2>
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>Prompt:</strong> ${document.getElementById("promptInput").value}</p>
    <p>${document.getElementById("analisis").innerHTML}</p>
    <p>${document.getElementById("respuesta").innerHTML}</p>
  `;
  html2pdf().from(element).save("resultado-ia.pdf");
}
