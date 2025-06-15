const escenarios = {
  cobranzas: {
    facil: {
      texto: "💼 Debés enviar un mail a un cliente recordando el pago de una factura vencida hace 15 días, con un tono cordial.",
      objetivo: "Redactar un mensaje profesional que recuerde una deuda sin generar conflicto con el cliente.",
      criterios: [
        "Incluye número y fecha de la factura.",
        "Utiliza un tono cordial y profesional.",
        "Incluye agradecimiento anticipado."
      ],
      tips: [
        "Especificá claramente el número de factura y la fecha en que venció.",
        "Mantené un tono cordial y respetuoso para cuidar la relación comercial.",
        "Incluí un cierre agradeciendo la pronta colaboración del cliente."
      ],
      ejemploPrompt: "Redactá un mail cordial para el cliente Juan Pérez recordando el pago de la factura N°248 vencida hace 15 días.",
      respuestaIA: "Estimado cliente, le recordamos que la factura N°248 continúa pendiente de pago. Agradeceremos su colaboración para regularizar el saldo. Quedamos atentos. Saludos cordiales."
    },
    intermedio: {
      texto: "💼 Necesitás redactar un mail más persuasivo para un cliente que ya recibió dos avisos y aún no paga.",
      objetivo: "Lograr que el cliente actúe rápidamente frente a la deuda sin deteriorar la relación comercial.",
      criterios: [
        "Hace mención a los avisos anteriores.",
        "Explica por qué es importante regularizar la deuda.",
        "Conserva un tono profesional aunque más firme."
      ],
      tips: [
        "Recordá que el cliente ya fue contactado dos veces.",
        "Explicá la urgencia de resolver la situación, sin sonar amenazante.",
        "Usá un lenguaje firme pero siempre respetuoso."
      ],
      ejemploPrompt: "Redactá un mail persuasivo para un cliente que ya recibió dos avisos y aún no pagó la factura N°248.",
      respuestaIA: "Estimado, le recordamos nuevamente que la factura N°248 está vencida hace 15 días. Es fundamental regularizarla esta semana para evitar suspensión de servicios. Quedamos atentos a su confirmación."
    },
    dificil: {
      texto: "💼 Prepará un mensaje breve pero firme para un cliente moroso, incluyendo monto exacto, fecha límite y consecuencias.",
      objetivo: "Informar con firmeza una situación crítica de deuda, detallando consecuencias sin romper la relación comercial.",
      criterios: [
        "Incluye monto adeudado y fecha límite clara.",
        "Indica posibles consecuencias si no se regulariza la deuda.",
        "Mantiene tono serio y profesional."
      ],
      tips: [
        "Incluí el monto exacto adeudado y desde cuándo está vencido.",
        "Establecé una fecha límite clara para el pago.",
        "Indicá de forma directa las consecuencias de no cumplir (como suspensión o acciones legales)."
      ],
      ejemploPrompt: "Redactá un mensaje breve y firme para un cliente moroso, indicando el monto ($120.000), la fecha límite (15/6) y las consecuencias.",
      respuestaIA: "Estimado, le informamos que el saldo pendiente es de $120.000, vencido desde el 1/6. Solicitamos el pago antes del 15/6 para evitar acciones legales o suspensión de servicios."
    }
  },
  rrhh: {
    facil: {
      texto: "👥 Un empleado pidió 2 días de licencia sin goce de sueldo. Necesitás responder de manera formal.",
      objetivo: "Redactar una respuesta formal, clara y respetuosa a una solicitud de licencia.",
      criterios: [
        "Confirma los días solicitados.",
        "Utiliza un tono formal y claro.",
        "Menciona el nombre del empleado."
      ],
      tips: [
        "Repetí los días solicitados para que quede claro.",
        "Mantené un tono formal en todo momento.",
        "Incluí una firma o cierre cordial."
      ],
      ejemploPrompt: "Redactá una respuesta formal para Juan Pérez, aprobando su licencia sin goce de sueldo los días 14 y 15 de junio.",
      respuestaIA: "Estimado Juan, confirmamos que su solicitud por los días 14 y 15 de junio fue aprobada. Quedamos atentos. Saludos cordiales, RRHH."
    },
    intermedio: {
      texto: "👥 Redactá una comunicación interna para todo el personal sobre el nuevo proceso de solicitud de vacaciones.",
      objetivo: "Informar de forma clara y ordenada un nuevo procedimiento de RRHH a todos los empleados.",
      criterios: [
        "Explica en qué consiste el nuevo proceso.",
        "Indica la fecha de inicio del nuevo procedimiento.",
        "Incluye un llamado a la acción o recurso adicional."
      ],
      tips: [
        "Evitá tecnicismos, buscá claridad general.",
        "Indicá desde qué fecha entra en vigencia el nuevo proceso.",
        "Podés sugerir consultar un instructivo o canal de dudas."
      ],
      ejemploPrompt: "Redactá una comunicación interna para todo el personal sobre el nuevo proceso de solicitud de vacaciones a partir del 1/7.",
      respuestaIA: "Estimado equipo, a partir del 1/7 todas las solicitudes de vacaciones deberán gestionarse a través del nuevo portal interno. Adjuntamos instructivo. RRHH."
    },
    dificil: {
      texto: "👥 Prepará una respuesta formal para una queja recibida por parte de un empleado sobre maltrato de un supervisor.",
      objetivo: "Brindar una respuesta empática, profesional y con seguimiento ante una denuncia interna.",
      criterios: [
        "Reconoce formalmente la recepción de la queja.",
        "Demuestra empatía y compromiso.",
        "Describe los pasos a seguir."
      ],
      tips: [
        "Agradecé que haya comunicado la situación.",
        "Mantené la confidencialidad y respeto en el mensaje.",
        "Explicá brevemente qué se hará con la información."
      ],
      ejemploPrompt: "Redactá una respuesta formal para un empleado que presentó una queja por maltrato de un supervisor.",
      respuestaIA: "Estimado/a, lamentamos lo sucedido. Queremos informarle que su reclamo ha sido registrado y será analizado por el área de RRHH. Nos contactaremos para una reunión de seguimiento."
    }
  },
  finanzas: {
    facil: {
      texto: "💰 Debés redactar un resumen mensual de ingresos y egresos para enviar a la gerencia.",
      objetivo: "Comunicar de forma clara el balance mensual para su revisión por la gerencia.",
      criterios: [
        "Informa ingresos y egresos con sus montos.",
        "Indica saldo final.",
        "Usa redacción clara y concisa."
      ],
      tips: [
        "Mostrá los valores totales (no el detalle línea por línea).",
        "Incluí el mes al que corresponde el reporte.",
        "Cerrá con el saldo final y opcionalmente adjunto."
      ],
      ejemploPrompt: "Redactá un resumen mensual de ingresos y egresos de mayo para enviar a la gerencia.",
      respuestaIA: "Durante mayo ingresaron $8.500.000 y egresaron $6.200.000, resultando en un saldo positivo de $2.300.000. Se adjunta detalle."
    },
    intermedio: {
      texto: "💰 Redactá un mensaje para solicitar a un proveedor una nota de crédito por diferencia de precios.",
      objetivo: "Solicitar formalmente una corrección económica por diferencia detectada en una factura.",
      criterios: [
        "Hace mención a la factura en cuestión.",
        "Indica que hay una diferencia detectada.",
        "Solicita nota de crédito de manera formal."
      ],
      tips: [
        "Detallá brevemente la diferencia encontrada.",
        "Pedí una nota de crédito, no un nuevo pago.",
        "Adjuntá el documento con el error si es posible."
      ],
      ejemploPrompt: "Redactá un mensaje formal solicitando una nota de crédito al proveedor por diferencia en la factura N°783.",
      respuestaIA: "Estimado, detectamos una diferencia en la factura N°783. Solicitamos nota de crédito correspondiente. Adjunto detalle. Gracias."
    },
    dificil: {
      texto: "💰 Escribí un correo para rechazar un presupuesto por estar fuera del presupuesto anual aprobado.",
      objetivo: "Rechazar una propuesta sin cerrar la relación comercial.",
      criterios: [
        "Agradece la propuesta recibida.",
        "Explica brevemente el motivo del rechazo.",
        "Ofrece apertura para futuras oportunidades."
      ],
      tips: [
        "Agradecé la propuesta recibida con respeto.",
        "Sé claro con el motivo del rechazo: el presupuesto aprobado no lo permite.",
        "Dejá abierta la posibilidad de seguir trabajando a futuro."
      ],
      ejemploPrompt: "Redactá un correo para rechazar una propuesta de proveedor por exceder el presupuesto anual.",
      respuestaIA: "Estimado proveedor, agradecemos su propuesta. Sin embargo, excede el presupuesto asignado para este trimestre, por lo que no podremos avanzar. Quedamos atentos a futuras propuestas."
    }
  },
  compras: {
    facil: {
      texto: "📦 Querés solicitar una nueva cotización a un proveedor habitual por aumento de precios.",
      objetivo: "Solicitar actualización de precios de forma clara y amable.",
      criterios: [
        "Solicita una cotización actualizada.",
        "Menciona que se trata de productos habituales.",
        "Incluye un cierre cortés."
      ],
      tips: [
        "Indicá que ya trabajan juntos regularmente.",
        "Pedí precios actualizados para los productos de siempre.",
        "Mantené una relación de cordialidad en el mensaje."
      ],
      ejemploPrompt: "Solicitá una cotización actualizada para los productos habituales al proveedor.",
      respuestaIA: "Estimado proveedor, le solicitamos una cotización actualizada para los productos habituales. Agradecemos su atención."
    },
    intermedio: {
      texto: "📦 Enviá un correo formal para realizar una orden de compra por 5 unidades de un producto técnico.",
      objetivo: "Emitir una orden de compra clara, con solicitud de documentación.",
      criterios: [
        "Confirma el producto y cantidad.",
        "Solicita factura proforma.",
        "Consulta por tiempo de entrega."
      ],
      tips: [
        "Detallá el producto y la cantidad exacta.",
        "Pedí factura proforma para formalizar la operación.",
        "Incluí pregunta sobre plazos de entrega estimados."
      ],
      ejemploPrompt: "Redactá un correo para confirmar la compra de 5 unidades del modelo ABC123 y solicitar factura proforma.",
      respuestaIA: "Estimado, confirmamos la compra de 5 unidades del modelo ABC123. Por favor, enviarnos factura proforma y plazo estimado de entrega. Gracias."
    },
    dificil: {
      texto: "📦 Comunicá la cancelación de una orden de compra por retrasos reiterados en la entrega.",
      objetivo: "Cancelar de forma formal y respetuosa una orden incumplida.",
      criterios: [
        "Hace referencia al número de orden.",
        "Explica el motivo de la cancelación.",
        "Mantiene cordialidad para futuras operaciones."
      ],
      tips: [
        "Mencioná el número de orden claramente.",
        "Explicá que hubo retrasos reiterados que motivan la cancelación.",
        "Mantené el respeto para no cerrar futuras oportunidades."
      ],
      ejemploPrompt: "Redactá un correo para cancelar la orden N°3442 por incumplimientos en los plazos acordados.",
      respuestaIA: "Estimado proveedor, lamentablemente debemos cancelar la orden N°3442 por incumplimientos en los plazos acordados. Esperamos poder retomar futuras operaciones. Saludos cordiales."
    }
  },
  logistica: {
    facil: {
      texto: "🚚 Redactá un mensaje para confirmar entrega programada para mañana.",
      objetivo: "Confirmar una entrega futura con claridad y cordialidad.",
      criterios: [
        "Incluye número de pedido.",
        "Especifica fecha y franja horaria.",
        "Incluye un cierre de agradecimiento."
      ],
      tips: [
        "Mencioná claramente el número de pedido.",
        "Indicá la fecha exacta y franja horaria de la entrega.",
        "Usá un tono cálido y profesional."
      ],
      ejemploPrompt: "Redactá un mensaje confirmando la entrega del pedido N°1123 para mañana entre las 9 y 13 hs.",
      respuestaIA: "Confirmamos que la entrega del pedido N°1123 está programada para mañana entre las 9 y 13 hs. Gracias por su confianza."
    },
    intermedio: {
      texto: "🚚 Enviá un correo notificando demora de 24 hs en una entrega por condiciones climáticas.",
      objetivo: "Notificar una demora con claridad, empatía y justificación.",
      criterios: [
        "Menciona el número de pedido.",
        "Explica la causa de la demora.",
        "Solicita comprensión o disculpas."
      ],
      tips: [
        "Sé claro al comunicar el retraso y su motivo.",
        "Transmití empatía por el posible inconveniente.",
        "Ofrecé nueva fecha de entrega o seguimiento."
      ],
      ejemploPrompt: "Redactá un correo notificando al cliente la demora de 24 hs en la entrega N°1123 por condiciones climáticas.",
      respuestaIA: "Lamentamos informar que la entrega N°1123 sufrirá una demora de 24 hs debido a condiciones climáticas adversas. Agradecemos su comprensión."
    },
    dificil: {
      texto: "🚚 Redactá un informe explicando desvío de ruta y reprogramación de entrega.",
      objetivo: "Justificar formalmente un cambio en el itinerario de entrega.",
      criterios: [
        "Explica motivo del desvío.",
        "Informa nueva fecha de entrega.",
        "Incluye adjunto o cronograma si aplica."
      ],
      tips: [
        "Mencioná el motivo específico del desvío (ej: corte de ruta).",
        "Indicá claramente la nueva fecha de entrega.",
        "Si tenés un cronograma actualizado, ofrecelo adjunto."
      ],
      ejemploPrompt: "Redactá un informe explicando el desvío de ruta por corte en la RP52 y la reprogramación de la entrega para el 15/6.",
      respuestaIA: "El desvío de ruta fue necesario por corte en la RP52. Reprogramamos entrega para el 15/6 en el mismo horario. Adjuntamos nuevo cronograma."
    }
  },
  ingenieria: {
    facil: {
      texto: "🛠️ Escribí un comentario técnico explicando el uso de un nuevo material ignífugo.",
      objetivo: "Describir técnicamente las propiedades de un nuevo material cumpliendo normativas.",
      criterios: [
        "Describe el material y su beneficio principal.",
        "Menciona la normativa aplicable.",
        "Redacta con claridad técnica."
      ],
      tips: [
        "Indicá el nombre y tipo del material.",
        "Explicá qué mejora respecto a materiales anteriores.",
        "Mencioná si cumple con alguna norma IRAM o NFPA."
      ],
      ejemploPrompt: "Escribí un comentario técnico sobre el material XP400 y su resistencia térmica según norma IRAM.",
      respuestaIA: "El nuevo material XP400 mejora la resistencia térmica en 20%. Es apto para instalaciones interiores según norma IRAM."
    },
    intermedio: {
      texto: "🛠️ Redactá observaciones luego de una inspección de obra incompleta.",
      objetivo: "Registrar hallazgos técnicos de manera objetiva y profesional.",
      criterios: [
        "Describe claramente lo observado.",
        "Recomienda acciones a seguir.",
        "Mantiene objetividad técnica."
      ],
      tips: [
        "Indicá el área afectada o componente observado.",
        "Describí de forma precisa lo que falta o está mal instalado.",
        "Sugerí una acción o corrección a realizar."
      ],
      ejemploPrompt: "Redactá observaciones tras inspección de obra: falta de fijación en soporte de red húmeda en área C.",
      respuestaIA: "Se observa falta de fijación en soporte de red húmeda en área C. Se recomienda ajustar antes de prueba hidráulica."
    },
    dificil: {
      texto: "🛠️ Prepará una justificación técnica para cambiar especificaciones en planos aprobados.",
      objetivo: "Sustentar técnicamente una modificación posterior a la aprobación de planos.",
      criterios: [
        "Explica la razón técnica del cambio.",
        "Propone alternativa válida.",
        "Incluye documentación de respaldo (mencionada o adjunta)."
      ],
      tips: [
        "Indicá cuál era la especificación original y por qué ya no aplica.",
        "Proponé la nueva especificación técnica o material.",
        "Mencioná el respaldo técnico: informe, plano o cálculo."
      ],
      ejemploPrompt: "Justificá técnicamente el uso de tubería flexible en lugar de caño rígido por incompatibilidad estructural.",
      respuestaIA: "Por incompatibilidad con estructura existente, se propone usar tubería flexible en lugar de caño rígido. Adjuntamos memorándum técnico y planos revisados."
    }
  },
  sdr: {
    facil: {
      texto: "📞 Escribí un mensaje corto para contactar a un nuevo prospecto vía LinkedIn.",
      objetivo: "Iniciar contacto comercial con un mensaje breve y atractivo.",
      criterios: [
        "Incluye presentación personal.",
        "Menciona un punto de interés o problema del prospecto.",
        "Termina con una invitación amigable a conversar."
      ],
      tips: [
        "Presentate con tu nombre o función.",
        "Identificá un interés común o necesidad del sector.",
        "No vendas de entrada, solo proponé charlar."
      ],
      ejemploPrompt: "Redactá un mensaje breve para contactar a un prospecto en LinkedIn sobre soluciones de protección contra incendios.",
      respuestaIA: "Hola, vi que trabajás en seguridad industrial. ¿Te interesaría conocer soluciones para protección contra incendios?"
    },
    intermedio: {
      texto: "📞 Redactá un correo de seguimiento después de una reunión inicial con un prospecto.",
      objetivo: "Reforzar el vínculo post-reunión y proponer el próximo paso.",
      criterios: [
        "Agradece la reunión realizada.",
        "Adjunta o menciona material relevante.",
        "Sugiere una acción futura (reunión, demo, etc.)."
      ],
      tips: [
        "Mantené el tono cercano pero profesional.",
        "Agregá un recurso útil (presentación o brochure).",
        "Proponé una fecha concreta o pregunta abierta."
      ],
      ejemploPrompt: "Redactá un correo de seguimiento agradeciendo la reunión y proponiendo una demo la próxima semana.",
      respuestaIA: "Gracias por tu tiempo hoy. Te adjunto la presentación y quedo atento a cualquier consulta. ¿Coordinamos una demo la próxima semana?"
    },
    dificil: {
      texto: "📞 Creá una propuesta breve y atractiva para enviar a un prospecto difícil de contactar.",
      objetivo: "Captar el interés de un prospecto inactivo con un mensaje conciso y de alto valor.",
      criterios: [
        "Enfoca en beneficios concretos.",
        "Usa lenguaje breve y directo.",
        "Incluye invitación clara a reunirse."
      ],
      tips: [
        "Identificá una mejora o problema que podés resolver.",
        "Evitá textos largos, sé directo y atractivo.",
        "Terminá con una propuesta clara y breve."
      ],
      ejemploPrompt: "Redactá una propuesta breve para un prospecto difícil de contactar, invitándolo a una reunión de 15 minutos.",
      respuestaIA: "Hola, trabajamos con industrias como la tuya ayudando a reducir riesgos y cumplir normativas. Te propongo 15 minutos para contarte cómo."
    }
  },
  ventas: {
    facil: {
      texto: "🛍️ Querés enviar un mensaje de seguimiento por WhatsApp a un cliente que recibió presupuesto hace 10 días.",
      objetivo: "Realizar un seguimiento cordial y oportuno para impulsar una respuesta del cliente.",
      criterios: [
        "Saluda cordialmente al cliente.",
        "Consulta si revisó la propuesta enviada.",
        "Se ofrece a responder dudas o consultas."
      ],
      tips: [
        "Usá un tono amable y no invasivo.",
        "Recordá cuándo se envió el presupuesto.",
        "Mostrá disposición para resolver dudas o ajustar la oferta."
      ],
      ejemploPrompt: "Redactá un mensaje de seguimiento por WhatsApp para un cliente que recibió presupuesto hace 10 días.",
      respuestaIA: "Hola, ¿cómo estás? Quería saber si tuviste oportunidad de revisar la propuesta que te enviamos. Quedo a disposición."
    },
    intermedio: {
      texto: "🛍️ Redactá una respuesta para un cliente que pidió un descuento por cantidad.",
      objetivo: "Responder con amabilidad y claridad a una solicitud de descuento, incluyendo una propuesta concreta.",
      criterios: [
        "Agradece el interés del cliente.",
        "Ofrece un descuento o justifica por qué no se puede.",
        "Adjunta cotización ajustada si aplica."
      ],
      tips: [
        "Mostrá buena predisposición a negociar.",
        "Indicá el umbral o cantidad mínima requerida.",
        "Incluí el nuevo precio si hiciste ajustes."
      ],
      ejemploPrompt: "Redactá una respuesta para un cliente que pide descuento por compras superiores a 20 unidades.",
      respuestaIA: "Hola, gracias por tu consulta. Podemos ofrecerte un 10% de descuento por compras superiores a 20 unidades. Te paso la cotización ajustada."
    },
    dificil: {
      texto: "🛍️ Escribí un mail para recuperar a un cliente que dejó de comprar hace 6 meses.",
      objetivo: "Reconectar con un cliente inactivo ofreciendo una propuesta personalizada y atractiva.",
      criterios: [
        "Personaliza el mensaje con nombre o historial.",
        "Consulta si tiene alguna necesidad actual.",
        "Ofrece un beneficio o promoción exclusiva."
      ],
      tips: [
        "Mencioná que notaste su inactividad.",
        "Mostrá interés genuino en ayudar.",
        "Ofrecé un incentivo especial como excusa para reactivar el contacto."
      ],
      ejemploPrompt: "Redactá un mail para recuperar a un cliente inactivo, ofreciendo una promoción exclusiva.",
      respuestaIA: "Hola Juan, notamos que hace un tiempo no realizás compras con nosotros. ¿Hay algo en lo que podamos ayudarte? Te compartimos una promo exclusiva por tu fidelidad."
    }
  },
  atencion: {
    facil: {
      texto: "📞 Un cliente pregunta si su matafuego está vencido y cuándo puede renovarlo.",
      objetivo: "Brindar una respuesta clara y útil sobre el estado del matafuego y la disponibilidad para renovarlo.",
      criterios: [
        "Verifica la fecha de vencimiento.",
        "Ofrece una fecha o franja para la renovación.",
        "Usa un tono amable y directo."
      ],
      tips: [
        "Chequeá la fecha de vencimiento antes de responder.",
        "Ofrecé una solución rápida o una posible visita.",
        "Mantené un tono empático y práctico."
      ],
      ejemploPrompt: "Redactá una respuesta para un cliente que consulta si su matafuego está vencido y cuándo puede renovarlo.",
      respuestaIA: "Hola, tu equipo vence el 20 de junio. Podemos pasar esta semana para renovarlo. ¿Te parece bien?"
    },
    intermedio: {
      texto: "📞 Respondé a una queja de un cliente por retraso en la visita técnica.",
      objetivo: "Reconocer el problema, disculparse y ofrecer una solución concreta.",
      criterios: [
        "Reconoce el retraso.",
        "Ofrece una nueva fecha o solución.",
        "Demuestra empatía y profesionalismo."
      ],
      tips: [
        "Pedí disculpas sinceramente, sin excusas vacías.",
        "Explicá el motivo si es necesario, pero enfocate en la solución.",
        "Reprogramá o compensá de forma clara."
      ],
      ejemploPrompt: "Redactá una respuesta para un cliente que se queja por retraso en la visita técnica.",
      respuestaIA: "Lamentamos el retraso. Tuvimos una reprogramación por fuerza mayor. Reagendamos para mañana a las 10 hs. Gracias por la comprensión."
    },
    dificil: {
      texto: "📞 Respondé con empatía a un cliente que recibió mal el producto y está molesto.",
      objetivo: "Contener emocionalmente al cliente y ofrecer una solución inmediata.",
      criterios: [
        "Ofrece disculpas sinceras.",
        "Explica cómo se resolverá el problema.",
        "Demuestra compromiso de mejora."
      ],
      tips: [
        "Mostrá empatía real, no frases vacías.",
        "Enfocate en la solución inmediata (reemplazo, retiro, etc.).",
        "Prometé mejorar procesos si aplica."
      ],
      ejemploPrompt: "Redactá una respuesta empática para un cliente que recibió mal el producto y está molesto.",
      respuestaIA: "Lamentamos sinceramente lo sucedido. Ya gestionamos el reemplazo urgente y mejoraremos los controles. Gracias por tu paciencia."
    }
  },
  tecnica: {
    facil: {
      texto: "🔧 Debés armar un paso a paso para detectar una falla eléctrica en una central de incendios.",
      objetivo: "Redactar instrucciones claras para identificar una falla eléctrica.",
      criterios: [
        "Organiza los pasos de forma lógica.",
        "Incluye medidas de seguridad.",
        "Cubre las causas más comunes de falla."
      ],
      tips: [
        "Arrancá siempre por las verificaciones más simples.",
        "Incluí advertencias si hay riesgo eléctrico.",
        "Usá numeración o viñetas para ordenar el proceso."
      ],
      ejemploPrompt: "Redactá un paso a paso para detectar una falla eléctrica en una central de incendios.",
      respuestaIA: "1. Revisar alimentación general. 2. Comprobar baterías. 3. Testear sensores. 4. Reiniciar la central. 5. Registrar la intervención."
    },
    intermedio: {
      texto: "🔧 Redactá un informe corto sobre una prueba hidráulica exitosa.",
      objetivo: "Documentar de forma técnica y clara los resultados de una prueba.",
      criterios: [
        "Menciona fecha de la prueba.",
        "Indica parámetros medidos.",
        "Concluye si el sistema está listo."
      ],
      tips: [
        "Sé concreto y evitá adornos innecesarios.",
        "Indicá presión, duración y observaciones.",
        "Concluí con estado general del sistema."
      ],
      ejemploPrompt: "Redactá un informe corto sobre una prueba hidráulica exitosa realizada el 12/6.",
      respuestaIA: "Prueba realizada el 12/6, sin pérdidas ni obstrucciones. Presión mantenida 1 hora a 8 bar. Sistema listo para inspección final."
    },
    dificil: {
      texto: "🔧 Escribí una recomendación técnica para cambiar detectores por obsolescencia.",
      objetivo: "Justificar técnicamente la renovación de equipamiento obsoleto.",
      criterios: [
        "Menciona el modelo actual y su antigüedad.",
        "Justifica la necesidad del cambio.",
        "Presenta beneficios del nuevo modelo."
      ],
      tips: [
        "Indicá los años de uso o la norma que limita su vida útil.",
        "Resaltá riesgos de seguir usando detectores viejos.",
        "Mostrá mejoras del nuevo modelo: precisión, tecnología, etc."
      ],
      ejemploPrompt: "Redactá una recomendación técnica para reemplazar detectores XP90 por XN100 por obsolescencia.",
      respuestaIA: "Sugerimos reemplazar detectores serie XP90 por modelo XN100 por vencimiento de vida útil (10 años). Mejora rendimiento y reduce falsas alarmas."
    }
  },
  cotizaciones: {
    facil: {
      texto: "📄 Vas a enviar por mail una cotización formal con detalles técnicos y precios.",
      objetivo: "Redactar una cotización profesional clara, completa y con disposición a responder dudas.",
      criterios: [
        "Incluye los detalles técnicos y económicos.",
        "Usa un tono formal.",
        "Ofrece contacto o disponibilidad para consultas."
      ],
      tips: [
        "Indicá qué incluye exactamente la cotización.",
        "Asegurate de usar un lenguaje técnico y preciso.",
        "Cerrá con una frase que invite a continuar la conversación."
      ],
      ejemploPrompt: "Redactá un mail formal para enviar una cotización con detalles técnicos y precios.",
      respuestaIA: "Estimado cliente, adjuntamos la cotización solicitada con los detalles técnicos y económicos. Quedamos atentos a comentarios."
    },
    intermedio: {
      texto: "📄 Redactá una propuesta comercial para instalación en galpón industrial.",
      objetivo: "Presentar una propuesta clara, técnica y comercial que pueda ser evaluada por el cliente.",
      criterios: [
        "Describe el alcance del servicio.",
        "Incluye materiales y mano de obra.",
        "Menciona planos u otros adjuntos si corresponde."
      ],
      tips: [
        "Indicá la superficie, ubicación o datos del sitio.",
        "Listá de forma general qué incluye (materiales, instalación, planos).",
        "Usá un tono claro, profesional y enfocado en valor."
      ],
      ejemploPrompt: "Redactá una propuesta comercial para instalar un sistema de detección y extinción en un galpón de 500 m².",
      respuestaIA: "Estimado, ofrecemos sistema de detección y extinción para galpón de 500 m², incluye planos, materiales y mano de obra. Ver detalle adjunto."
    },
    dificil: {
      texto: "📄 Escribí un mensaje aclarando una diferencia entre dos versiones de cotización.",
      objetivo: "Explicar una diferencia entre versiones de cotización de forma clara y profesional.",
      criterios: [
        "Aclara de forma precisa la diferencia.",
        "Justifica el cambio o incorporación.",
        "Adjunta ambas versiones para referencia."
      ],
      tips: [
        "Indicá cuál es el cambio entre una y otra.",
        "Explicá si fue a pedido del cliente o por mejora de alcance.",
        "Adjuntá ambas versiones con claridad."
      ],
      ejemploPrompt: "Redactá un mensaje aclarando la diferencia entre dos versiones de cotización por incorporación de sensores.",
      respuestaIA: "Hola, la diferencia entre la cotización anterior y la actual se debe a la incorporación de sensores adicionales solicitados. Adjunto ambas versiones para comparar."
    }
  },
  obras: {
    facil: {
      texto: "🏗️ Necesitás redactar un informe breve de avance de obra para instalación contra incendios.",
      objetivo: "Informar de forma clara el progreso de obra indicando tareas realizadas, pendientes y tiempo estimado.",
      criterios: [
        "Menciona tareas realizadas y porcentaje de avance.",
        "Indica tareas pendientes.",
        "Estima el tiempo restante."
      ],
      tips: [
        "Indicá la fecha del reporte.",
        "Sé claro al indicar qué se hizo y qué falta.",
        "Agregá una estimación realista de días restantes."
      ],
      ejemploPrompt: "Redactá un informe breve de avance de obra al 11/6 para instalación contra incendios.",
      respuestaIA: "Al 11/6: cañerías principales instaladas (100%), pruebas hidráulicas iniciadas, rociadores en área B pendientes. Tiempo estimado: 3 días."
    },
    intermedio: {
      texto: "🏗️ Redactá un correo para solicitar planos actualizados al cliente.",
      objetivo: "Solicitar de forma formal los planos necesarios para avanzar con tareas programadas.",
      criterios: [
        "Solicita los planos actualizados.",
        "Explica por qué son necesarios.",
        "Agradece la colaboración del cliente."
      ],
      tips: [
        "Indicá que se trata de un requerimiento para avanzar.",
        "Sé formal y claro en la solicitud.",
        "Usá un cierre agradecido y profesional."
      ],
      ejemploPrompt: "Redactá un correo solicitando planos actualizados para avanzar con las tareas programadas.",
      respuestaIA: "Estimado, necesitamos los planos actualizados para avanzar con las tareas programadas. Agradeceremos los envíen a la brevedad. Gracias."
    },
    dificil: {
      texto: "🏗️ Escribí una respuesta a una auditoría que detectó una diferencia de ubicación en un hidrante.",
      objetivo: "Responder de forma técnica y clara una observación de auditoría, justificando el cambio.",
      criterios: [
        "Reconoce la observación.",
        "Explica el motivo técnico del cambio.",
        "Adjunta o menciona documentación de respaldo."
      ],
      tips: [
        "Indicá que el cambio fue justificado técnicamente.",
        "Explicá el motivo real (obstáculo estructural, normativa, etc.).",
        "Mencioná plano corregido o evidencia que respalde la decisión."
      ],
      ejemploPrompt: "Redactá una respuesta a una auditoría por diferencia de ubicación en un hidrante, adjuntando plano corregido.",
      respuestaIA: "Gracias por la observación. El hidrante fue reubicado 1 metro por obstrucción estructural. Adjuntamos plano corregido y fotos de la ejecución."
    }
  },
  sistemas: {
    facil: {
      texto: "💻 Un usuario reporta que no puede acceder a su correo desde el navegador. Necesitás responder y brindarle una solución inicial.",
      objetivo: "Guiar al usuario de forma clara en la solución básica de un problema de acceso.",
      criterios: [
        "Confirma que recibió el reporte.",
        "Sugiere una verificación básica (conexión, navegador, contraseña).",
        "Usa un tono claro y accesible."
      ],
      tips: [
        "Agradecé al usuario por informar el problema.",
        "Sugerí acciones simples como reiniciar navegador o verificar contraseña.",
        "Si el problema persiste, indicá que será escalado."
      ],
      ejemploPrompt: "Redactá una respuesta clara a un usuario que no puede acceder a su correo desde el navegador.",
      respuestaIA: "Hola, gracias por informarnos. Por favor, verificá si tenés conexión a Internet, intentá cerrar y volver a abrir el navegador o revisar tu contraseña. Si sigue sin funcionar, avisame y lo derivamos."
    },
    intermedio: {
      texto: "💻 Recibiste un ticket solicitando automatizar la creación de usuarios nuevos en Active Directory. Necesitás responder con viabilidad y pasos iniciales.",
      objetivo: "Analizar el requerimiento técnico e indicar los primeros pasos hacia la automatización.",
      criterios: [
        "Confirma recepción del ticket.",
        "Evalúa brevemente la viabilidad.",
        "Sugiere pasos o recursos para avanzar."
      ],
      tips: [
        "Indicá si se puede hacer con PowerShell o scripts.",
        "Ofrecé un paso inicial como definir los campos necesarios.",
        "Podés proponer una reunión técnica si es complejo."
      ],
      ejemploPrompt: "Redactá una respuesta a un ticket que pide automatizar la creación de usuarios nuevos en Active Directory.",
      respuestaIA: "Gracias por el pedido. Es posible automatizarlo mediante PowerShell y plantillas predefinidas. Para avanzar, necesitaremos definir los campos estándar (nombre, área, permisos). Podemos agendar una reunión para revisarlo."
    },
    dificil: {
      texto: "💻 Tenés que redactar un informe técnico para justificar la migración de servidores a la nube, con argumentos sólidos para gerencia.",
      objetivo: "Explicar en términos claros y técnicos las razones estratégicas de una migración a la nube.",
      criterios: [
        "Presenta al menos 2 beneficios concretos (seguridad, escalabilidad, costos).",
        "Identifica limitaciones actuales del sistema local.",
        "Usa un lenguaje técnico-profesional sin ser excesivamente complejo."
      ],
      tips: [
        "Mostrá comparativas entre infraestructura local y en la nube.",
        "Mencioná aspectos como backups, escalabilidad, accesibilidad.",
        "Cuidá el tono: orientado a decisión gerencial, no demasiado técnico."
      ],
      ejemploPrompt: "Redactá un informe técnico breve justificando la migración de servidores a la nube para presentarlo a gerencia.",
      respuestaIA: "Actualmente, nuestra infraestructura local presenta limitaciones de escalabilidad y requiere inversiones constantes en hardware. Migrar a la nube permitirá mayor disponibilidad, respaldo automático y reducción de costos operativos a largo plazo. Recomendamos avanzar con análisis de plataformas como Azure o AWS."
    }
  },
  marketing: {
    facil: {
      texto: "📣 Necesitás redactar una publicación breve para redes sociales anunciando una promo de invierno del 15 al 30 de junio.",
      objetivo: "Redactar un texto atractivo, claro y breve para redes sociales.",
      criterios: [
        "Incluye fechas y beneficio de la promoción.",
        "Usa lenguaje informal y cercano.",
        "Incentiva a aprovechar la promoción."
      ],
      tips: [
        "Usá emojis o signos que llamen la atención.",
        "Mantené un tono entusiasta.",
        "Incentivá la acción con un 'no te lo pierdas', 'solo por pocos días', etc."
      ],
      ejemploPrompt: "Redactá una publicación para redes sociales anunciando una promo de invierno del 15 al 30 de junio con 20% off.",
      respuestaIA: "❄️ ¡Llegó la promo de invierno! Del 15 al 30 de junio, 20% OFF en todos nuestros servicios 🔥 ¡No te lo pierdas!"
    },
    intermedio: {
      texto: "📣 Debés redactar un correo promocional para enviar a clientes potenciales sobre un nuevo servicio de mantenimiento industrial.",
      objetivo: "Redactar una pieza de email marketing profesional que despierte interés.",
      criterios: [
        "Presenta el nuevo servicio con claridad.",
        "Destaca beneficios para el cliente.",
        "Incluye llamado a la acción (CTA)."
      ],
      tips: [
        "Enfocate en cómo mejora o soluciona un problema del cliente.",
        "Mantené un lenguaje directo y profesional.",
        "Terminá con una frase como 'Solicitá más info' o 'Agendá una demo'."
      ],
      ejemploPrompt: "Redactá un correo promocional anunciando un nuevo servicio de mantenimiento industrial.",
      respuestaIA: "Hola, presentamos nuestro nuevo servicio de mantenimiento industrial preventivo. Ideal para evitar paradas inesperadas y prolongar la vida útil de tus equipos. ¿Querés saber más? Escribinos y agendamos una demo sin cargo."
    },
    dificil: {
      texto: "📣 Redactá una propuesta de campaña para aumentar el reconocimiento de marca en LinkedIn durante el próximo trimestre.",
      objetivo: "Presentar una propuesta estratégica de campaña enfocada en posicionamiento.",
      criterios: [
        "Incluye objetivo de la campaña.",
        "Propone acciones concretas.",
        "Mide resultados con indicadores claros (KPIs)."
      ],
      tips: [
        "Indicá el objetivo: aumentar seguidores, alcance o interacción.",
        "Proponé tipos de contenido: casos de éxito, videos, posteos.",
        "Sugerí métricas de seguimiento: alcance, clics, conversiones."
      ],
      ejemploPrompt: "Redactá una propuesta de campaña trimestral para aumentar visibilidad de marca en LinkedIn.",
      respuestaIA: "Objetivo: aumentar el reconocimiento de marca en LinkedIn en un 30% durante el próximo trimestre. Propuesta: publicar 2 veces por semana contenido de valor (casos de éxito, tips, videos cortos). Seguimiento por métricas de alcance e interacciones mensuales."
    }
  },
  comunicaciones: {
    facil: {
      texto: "🗣️ Tenés que enviar un mensaje recordando a todo el personal que el viernes es feriado y no se trabaja.",
      objetivo: "Redactar un comunicado breve, claro y formal dirigido a todo el personal.",
      criterios: [
        "Indica la fecha y motivo del feriado.",
        "Aclara que no se trabajará ese día.",
        "Usa un tono institucional y respetuoso."
      ],
      tips: [
        "Comenzá con un saludo general.",
        "Incluí la fecha específica del feriado.",
        "Evitá frases informales o coloquiales."
      ],
      ejemploPrompt: "Redactá un mensaje interno anunciando que el viernes 21/6 es feriado y no se trabaja.",
      respuestaIA: "Estimado equipo, les recordamos que el viernes 21 de junio es feriado nacional, por lo tanto no habrá actividad laboral. Saludos cordiales."
    },
    intermedio: {
      texto: "🗣️ Redactá un mensaje para comunicar una nueva política de trabajo híbrido que comenzará a aplicarse el próximo mes.",
      objetivo: "Informar de manera clara y ordenada un cambio importante en la modalidad de trabajo.",
      criterios: [
        "Explica el cambio de forma comprensible.",
        "Menciona la fecha de implementación.",
        "Incluye canal de dudas o contacto."
      ],
      tips: [
        "Indicá desde cuándo entra en vigencia la nueva política.",
        "Resumí cómo será la modalidad híbrida (ej: 3 días presencial, 2 remoto).",
        "Podés incluir un contacto para más información."
      ],
      ejemploPrompt: "Redactá una comunicación interna sobre la implementación del trabajo híbrido desde el 1/7.",
      respuestaIA: "A partir del 1/7 implementaremos una nueva modalidad de trabajo híbrido: 3 días presenciales y 2 remotos por semana. Esta política busca equilibrar productividad y bienestar. Consultas: rrhh@empresa.com."
    },
    dificil: {
      texto: "🗣️ Redactá una comunicación institucional para todo el personal luego de una situación de tensión interna entre dos sectores.",
      objetivo: "Brindar un mensaje institucional que recupere el clima organizacional y refuerce valores comunes.",
      criterios: [
        "Evita personalizar el conflicto.",
        "Refuerza valores como respeto y colaboración.",
        "Propone acciones constructivas a futuro."
      ],
      tips: [
        "Usá un tono conciliador, firme y profesional.",
        "No entres en detalles del conflicto.",
        "Fomentá la escucha activa y el trabajo conjunto."
      ],
      ejemploPrompt: "Redactá una comunicación institucional ante una situación interna de conflicto entre sectores.",
      respuestaIA: "Queremos recordar la importancia del respeto, la colaboración y el diálogo entre equipos. Toda situación será acompañada por RRHH para su resolución. Sigamos construyendo un entorno de trabajo positivo."
    }
  },
  reportes: {
    facil: {
      texto: "📊 Redactá un reporte breve con la cantidad de tickets resueltos durante la última semana.",
      objetivo: "Comunicar datos operativos de forma clara y resumida.",
      criterios: [
        "Menciona el período reportado.",
        "Incluye el total de tickets resueltos.",
        "Es directo y fácil de leer."
      ],
      tips: [
        "Indicá fechas específicas (ej: del 10 al 14 de junio).",
        "Usá números claros y evita detalles innecesarios.",
        "Podés cerrar con una breve observación (ej: incremento o descenso)."
      ],
      ejemploPrompt: "Redactá un reporte de tickets resueltos entre el 10 y el 14 de junio.",
      respuestaIA: "Entre el 10 y el 14 de junio se resolvieron 56 tickets, un 15% más que la semana anterior."
    },
    intermedio: {
      texto: "📊 Redactá un informe mensual con los indicadores clave de desempeño del área comercial.",
      objetivo: "Resumir los principales KPIs del mes para evaluación de resultados.",
      criterios: [
        "Incluye métricas relevantes como ventas, leads o cierres.",
        "Indica el período (mes).",
        "Agrega observaciones destacadas."
      ],
      tips: [
        "Usá viñetas o separadores si hay varias métricas.",
        "Podés comparar con el mes anterior.",
        "Resaltá logros o desvíos importantes."
      ],
      ejemploPrompt: "Redactá un resumen con los KPIs comerciales de mayo.",
      respuestaIA: "- Ventas: $12.500.000 (+10%)\n- Nuevos leads: 82\n- Cierres efectivos: 21\nObservación: incremento sostenido por campaña activa en LinkedIn."
    },
    dificil: {
      texto: "📊 Redactá un reporte trimestral para dirección con análisis de datos y recomendaciones estratégicas.",
      objetivo: "Presentar un análisis ejecutivo con datos y sugerencias para la toma de decisiones.",
      criterios: [
        "Presenta datos comparativos entre trimestres.",
        "Incluye conclusiones o aprendizajes.",
        "Propone al menos una acción o decisión sugerida."
      ],
      tips: [
        "Organizá en partes: datos → análisis → recomendación.",
        "Usá lenguaje claro pero profesional.",
        "Evitá sobrecargar con cifras técnicas si no son clave para la decisión."
      ],
      ejemploPrompt: "Redactá un reporte ejecutivo con análisis de resultados del segundo trimestre y una recomendación.",
      respuestaIA: "Durante el segundo trimestre se registró un crecimiento del 12% en ventas y un 8% en nuevos leads respecto al Q1. Sin embargo, se redujo el ratio de conversión (de 32% a 26%). Recomendamos reforzar la etapa de cierre con capacitaciones específicas para el equipo comercial."
    }
  },
  informes: {
    facil: {
      texto: "📄 Redactá un informe breve describiendo una reunión de seguimiento realizada hoy con un proveedor.",
      objetivo: "Dejar registro escrito claro de lo conversado en una reunión operativa.",
      criterios: [
        "Incluye fecha y participantes.",
        "Resume temas tratados.",
        "Menciona próximos pasos o compromisos."
      ],
      tips: [
        "Comenzá indicando día y hora de la reunión.",
        "Usá ítems o párrafos breves para cada tema tratado.",
        "Cerrá con lo acordado o las tareas asignadas."
      ],
      ejemploPrompt: "Redactá un informe corto sobre la reunión de hoy con el proveedor ServiTec.",
      respuestaIA: "Hoy 14/6 se realizó una reunión con el proveedor ServiTec. Participaron Laura F. y Martín G. Se revisaron avances en entregas, se solicitaron nuevos tiempos de respuesta y se acordó enviar cronograma actualizado antes del 17/6."
    },
    intermedio: {
      texto: "📄 Prepará un informe técnico explicando los resultados de una prueba de sistema de extinción realizada ayer.",
      objetivo: "Documentar de forma clara y precisa una prueba técnica con sus conclusiones.",
      criterios: [
        "Incluye fecha y lugar de la prueba.",
        "Detalla condiciones y parámetros observados.",
        "Concluye si fue satisfactoria o no."
      ],
      tips: [
        "Especificá tipo de prueba y equipos evaluados.",
        "Indicá resultados cuantificables si es posible (ej: presión, tiempo de respuesta).",
        "Cerrá el informe con una conclusión profesional."
      ],
      ejemploPrompt: "Redactá un informe técnico de la prueba de sistema de extinción realizada el 13/6 en galpón B.",
      respuestaIA: "El 13/6 se realizó la prueba del sistema de extinción en el galpón B. Se verificó presión mínima sostenida de 7 bar por 15 minutos, sin fugas ni obstrucciones. Resultado: prueba satisfactoria. Sistema habilitado para operación."
    },
    dificil: {
      texto: "📄 Redactá un informe ejecutivo para presentar ante gerencia sobre los desvíos detectados en el avance de obra del último mes.",
      objetivo: "Informar a nivel estratégico los desvíos en un proyecto, con impacto y plan de corrección.",
      criterios: [
        "Describe al menos dos desvíos relevantes.",
        "Explica causas posibles o factores involucrados.",
        "Propone al menos una acción correctiva."
      ],
      tips: [
        "Usá un tono objetivo, no defensivo.",
        "Mencioná impacto sobre tiempo, calidad o presupuesto.",
        "Incluí propuesta o cronograma de regularización."
      ],
      ejemploPrompt: "Redactá un informe ejecutivo sobre desvíos en obra durante mayo y acciones correctivas.",
      respuestaIA: "Durante mayo se detectaron dos desvíos principales en obra: 1) Retraso en instalación de cañerías por falta de materiales (demora: 5 días), 2) Error en ubicación de hidrantes en área C, ya corregido. Causas: falta de provisión a tiempo y error en plano original. Se propone plan de regularización con finalización estimada para el 24/6."
    }
  },
  comprension: {
    facil: {
      texto: "🧠 Leé un texto corto técnico sobre extintores y explicalo con tus palabras en forma sencilla.",
      objetivo: "Demostrar que se comprendió el contenido técnico al poder explicarlo con lenguaje cotidiano.",
      criterios: [
        "Resume el contenido sin copiar literalmente.",
        "Utiliza un lenguaje simple.",
        "Mantiene el sentido del texto original."
      ],
      tips: [
        "Identificá las ideas principales.",
        "Evitá tecnicismos innecesarios.",
        "Imaginá que se lo explicás a alguien que no sabe del tema."
      ],
      ejemploPrompt: "Leí un texto que dice: 'Los extintores de dióxido de carbono son eficaces para fuegos eléctricos'. Explicalo con tus palabras.",
      respuestaIA: "Estos extintores sirven para apagar incendios que tienen que ver con electricidad, como en computadoras o tableros."
    },
    intermedio: {
      texto: "🧠 Leé un procedimiento interno y resumilo en un párrafo breve que pueda entender cualquier empleado.",
      objetivo: "Transformar información formal en un resumen claro y útil.",
      criterios: [
        "Identifica los pasos clave del procedimiento.",
        "Redacta de manera ordenada y sin repetir.",
        "Hace el contenido más accesible."
      ],
      tips: [
        "Buscá el objetivo del procedimiento: ¿para qué sirve?",
        "Simplificá pasos sin omitir información esencial.",
        "Usá conectores como: primero, luego, por último."
      ],
      ejemploPrompt: "Resumí este procedimiento: 'Todo pedido debe ser aprobado por compras, luego firmado por gerencia, y recién entonces enviado al proveedor.'",
      respuestaIA: "Primero se aprueba en compras, luego lo firma gerencia, y recién ahí se envía al proveedor."
    },
    dificil: {
      texto: "🧠 Leé un informe largo sobre causas de accidentes industriales y redactá una conclusión clara que puedas compartir con tu equipo.",
      objetivo: "Extraer lo más importante de un texto complejo y convertirlo en una idea clave útil para otros.",
      criterios: [
        "Identifica las causas principales mencionadas.",
        "Redacta una conclusión clara y aplicable.",
        "Transmite el mensaje sin ambigüedades."
      ],
      tips: [
        "Buscá patrones en lo que leés: repeticiones, causas comunes.",
        "Convertí las ideas del informe en una advertencia o aprendizaje.",
        "Redactá como si lo explicaras a tu equipo en una reunión."
      ],
      ejemploPrompt: "Redactá una conclusión para compartir con tu equipo tras leer un informe sobre causas de accidentes industriales.",
      respuestaIA: "La mayoría de los accidentes se deben a no seguir los procedimientos o revisar los equipos. Es clave reforzar las capacitaciones y hacer controles más frecuentes."
    }
  },
  control_incendio: {
  facil: {
    texto: "🔥 Redactá un reporte breve sobre una inspección visual de hidrantes realizada hoy en el depósito A.",
    objetivo: "Documentar una verificación básica de equipos contra incendio.",
    criterios: [
      "Incluye fecha y lugar de la inspección.",
      "Indica cantidad o estado general de los hidrantes.",
      "Menciona si hubo o no observaciones."
    ],
    tips: [
      "Especificá el área recorrida (ej: depósito A).",
      "Indicá cuántos hidrantes fueron inspeccionados.",
      "Usá frases como: 'no se observaron anomalías' o 'se detectó tapa rota'."
    ],
    ejemploPrompt: "Redactá un reporte corto de inspección visual realizada hoy en depósito A.",
    respuestaIA: "El día 14/6 se realizó inspección visual de 5 hidrantes en el depósito A. Todos se encuentran accesibles, sin obstrucciones ni daños visibles. Sin observaciones destacadas."
  },
    intermedio: {
      texto: "🔥 Redactá un informe de prueba hidráulica realizada hoy en red de incendio del sector B.",
      objetivo: "Registrar los resultados técnicos de una prueba hidráulica con datos verificables.",
      criterios: [
        "Indica presión alcanzada y duración.",
        "Confirma si fue satisfactoria o no.",
        "Menciona si hubo fugas o pérdidas."
      ],
      tips: [
        "Especificá el sector y fecha.",
        "Indicá parámetros técnicos: presión, tiempo.",
        "Usá un cierre que indique si el sistema quedó habilitado o necesita ajustes."
      ],
      ejemploPrompt: "Redactá un informe de prueba hidráulica realizada el 14/6 en sector B.",
      respuestaIA: "El 14/6 se realizó prueba hidráulica en red del sector B. Se alcanzó presión de 8 bar durante 1 hora, sin registrar pérdidas. Resultado: prueba satisfactoria. Sistema habilitado."
    },
    dificil: {
      texto: "🔥 Redactá un informe técnico para gerencia justificando la necesidad de reparar una válvula de retención defectuosa en la red de incendio.",
      objetivo: "Argumentar técnicamente una acción correctiva con sustento profesional.",
      criterios: [
        "Describe la falla detectada.",
        "Justifica por qué es necesaria la intervención.",
        "Indica riesgos de no actuar y pasos sugeridos."
      ],
      tips: [
        "Explicá el impacto de la falla (ej: pérdida de presión, riesgo en caso de incendio).",
        "Mantené un tono técnico pero entendible para gerencia.",
        "Podés agregar recomendaciones (ej: cambio de pieza, programación de tarea)."
      ],
      ejemploPrompt: "Redactá un informe técnico solicitando reparación de una válvula defectuosa detectada en inspección.",
      respuestaIA: "Durante la inspección del 14/6 se detectó una válvula de retención con retorno parcial en el sector C. Esta falla compromete el correcto funcionamiento del sistema ante un evento. Recomendamos su reemplazo inmediato para garantizar la presurización completa. Se adjunta detalle fotográfico y plano de ubicación."
    }
  },  
  coordinacion_obra: {
    facil: {
      texto: "📋 Redactá un mensaje para informar al equipo que mañana se trabajará en la instalación de cañerías en el sector 1.",
      objetivo: "Comunicar de forma clara y breve una tarea asignada para el día siguiente.",
      criterios: [
        "Indica el día y la tarea concreta.",
        "Menciona el sector o área de trabajo.",
        "Usa un tono directo y operativo."
      ],
      tips: [
        "Usá frases como 'mañana se realizará', 'la tarea asignada es'.",
        "Mantené el mensaje breve y sin tecnicismos innecesarios.",
        "Podés cerrar con 'cualquier duda, consultar con...'."
      ],
      ejemploPrompt: "Redactá un mensaje para el equipo sobre el trabajo de mañana en el sector 1.",
      respuestaIA: "📌 Mañana martes 15/6 se trabajará en la instalación de cañerías en el sector 1. Coordinación a cargo de Julián. Cualquier duda, consultar por grupo interno."
    },
    intermedio: {
      texto: "📋 Redactá un cronograma semanal con las tareas previstas por sector para compartir con todo el equipo.",
      objetivo: "Organizar las tareas de obra de forma clara y distribuida por días y sectores.",
      criterios: [
        "Incluye días, sectores y tareas principales.",
        "Tiene un formato claro y legible.",
        "Sirve como referencia para todo el equipo."
      ],
      tips: [
        "Usá formato de lista o tabla (aunque sea textual).",
        "Sé específico con tareas: 'instalación de rociadores', 'prueba hidráulica', etc.",
        "Podés incluir responsables si aplica."
      ],
      ejemploPrompt: "Redactá un cronograma semanal de obra para compartir con el equipo.",
      respuestaIA: "🗓️ Cronograma del 17 al 21/6:\n- Lunes: instalación de rociadores – Sector A\n- Martes: prueba hidráulica – Sector B\n- Miércoles: ajuste de soportes – Sector C\n- Jueves: libre por capacitación\n- Viernes: revisión general – Sector A y B"
    },
    dificil: {
      texto: "📋 Redactá un informe de coordinación sobre los avances de obra de esta semana, incluyendo tareas realizadas, desvíos y próximos pasos.",
      objetivo: "Informar de forma ejecutiva el avance de actividades de obra, con visión organizativa.",
      criterios: [
        "Resume tareas ejecutadas.",
        "Menciona dificultades o retrasos (si hubo).",
        "Propone próximos pasos o ajustes al cronograma."
      ],
      tips: [
        "Usá una estructura: tareas realizadas → desvíos → próximos pasos.",
        "Indicá porcentajes de avance si aplica.",
        "Mantené un tono claro, técnico y proactivo."
      ],
      ejemploPrompt: "Redactá un informe semanal de coordinación de obra con tareas, desvíos y próximos pasos.",
      respuestaIA: "Durante la semana del 10 al 14/6 se completó la instalación de cañerías principales en sectores A y B (100%). Se pospuso la prueba hidráulica en sector C por falta de presión en bomba (se reprograma para el 17/6). Próxima semana: prueba sector C + colocación de rociadores en área técnica."
    }
  },
  tareas_correctivas: {
    facil: {
      texto: "🛠️ Redactá un mensaje breve indicando que hoy se reemplazó una manguera dañada en el gabinete del pasillo central.",
      objetivo: "Registrar una acción correctiva sencilla con lugar y fecha.",
      criterios: [
        "Indica qué se hizo y dónde.",
        "Menciona la fecha de la intervención.",
        "Usa lenguaje claro y técnico básico."
      ],
      tips: [
        "Mencioná el elemento intervenido (ej: manguera, válvula, señalizador).",
        "Ubicá el lugar con precisión si es un edificio amplio.",
        "Podés usar un tono informal si es interno."
      ],
      ejemploPrompt: "Redactá un mensaje para registrar el cambio de manguera realizado hoy en pasillo central.",
      respuestaIA: "✅ El 14/6 se reemplazó manguera dañada en el gabinete del pasillo central. Elemento en condiciones de uso."
    },
    intermedio: {
      texto: "🛠️ Redactá un informe de mantenimiento correctivo donde se ajustaron varias conexiones en la red de cañerías del sector técnico.",
      objetivo: "Documentar una intervención técnica con detalles de lo realizado.",
      criterios: [
        "Especifica las tareas realizadas.",
        "Indica causa del mantenimiento (preventivo o correctivo).",
        "Concluye con el estado actual del sistema."
      ],
      tips: [
        "Detallá qué se ajustó o reparó.",
        "Indicá si fue por inspección o por falla detectada.",
        "Cerrá con una frase como: 'equipo en condiciones', 'sistema habilitado', etc."
      ],
      ejemploPrompt: "Redactá un informe de mantenimiento donde se ajustaron conexiones en sector técnico.",
      respuestaIA: "El 14/6 se realizó mantenimiento correctivo en sector técnico. Se ajustaron 3 conexiones con pérdidas menores en red húmeda, detectadas durante inspección visual. Sistema quedó sin fugas y en condiciones de uso."
    },
    dificil: {
      texto: "🛠️ Redactá un informe técnico para justificar el cambio completo de una línea de cañería por corrosión interna detectada.",
      objetivo: "Justificar con fundamentos técnicos una intervención mayor en sistema contra incendios.",
      criterios: [
        "Describe la condición de la cañería.",
        "Justifica por qué no era viable reparar.",
        "Propone solución con fundamentos técnicos."
      ],
      tips: [
        "Describí evidencia de la corrosión: visual, medición o pérdida de presión.",
        "Explicá riesgos de mantener el tramo dañado.",
        "Incluí recomendaciones o cronograma si aplica."
      ],
      ejemploPrompt: "Redactá un informe para justificar el recambio de una línea de cañería en sector C por corrosión.",
      respuestaIA: "Durante inspección del 12/6 se detectó corrosión interna avanzada en línea de cañería de red húmeda del sector C, con desprendimiento visible y pérdida de presión en prueba hidráulica. Se recomienda reemplazo completo del tramo afectado (~8 mts). Adjunto informe fotográfico y plano de intervención."
    }
  }
};

