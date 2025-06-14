const escenarios = {
  cobranzas: {
    facil: {
      texto: "💼 Debés enviar un mail a un cliente recordando el pago de una factura vencida hace 15 días, con un tono cordial.",
      respuestaIA: "Estimado cliente, le recordamos que la factura N°248 continúa pendiente de pago. Agradeceremos su colaboración para regularizar el saldo. Quedamos atentos. Saludos cordiales."
    },
    intermedio: {
      texto: "💼 Necesitás redactar un mail más persuasivo para un cliente que ya recibió dos avisos y aún no paga.",
      respuestaIA: "Estimado, le recordamos nuevamente que la factura N°248 está vencida hace 15 días. Es fundamental regularizarla esta semana para evitar suspensión de servicios. Quedamos atentos a su confirmación."
    },
    dificil: {
      texto: "💼 Prepará un mensaje breve pero firme para un cliente moroso, incluyendo monto exacto, fecha límite y consecuencias.",
      respuestaIA: "Estimado, le informamos que el saldo pendiente es de $120.000, vencido desde el 1/6. Solicitamos el pago antes del 15/6 para evitar acciones legales o suspensión de servicios."
    }
  },
  rrhh: {
    facil: {
      texto: "👥 Un empleado pidió 2 días de licencia sin goce de sueldo. Necesitás responder de manera formal.",
      respuestaIA: "Estimado Juan, confirmamos que su solicitud por los días 14 y 15 de junio fue aprobada. Quedamos atentos. Saludos cordiales, RRHH."
    },
    intermedio: {
      texto: "👥 Redactá una comunicación interna para todo el personal sobre el nuevo proceso de solicitud de vacaciones.",
      respuestaIA: "Estimado equipo, a partir del 1/7 todas las solicitudes de vacaciones deberán gestionarse a través del nuevo portal interno. Adjuntamos instructivo. RRHH."
    },
    dificil: {
      texto: "👥 Prepará una respuesta formal para una queja recibida por parte de un empleado sobre maltrato de un supervisor.",
      respuestaIA: "Estimado/a, lamentamos lo sucedido. Queremos informarle que su reclamo ha sido registrado y será analizado por el área de RRHH. Nos contactaremos para una reunión de seguimiento."
    }
  },
  finanzas: {
    facil: {
      texto: "💰 Debés redactar un resumen mensual de ingresos y egresos para enviar a la gerencia.",
      respuestaIA: "Durante mayo ingresaron $8.500.000 y egresaron $6.200.000, resultando en un saldo positivo de $2.300.000. Se adjunta detalle."
    },
    intermedio: {
      texto: "💰 Redactá un mensaje para solicitar a un proveedor una nota de crédito por diferencia de precios.",
      respuestaIA: "Estimado, detectamos una diferencia en la factura N°783. Solicitamos nota de crédito correspondiente. Adjunto detalle. Gracias."
    },
    dificil: {
      texto: "💰 Escribí un correo para rechazar un presupuesto por estar fuera del presupuesto anual aprobado.",
      respuestaIA: "Estimado proveedor, agradecemos su propuesta. Sin embargo, excede el presupuesto asignado para este trimestre, por lo que no podremos avanzar. Quedamos atentos a futuras propuestas."
    }
  },
  compras: {
    facil: {
      texto: "📦 Querés solicitar una nueva cotización a un proveedor habitual por aumento de precios.",
      respuestaIA: "Estimado proveedor, le solicitamos una cotización actualizada para los productos habituales. Agradecemos su atención."
    },
    intermedio: {
      texto: "📦 Enviá un correo formal para realizar una orden de compra por 5 unidades de un producto técnico.",
      respuestaIA: "Estimado, confirmamos la compra de 5 unidades del modelo ABC123. Por favor, enviarnos factura proforma y plazo estimado de entrega. Gracias."
    },
    dificil: {
      texto: "📦 Comunicá la cancelación de una orden de compra por retrasos reiterados en la entrega.",
      respuestaIA: "Estimado proveedor, lamentablemente debemos cancelar la orden N°3442 por incumplimientos en los plazos acordados. Esperamos poder retomar futuras operaciones. Saludos cordiales."
    }
  },
  logistica: {
    facil: {
      texto: "🚚 Redactá un mensaje para confirmar entrega programada para mañana.",
      respuestaIA: "Confirmamos que la entrega del pedido N°1123 está programada para mañana entre las 9 y 13 hs. Gracias por su confianza."
    },
    intermedio: {
      texto: "🚚 Enviá un correo notificando demora de 24 hs en una entrega por condiciones climáticas.",
      respuestaIA: "Lamentamos informar que la entrega N°1123 sufrirá una demora de 24 hs debido a condiciones climáticas adversas. Agradecemos su comprensión."
    },
    dificil: {
      texto: "🚚 Redactá un informe explicando desvío de ruta y reprogramación de entrega.",
      respuestaIA: "El desvío de ruta fue necesario por corte en la RP52. Reprogramamos entrega para el 15/6 en el mismo horario. Adjuntamos nuevo cronograma."
    }
  },
  ingenieria: {
    facil: {
      texto: "🛠️ Escribí un comentario técnico explicando el uso de un nuevo material ignífugo.",
      respuestaIA: "El nuevo material XP400 mejora la resistencia térmica en 20%. Es apto para instalaciones interiores según norma IRAM."
    },
    intermedio: {
      texto: "🛠️ Redactá observaciones luego de una inspección de obra incompleta.",
      respuestaIA: "Se observa falta de fijación en soporte de red húmeda en área C. Se recomienda ajustar antes de prueba hidráulica."
    },
    dificil: {
      texto: "🛠️ Prepará una justificación técnica para cambiar especificaciones en planos aprobados.",
      respuestaIA: "Por incompatibilidad con estructura existente, se propone usar tubería flexible en lugar de caño rígido. Adjuntamos memorándum técnico y planos revisados."
    }
  },
  sdr: {
    facil: {
      texto: "📞 Escribí un mensaje corto para contactar a un nuevo prospecto vía LinkedIn.",
      respuestaIA: "Hola, vi que trabajás en seguridad industrial. ¿Te interesaría conocer soluciones para protección contra incendios?"
    },
    intermedio: {
      texto: "📞 Redactá un correo de seguimiento después de una reunión inicial con un prospecto.",
      respuestaIA: "Gracias por tu tiempo hoy. Te adjunto la presentación y quedo atento a cualquier consulta. ¿Coordinamos una demo la próxima semana?"
    },
    dificil: {
      texto: "📞 Creá una propuesta breve y atractiva para enviar a un prospecto difícil de contactar.",
      respuestaIA: "Hola, trabajamos con industrias como la tuya ayudando a reducir riesgos y cumplir normativas. Te propongo 15 minutos para contarte cómo."
    }
  },
  ventas: {
    facil: {
      texto: "🛍️ Querés enviar un mensaje de seguimiento por WhatsApp a un cliente que recibió presupuesto hace 10 días.",
      respuestaIA: "Hola, ¿cómo estás? Quería saber si tuviste oportunidad de revisar la propuesta que te enviamos. Quedo a disposición."
    },
    intermedio: {
      texto: "🛍️ Redactá una respuesta para un cliente que pidió un descuento por cantidad.",
      respuestaIA: "Hola, gracias por tu consulta. Podemos ofrecerte un 10% de descuento por compras superiores a 20 unidades. Te paso la cotización ajustada."
    },
    dificil: {
      texto: "🛍️ Escribí un mail para recuperar a un cliente que dejó de comprar hace 6 meses.",
      respuestaIA: "Hola Juan, notamos que hace un tiempo no realizás compras con nosotros. ¿Hay algo en lo que podamos ayudarte? Te compartimos una promo exclusiva por tu fidelidad."
    }
  },
  atencion: {
    facil: {
      texto: "📞 Un cliente pregunta si su matafuego está vencido y cuándo puede renovarlo.",
      respuestaIA: "Hola, tu equipo vence el 20 de junio. Podemos pasar esta semana para renovarlo. ¿Te parece bien?"
    },
    intermedio: {
      texto: "📞 Respondé a una queja de un cliente por retraso en la visita técnica.",
      respuestaIA: "Lamentamos el retraso. Tuvimos una reprogramación por fuerza mayor. Reagendamos para mañana a las 10 hs. Gracias por la comprensión."
    },
    dificil: {
      texto: "📞 Respondé con empatía a un cliente que recibió mal el producto y está molesto.",
      respuestaIA: "Lamentamos sinceramente lo sucedido. Ya gestionamos el reemplazo urgente y mejoraremos los controles. Gracias por tu paciencia."
    }
  },
  tecnica: {
    facil: {
      texto: "🔧 Debés armar un paso a paso para detectar una falla eléctrica en una central de incendios.",
      respuestaIA: "1. Revisar alimentación general. 2. Comprobar baterías. 3. Testear sensores. 4. Reiniciar la central. 5. Registrar la intervención."
    },
    intermedio: {
      texto: "🔧 Redactá un informe corto sobre una prueba hidráulica exitosa.",
      respuestaIA: "Prueba realizada el 12/6, sin pérdidas ni obstrucciones. Presión mantenida 1 hora a 8 bar. Sistema listo para inspección final."
    },
    dificil: {
      texto: "🔧 Escribí una recomendación técnica para cambiar detectores por obsolescencia.",
      respuestaIA: "Sugerimos reemplazar detectores serie XP90 por modelo XN100 por vencimiento de vida útil (10 años). Mejora rendimiento y reduce falsas alarmas."
    }
  }, cotizaciones: {
    facil: {
      texto: "📄 Vas a enviar por mail una cotización formal con detalles técnicos y precios.",
      respuestaIA: "Estimado cliente, adjuntamos la cotización solicitada con los detalles técnicos y económicos. Quedamos atentos a comentarios."
    },
    intermedio: {
      texto: "📄 Redactá una propuesta comercial para instalación en galpón industrial.",
      respuestaIA: "Estimado, ofrecemos sistema de detección y extinción para galpón de 500 m², incluye planos, materiales y mano de obra. Ver detalle adjunto."
    },
    dificil: {
      texto: "📄 Escribí un mensaje aclarando una diferencia entre dos versiones de cotización.",
      respuestaIA: "Hola, la diferencia entre la cotización anterior y la actual se debe a la incorporación de sensores adicionales solicitados. Adjunto ambas versiones para comparar."
    }
  },
  obras: {
    facil: {
      texto: "🏗️ Necesitás redactar un informe breve de avance de obra para instalación contra incendios.",
      respuestaIA: "Al 11/6: cañerías principales instaladas (100%), pruebas hidráulicas iniciadas, rociadores en área B pendientes. Tiempo estimado: 3 días."
    },
    intermedio: {
      texto: "🏗️ Redactá un correo para solicitar planos actualizados al cliente.",
      respuestaIA: "Estimado, necesitamos los planos actualizados para avanzar con las tareas programadas. Agradeceremos los envíen a la brevedad. Gracias."
    },
    dificil: {
      texto: "🏗️ Escribí una respuesta a una auditoría que detectó una diferencia de ubicación en un hidrante.",
      respuestaIA: "Gracias por la observación. El hidrante fue reubicado 1 metro por obstrucción estructural. Adjuntamos plano corregido y fotos de la ejecución."
    }
  }

};

