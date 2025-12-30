import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const resend = new Resend("re_B6QNWGq4_sSpE2xDvWaUDjSkn1eBWiAHW");
  try {
    const data = await request.json();
    const { email, subject, message } = data;
    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({
          message: "Faltan campos requeridos"
        }),
        { status: 400 }
      );
    }
    const send = await resend.emails.send({
      from: "Josue Kennedy <contacto@josuekennedy.com>",
      to: ["kennedysuedavid24@gmail.com"],
      replyTo: email,
      subject: `✨ Nuevo Mensaje de Portafolio: ${subject}`,
      html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden; }
                    .header { background-color: #1a1a1a; padding: 30px 20px; text-align: center; }
                    .header h1 { margin: 0; color: #FFD700; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
                    .content { padding: 30px; background-color: #ffffff; }
                    .field { margin-bottom: 20px; }
                    .label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; margin-bottom: 5px; }
                    .value { font-size: 16px; color: #000; font-weight: 500; }
                    .message-box { background-color: #f9f9f9; border-left: 4px solid #FFD700; padding: 20px; border-radius: 4px; margin-top: 20px; }
                    .footer { background-color: #f4f4f5; padding: 15px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #e1e1e1; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Nuevo Contacto</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">De</div>
                            <div class="value">${email}</div>
                        </div>
                        <div class="field">
                            <div class="label">Asunto</div>
                            <div class="value">${subject}</div>
                        </div>
                        <div class="message-box">
                            <div class="label">Mensaje</div>
                            <div style="white-space: pre-wrap; color: #333;">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Josue Kennedy. Todos los derechos reservados.</p>
                        <p>Este correo fue enviado desde tu portafolio web.</p>
                    </div>
                </div>
            </body>
            </html>
            `
    });
    console.log("Resend response:", send);
    if (send.error) {
      return new Response(
        JSON.stringify({
          message: send.error.message
        }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Correo enviado exitosamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error interno del servidor"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