function cambiarEscenario() {
  const area = document.getElementById("areaSelect").value;
  const nivel = document.getElementById("nivelSelect").value;
  const escenario = document.getElementById("escenario");

  if (escenarios[area] && escenarios[area][nivel]) {
    const data = escenarios[area][nivel];

    let tipsHtml = "";
    if (data.tips && data.tips.length > 0) {
      tipsHtml = `<div style="margin-top:10px;"><b>Tips:</b><ul>${data.tips.map(tip => `<li>${tip}</li>`).join('')}</ul></div>`;
    }

    let criteriosHtml = "";
    if (data.criterios && data.criterios.length > 0) {
      criteriosHtml = `<div style="margin-top:10px;"><b>Criterios de evaluación:</b><ul>${data.criterios.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
    }

    let ejemploHtml = data.ejemploPrompt ? `<div style="margin-top:10px;"><b>Ejemplo de prompt:</b> <span style="color:#0c8b32;">${data.ejemploPrompt}</span></div>` : "";

    escenario.innerHTML = `<div><b>Escenario:</b> ${data.texto}</div>${tipsHtml}${criteriosHtml}${ejemploHtml}`;
    escenario.classList.remove("oculto");
    escenario.classList.add("highlight");
    setTimeout(() => escenario.classList.remove("highlight"), 600);
  } else {
    escenario.classList.add("oculto");
  }
}

function exportarPDF() {
  return new Promise((resolve, reject) => {
    const nombre = document.getElementById("nombre").value || "";
    const apellido = document.getElementById("apellido").value || "";
    const sector = document.getElementById("sector").value || "";
    const promptUsuario = document.getElementById("promptInput")?.value || "";
    const analisis = document.getElementById("analisis");
    const respuesta = document.getElementById("respuesta");

    if (!analisis || !analisis.innerHTML.trim()) {
      alert("No hay análisis para exportar.");
      reject("No hay análisis para exportar.");
      return;
    }

    const tempDiv = document.createElement("div");
    tempDiv.style.background = "#fff";
    tempDiv.style.color = "#222";
    tempDiv.style.fontFamily = "Arial, sans-serif";
    tempDiv.style.fontSize = "18px";
    tempDiv.style.padding = "32px";
    tempDiv.style.maxWidth = "700px";
    tempDiv.style.lineHeight = "1.6";

    tempDiv.innerHTML = `
      <h2 style="color:#c30000; font-size:2em; margin-bottom:24px;">Resultado de tu práctica IA</h2>
      <p><b>Nombre:</b> ${nombre} ${apellido}<br>
      <b>Sector:</b> ${sector}</p>
      <p><b>Prompt escrito:</b> <span style="color:#0c8b32;">${promptUsuario}</span></p>
      <div style="
        background:#fff;
        color:#222;
        border-left:5px solid #c30000;
        border-radius:10px;
        padding:18px 22px;
        margin-top:32px;
        margin-bottom:12px;
        font-size:1.1em;
        box-shadow:none;
      ">
        ${analisis.querySelector('.bloque-analisis') 
          ? analisis.querySelector('.bloque-analisis').innerHTML
          : analisis.innerHTML}
      </div>
      <div style="
        background:#f9f9f9;
        color:#222;
        border-left:5px solid #0c8b32;
        border-radius:10px;
        padding:18px 22px;
        margin-bottom:12px;
        font-size:1.1em;
        box-shadow:none;
      ">
        <strong>🤖 Respuesta simulada de IA:</strong><br>
        ${respuesta ? respuesta.textContent : ""}
      </div>
    `;

    document.body.appendChild(tempDiv);

    html2pdf().from(tempDiv).set({
      margin: [10, 10, 10, 10],
      filename: `simulador_ia_${nombre}_${apellido}_${sector}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 4, useCORS: true, scrollY: 0, backgroundColor: "#fff" },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).save().then(() => {
      document.body.removeChild(tempDiv);
      const aviso = document.getElementById("avisoExportacion");
      if (aviso) {
        aviso.style.display = "block";
        setTimeout(() => aviso.style.display = "none", 3000);
      }
      resolve();
    }).catch(err => {
      document.body.removeChild(tempDiv);
      console.error("Error al generar PDF:", err);
      reject(err);
    });
  });
}