function cambiarEscenario() {
  const area = document.getElementById("areaSelect").value;
  const nivel = document.getElementById("nivelSelect").value;
  const escenario = document.getElementById("escenario");
  const promptInput = document.getElementById("promptInput");

  localStorage.setItem("area", area);
  localStorage.setItem("nivel", nivel);

  document.getElementById("analisis").classList.add("oculto");
  document.getElementById("respuesta").classList.add("oculto");
  promptInput.value = "";

  if (escenarios[area] && escenarios[area][nivel]) {
    escenario.innerText = escenarios[area][nivel].texto;
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
  const nivel = document.getElementById("nivelSelect").value;
  const analisis = document.getElementById("analisis");
  const respuesta = document.getElementById("respuesta");

  if (!area || !nivel || !prompt) {
    alert("Por favor, seleccioná un área, un nivel y escribí tu prompt.");
    return;
  }

  let nivelTexto = "🔴 Bajo";
  let claseNivel = "nivel-bajo";
  let sugerencia = "Tu prompt es muy general. Agregá contexto, objetivo y tono (ej: formal, urgente, cordial).";
  let explicacion = "El prompt no contiene información clara sobre lo que querés que haga la IA.";

  if (prompt.length > 30) {
    if (prompt.includes("redacta") || prompt.includes("correo") || prompt.includes("mensaje") || prompt.includes("respuesta")) {
      nivelTexto = "🟡 Medio";
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
      nivelTexto = "🟢 Alto";
      claseNivel = "nivel-alto";
      sugerencia = "¡Excelente! Prompt claro, completo y enfocado. La IA podrá ayudarte mejor.";
      explicacion = "El prompt tiene contexto, intención y detalles específicos.";
    }
  }

  analisis.innerHTML = `
    <strong>📊 Análisis del prompt:</strong><br>
    <b class="${claseNivel}">Nivel: ${nivelTexto}</b><br>
    <b>Explicación:</b> ${explicacion}<br>
    <b>Sugerencia:</b> ${sugerencia}
  `;
  respuesta.innerHTML = `<strong>🤖 Respuesta simulada de IA:</strong><br>${(escenarios[area] && escenarios[area][nivel]) ? escenarios[area][nivel].respuestaIA : 'No disponible.'}`;

  analisis.className = `evaluacion ${claseNivel}`;
  respuesta.classList.remove("oculto");
  respuesta.classList.add("respuesta", "highlight");

  setTimeout(() => respuesta.classList.remove("highlight"), 600);

  guardarEnHistorial(area, nivel, prompt, claseNivel);
  mostrarPantallaFinal(claseNivel);
}


function reiniciar() {
  document.getElementById("promptInput").value = "";
  document.getElementById("analisis").className = "evaluacion oculto";
  document.getElementById("respuesta").classList.add("oculto");
}

function exportarPDF() {
  const area = document.getElementById("areaSelect").value;
  const nivel = document.getElementById("nivelSelect").value;

  if (!area || !nivel) {
    alert("Seleccioná un área y nivel antes de exportar.");
    return;
  }

  const element = document.createElement("div");
  element.innerHTML = `
    <h2>Simulador IA - Resultado</h2>
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>Nivel:</strong> ${nivel}</p>
    <p><strong>Prompt:</strong> ${document.getElementById("promptInput").value}</p>
    <p>${document.getElementById("analisis").innerHTML}</p>
    <p>${document.getElementById("respuesta").innerHTML}</p>
  `;
  html2pdf().from(element).save(`resultado-ia-${area}-${nivel}.pdf`);
}

function toggleGuia() {
  const guia = document.getElementById("guia");
  guia.classList.toggle("oculto");
  localStorage.setItem("guiaVisible", !guia.classList.contains("oculto"));
}


window.addEventListener("DOMContentLoaded", () => {
  const guia = document.getElementById("guia");
  const guiaVisible = localStorage.getItem("guiaVisible");
  if (guiaVisible === "true") {
    guia.classList.remove("oculto");
  } else {
    guia.classList.add("oculto");
  }

  const areaGuardada = localStorage.getItem("area");
  const nivelGuardado = localStorage.getItem("nivel");

  if (areaGuardada) document.getElementById("areaSelect").value = areaGuardada;
  if (nivelGuardado) document.getElementById("nivelSelect").value = nivelGuardado;

  if (areaGuardada && nivelGuardado) cambiarEscenario();
});

function mostrarPantallaFinal(nivelDetectado) {
  const pantalla = document.getElementById("pantallaFinal");
  const insignia = document.getElementById("insigniaFinal");
  const estrellas = document.getElementById("estrellasFinal");

  let textoInsignia = "🎓 Participante";
  let estrellasHTML = "⭐";

  if (nivelDetectado === "nivel-medio") {
    textoInsignia = "🧠 Intermedio IA";
    estrellasHTML = "⭐⭐";
  } else if (nivelDetectado === "nivel-alto") {
    textoInsignia = "🥇 Experto en Prompts";
    estrellasHTML = "⭐⭐⭐";
  } else {
    textoInsignia = "🧩 Aprendiz Nivel 1";
    estrellasHTML = "⭐";
  }

  insignia.innerText = textoInsignia;
  estrellas.innerText = estrellasHTML;
  pantalla.classList.remove("oculto");
}

function guardarEnHistorial(area, nivel, prompt, nivelDetectado) {
  const historial = JSON.parse(localStorage.getItem("historialIA")) || [];

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const sector = document.getElementById("sector").value.trim();

  historial.push({
    fecha: new Date().toLocaleString(),
    nombre,
    apellido,
    sector,
    area,
    nivel,
    prompt,
    evaluacion: nivelDetectado
  });

  localStorage.setItem("historialIA", JSON.stringify(historial));
}


function mostrarHistorial() {
  const tablaContenedor = document.getElementById("historialTabla");
  const historial = JSON.parse(localStorage.getItem("historialIA")) || [];

  if (historial.length === 0) {
    tablaContenedor.innerHTML = "<p>No hay intentos guardados.</p>";
  } else {
    let tabla = `<table><thead><tr>
      <th>Fecha</th><th>Nombre</th><th>Apellido</th><th>Sector</th>
      <th>Área</th><th>Nivel</th><th>Prompt</th><th>Evaluación</th>
    </tr></thead><tbody>`;

    historial.forEach(item => {
      tabla += `<tr>
        <td>${item.fecha}</td>
        <td>${item.nombre}</td>
        <td>${item.apellido}</td>
        <td>${item.sector}</td>
        <td>${item.area}</td>
        <td>${item.nivel}</td>
        <td>${item.prompt}</td>
        <td>${item.evaluacion.replace("nivel-", "").toUpperCase()}</td>
      </tr>`;
    });

    tabla += "</tbody></table>";
    tablaContenedor.innerHTML = tabla;
  }

  document.getElementById("historial").classList.remove("oculto");
}


function ocultarHistorial() {
  document.getElementById("historial").classList.add("oculto");
}

function exportarHistorial() {
  const historial = JSON.parse(localStorage.getItem("historialIA")) || [];
  const nombre = document.getElementById("nombre").value || "(Sin nombre)";
  const apellido = document.getElementById("apellido").value || "";
  const sector = document.getElementById("sector").value || "(Sin sector)";

  if (historial.length === 0) {
    alert("No hay intentos guardados.");
    return;
  }

  let html = `<h2>Historial de práctica - Simulador IA</h2>`;
  html += `<p><strong>Participante:</strong> ${nombre} ${apellido}<br>
           <strong>Sector:</strong> ${sector}</p>`;

  html += `<table border="1" style="border-collapse: collapse; width: 100%; font-size: 12px;">
    <thead><tr><th>Fecha</th><th>Área</th><th>Nivel</th><th>Prompt</th><th>Evaluación</th></tr></thead><tbody>`;
  historial.forEach(item => {
    html += `<tr>
      <td>${item.fecha}</td>
      <td>${item.area}</td>
      <td>${item.nivel}</td>
      <td>${item.prompt}</td>
      <td>${item.evaluacion.replace("nivel-", "").toUpperCase()}</td>
    </tr>`;
  });
  html += "</tbody></table>";

  const element = document.createElement("div");
  element.innerHTML = html;
  html2pdf().from(element).save(`historial-${nombre}-${apellido}.pdf`);
}

function borrarHistorial() {
  const confirmar = confirm("¿Estás seguro de que querés borrar todo el historial y reiniciar los campos?");
  if (!confirmar) return;

  localStorage.removeItem("historialIA");

  document.getElementById("historialTabla").innerHTML = "<p>Historial borrado exitosamente.</p>";

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("sector").value = "";
  document.getElementById("areaSelect").selectedIndex = 0;
  document.getElementById("nivelSelect").selectedIndex = 0;
  document.getElementById("promptInput").value = "";

  document.getElementById("analisis").classList.add("oculto");
  document.getElementById("respuesta").classList.add("oculto");
  document.getElementById("escenario").classList.add("oculto");
}

