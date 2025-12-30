import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: 'json',
        input: z.object({
            email: z.string().email(),
            subject: z.string(),
            message: z.string(),
        }),
        handler: async ({ email, subject, message }) => {
            const { data, error } = await resend.emails.send({
                from: 'Josue david Kennedy <admin@gmail.com>',
                to: ['kennedysuedavid24@gmail.com'],
                replyTo: email,
                subject: `Nuevo Mensaje de Portafolio: ${subject}`,
                html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { 
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                        line-height: 1.6; 
                        color: #000000;
                        margin: 0;
                        padding: 20px;
                        background-color: #ffffff;
                    }
                    .container { 
                        max-width: 600px; 
                        margin: 0 auto; 
                        background-color: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 4px;
                    }
                    .header { 
                        background-color: #ffffff;
                        padding: 30px;
                        border-bottom: 2px solid #000000;
                    }
                    .header h1 { 
                        margin: 0; 
                        color: #000000;
                        font-size: 24px;
                        font-weight: 600;
                        letter-spacing: -0.5px;
                    }
                    .content { 
                        padding: 30px;
                        background-color: #ffffff;
                    }
                    .field { 
                        margin-bottom: 20px;
                    }
                    .label { 
                        font-size: 12px;
                        color: #4b5563;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        font-weight: 600;
                        margin-bottom: 6px;
                        display: block;
                    }
                    .value { 
                        font-size: 15px;
                        color: #000000;
                        font-weight: 400;
                    }
                    .message-box { 
                        background-color: #f9fafb;
                        border: 1px solid #d1d5db;
                        padding: 20px;
                        border-radius: 4px;
                        margin-top: 10px;
                    }
                    .message-content {
                        white-space: pre-wrap;
                        color: #000000;
                        font-size: 15px;
                        line-height: 1.6;
                    }
                    .footer { 
                        background-color: #f9fafb;
                        padding: 20px 30px;
                        text-align: center;
                        font-size: 12px;
                        color: #6b7280;
                        border-top: 1px solid #d1d5db;
                    }
                    .footer p {
                        margin: 6px 0;
                    }
                    .divider {
                        height: 1px;
                        background-color: #e5e7eb;
                        margin: 20px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Nuevo Contacto</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <span class="label">Remitente</span>
                            <div class="value">${email}</div>
                        </div>
                        
                        <div class="divider"></div>
                        
                        <div class="field">
                            <span class="label">Asunto</span>
                            <div class="value">${subject}</div>
                        </div>
                        
                        <div class="divider"></div>
                        
                        <div class="field">
                            <span class="label">Mensaje</span>
                            <div class="message-box">
                                <div class="message-content">${message}</div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Josue david Kennedy</p>
                        <p>© ${new Date().getFullYear()} Todos los derechos reservados</p>
                    </div>
                </div>
            </body>
            </html>
        `,
            });

            console.log('Resend response:', { data, error });

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message,
                });
            }

            return data;
        },
    }),
};