function exportarYEnviar() {
  exportarPDF().then(() => {
    const nombre = document.getElementById("nombre").value || "Usuario";
    const apellido = document.getElementById("apellido").value || "";
    const sector = document.getElementById("sector").value || "";

    const mensaje = `Hola, soy ${nombre} ${apellido} del sector ${sector}. Acabo de generar y descargar el PDF de mi resultado del Simulador IA. Lo tengo listo para enviar.`;
    const numero = "5492615995585";
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });
}

function toggleGuia() {
  const guia = document.getElementById("guia");
  guia.classList.toggle("oculto");
  localStorage.setItem("guiaVisible", !guia.classList.contains("oculto"));
}

window.addEventListener("DOMContentLoaded", () => {
  const guia = document.getElementById("guia");
  const guiaVisible = localStorage.getItem("guiaVisible");
  const historialData = JSON.parse(localStorage.getItem("historialIA")) || [];

  if (guiaVisible === "true") {
    guia.classList.remove("oculto");
  } else {
    guia.classList.add("oculto");
  }

  if (historialData.length === 0) {
    document.getElementById("pantallaFinal").classList.add("oculto");
    document.getElementById("historial").classList.add("oculto");
  }

  const areaGuardada = localStorage.getItem("area");
  const nivelGuardado = localStorage.getItem("nivel");

  if (areaGuardada) document.getElementById("areaSelect").value = areaGuardada;
  if (nivelGuardado) document.getElementById("nivelSelect").value = nivelGuardado;

  if (areaGuardada && nivelGuardado) cambiarEscenario();

  document.getElementById("modalConfirmacion").classList.add("oculto");
  document.getElementById("accionesIniciales").classList.remove("oculto");
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("sector").value = "";
  document.getElementById("promptInput").value = "";

});

