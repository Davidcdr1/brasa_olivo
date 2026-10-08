import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "npm:@supabase/server@^1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

export default {
  fetch: withSupabase(
    { auth: ["publishable", "secret"] },
    async (req, _ctx) => {
      try {
        if (req.method !== "POST") {
          return new Response("Method Not Allowed", {
            status: 405,
          });
        }

        const {
          customerName,
          customerEmail,
          customerPhone,
          reservationDate,
          reservationTime,
          people,
          notes,
        } = await req.json();

        if (
          !customerName ||
          !customerEmail ||
          !reservationDate ||
          !reservationTime ||
          !people
        ) {
          return Response.json(
            { error: "Faltan datos de la reserva" },
            { status: 400 }
          );
        }

        if (!RESEND_API_KEY) {
          console.error("Falta RESEND_API_KEY");

          return Response.json(
            { error: "Configuración de email incompleta" },
            { status: 500 }
          );
        }

        const restaurantEmail = "davicum@gmail.com";

        const emailResponse = await fetch(
          "https://api.resend.com/emails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: "Brasa & Olivo <onboarding@resend.dev>",

              to: [customerEmail],

              bcc: [restaurantEmail],

              subject:
                "Confirmación de tu reserva · Brasa & Olivo",

              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #292524;">

                  <h1 style="font-family: Georgia, serif;">
                    Brasa & Olivo
                  </h1>

                  <p>
                    Hola ${customerName},
                  </p>

                  <p>
                    Tu reserva ha quedado confirmada.
                  </p>

                  <h2 style="font-family: Georgia, serif;">
                    Detalles de la reserva
                  </h2>

                  <p>
                    <strong>Fecha:</strong> ${reservationDate}<br />
                    <strong>Hora:</strong> ${reservationTime}<br />
                    <strong>Personas:</strong> ${people}
                  </p>

                  ${
                    customerPhone
                      ? `
                        <p>
                          <strong>Teléfono:</strong> ${customerPhone}
                        </p>
                      `
                      : ""
                  }

                  ${
                    notes
                      ? `
                        <p>
                          <strong>Notas:</strong> ${notes}
                        </p>
                      `
                      : ""
                  }

                  <p>
                    Gracias por elegir Brasa & Olivo.
                  </p>

                  <p>
                    Te esperamos en Girona.
                  </p>

                </div>
              `,
            }),
          }
        );

        const result = await emailResponse.json();

        if (!emailResponse.ok) {
          console.error("Error de Resend:", result);

          return Response.json(
            {
              error: "No se ha podido enviar el email",
              details: result,
            },
            { status: 500 }
          );
        }

        return Response.json({
          success: true,
          id: result.id,
        });
      } catch (error) {
        console.error("Error inesperado:", error);

        return Response.json(
          {
            error: "Error interno al enviar el email",
          },
          { status: 500 }
        );
      }
    }
  ),
};