function continuarUsuario() {
  document.getElementById('formUsuario').classList.add('oculto');
  document.getElementById('formPrompt').classList.remove('oculto');
  document.querySelector('.bienvenida').classList.add('oculto');
  document.querySelector('.instrucciones').classList.add('oculto');
}

function procesarPrompt() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const sector = document.getElementById("sector").value.trim();
  const prompt = document.getElementById("promptInput").value.trim();
  const area = document.getElementById("areaSelect").value;
  const nivel = document.getElementById("nivelSelect").value;
  const analisis = document.getElementById("analisis");
  const respuesta = document.getElementById("respuesta");

  if (!nombre || !apellido || !sector) {
    alert("Por favor, completá tu nombre, apellido y sector.");
    return;
  }
  if (!area || !nivel || !prompt) {
    alert("Por favor, seleccioná un área, un nivel y escribí tu prompt.");
    return;
  }

  document.querySelector('.formulario-usuario').classList.add('oculto');

  let nivelTexto = "🔴 Bajo";
  let claseNivel = "nivel-bajo";
  let explicacion = "";
  let sugerencia = "";

  const tieneAccion = /(redacta|escribi|envia|prepara|crea|responde|armar|comunica|confirma|solicita|informa|explica)/i.test(prompt);
  const tieneContexto = /(factura|cliente|proveedor|empleado|cotización|pedido|proyecto|licencia|auditoría|material|producto|servicio|entrega|presupuesto|sector|área|nombre|apellido)/i.test(prompt);
  const tieneObjetivo = /(para|con el objetivo de|a fin de|con el fin de|de manera que|para que)/i.test(prompt);
  const tieneTono = /(cordial|formal|urgente|breve|firme|amable|empático|persuasivo|claro|detallado)/i.test(prompt);
  const tieneDestinatario = /(al cliente|al proveedor|al empleado|al supervisor|al equipo|a recursos humanos|a gerencia|a ventas|a logística|a ingeniería|a compras|a atención|a finanzas|a obras|a sdr)/i.test(prompt);
  const tieneFormato = /(mail|correo|mensaje|nota|informe|propuesta|respuesta|comentario|whatsapp)/i.test(prompt);
  const longitudAceptable = prompt.length >= 30;

  const elementos = [tieneAccion, tieneContexto, tieneObjetivo, tieneTono, tieneDestinatario, tieneFormato];
  const puntuacion = elementos.filter(Boolean).length;

  if (puntuacion === 6 && longitudAceptable) {
    nivelTexto = "🟢 Alto";
    claseNivel = "nivel-alto";
    explicacion = "✅ ¡Excelente trabajo! Tu prompt está bien estructurado: indicás claramente qué debe hacer la IA (acción), el contexto del problema o tarea, el objetivo deseado, a quién va dirigido el mensaje, el tono que debe usar y el formato esperado (como mail, informe, WhatsApp, etc.).";
    sugerencia = "👏 Seguí así. Estás aprovechando al máximo el potencial de la IA. Recordá que cuanto más claro y detallado seas, mejores serán los resultados que obtendrás.";
  } else if (puntuacion >= 3 && longitudAceptable) {
    nivelTexto = "🟡 Medio";
    claseNivel = "nivel-medio";
    explicacion = "⚠️ Tu prompt muestra una intención general y algo de contexto, pero faltan algunos elementos clave. Puede que no se entienda bien a quién va dirigido, cuál es el objetivo final, o con qué tono y formato querés que se redacte la respuesta.";
    sugerencia = "🛠️ Probá mejorar tu prompt incluyendo: destinatario (¿a quién va dirigido?), objetivo claro (¿qué querés lograr?), tono (¿cómo querés sonar?) y formato (¿en qué tipo de respuesta?). Esto ayuda a que la IA entienda y responda con mayor precisión.";
  } else {
    nivelTexto = "🔴 Bajo";
    claseNivel = "nivel-bajo";
    explicacion = "❌ Tu prompt es muy corto o poco claro. No se entiende bien qué querés que haga la IA, ni para quién es el mensaje, ni con qué fin. Le faltan detalles importantes como contexto, destinatario, objetivo y tipo de respuesta.";
    sugerencia = "📌 Para mejorar, incluí: 1) una acción clara (ej: redactar, preparar, informar), 2) contexto o situación, 3) a quién va dirigido, 4) qué esperás lograr, 5) el tono (cordial, formal, urgente...) y 6) el formato (mail, mensaje, nota, etc.). Cuanto más completo, mejores resultados.";
  }

  const checklist = `
    <ul class="checklist">
      <li>${tieneAccion ? '✅' : '❌'} Acción clara</li>
      <li>${tieneContexto ? '✅' : '❌'} Contexto</li>
      <li>${tieneObjetivo ? '✅' : '❌'} Objetivo</li>
      <li>${tieneDestinatario ? '✅' : '❌'} Destinatario</li>
      <li>${tieneTono ? '✅' : '❌'} Tono</li>
      <li>${tieneFormato ? '✅' : '❌'} Formato</li>
    </ul>
  `;

   analisis.innerHTML = `
    <div class="bloque-analisis">
      <strong>📊 Análisis del prompt:</strong><br>
      <b class="${claseNivel}">Nivel: ${nivelTexto}</b><br>
      <b>Explicación:</b> ${explicacion}<br>
      <b>Sugerencia:</b> ${sugerencia}<br>
      ${checklist}
    </div>
  `;
  respuesta.innerHTML = `
    <div class="bloque-respuesta">
      <strong>🤖 Respuesta simulada de IA:</strong><br>
      ${(escenarios[area] && escenarios[area][nivel]) ? escenarios[area][nivel].respuestaIA : 'No disponible.'}
    </div>
  `;

  analisis.className = `evaluacion ${claseNivel}`;
  respuesta.classList.remove("oculto");
  respuesta.classList.add("respuesta", "highlight");

  setTimeout(() => respuesta.classList.remove("highlight"), 600);

  guardarEnHistorial(area, nivel, prompt, claseNivel);
  mostrarPantallaFinal(claseNivel, explicacion, sugerencia, area, nivel, nivelTexto);

  document.getElementById("accionesIniciales").classList.add("oculto");
}

function mostrarPantallaFinal(nivelDetectado, explicacion, sugerencia, area, nivel, textoNivel) {
  const pantalla = document.getElementById("pantallaFinal");
  const insignia = document.getElementById("insigniaFinal");
  const estrellas = document.getElementById("estrellasFinal");
  const bloqueFormulario = document.getElementById("bloqueFormulario");
  const resumen = document.getElementById("resumenPrompt");

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

  resumen.innerHTML = `
    <div class="bloque-analisis">
      <h3>📊 Análisis del prompt</h3>
      <p><b>Nivel detectado:</b> ${textoNivel}</p>
      <p><b>Explicación:</b> ${explicacion}</p>
      <p><b>Sugerencia:</b> ${sugerencia}</p>
    </div>
    <div class="bloque-respuesta">
      <h3>🤖 Respuesta simulada de IA</h3>
      <p>${(escenarios[area] && escenarios[area][nivel]) ? escenarios[area][nivel].respuestaIA : 'No disponible.'}</p>
    </div>
  `;

  if (bloqueFormulario) bloqueFormulario.classList.add("oculto");
  pantalla.classList.remove("oculto");
  pantalla.scrollIntoView({ behavior: "smooth" });
}

function reiniciar() {
  document.getElementById("promptInput").value = "";
  document.getElementById("analisis").className = "evaluacion oculto";
  document.getElementById("respuesta").classList.add("oculto");
  document.getElementById("accionesIniciales").classList.remove("oculto");
  document.getElementById("pantallaFinal").classList.add("oculto");
  document.getElementById("bloqueFormulario").classList.remove("oculto");
  document.querySelector('.formulario-usuario').classList.remove('oculto');
  document.querySelector('.bienvenida').classList.remove('oculto');
  document.querySelector('.instrucciones').classList.remove('oculto');
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
    evaluacion: nivelDetectado,
    respuesta: escenarios[area][nivel].respuestaIA
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
  document.getElementById("modalConfirmacion").classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("modalConfirmacion").classList.add("oculto");
}

function confirmarBorrado() {
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
  document.getElementById("pantallaFinal").classList.add("oculto");
  document.getElementById("historial").classList.add("oculto");

  cerrarModal();
}

window.cerrarModal = cerrarModal;
window.confirmarBorrado = confirmarBorrado;
