import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_THdiUqDg.mjs';
import 'piccolore';
import 'es-module-lexer';
import './chunks/astro/server_DBoMHC80.mjs';
import 'clsx';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_BnLpJ4rM.mjs';

const internalFetchHeaders = {};

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // redefine prototype methods as the object's own property, not the prototype's
        bind: action.bind,
        valueOf: () => action.valueOf,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function _getActionPath(toString) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  for (const [key, value] of Object.entries(internalFetchHeaders)) {
    headers.set(key, value);
  }
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    _getActionPath(() => getActionQueryString(path)),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  const bodyText = await rawResult.text();
  if (rawResult.ok) {
    return deserializeActionResult({
      type: "data",
      body: bodyText,
      status: 200,
      contentType: "application/json+devalue"
    });
  }
  return deserializeActionResult({
    type: "error",
    body: bodyText,
    status: rawResult.status,
    contentType: "application/json"
  });
}
toActionProxy();

const resend = new Resend("re_B6QNWGq4_sSpE2xDvWaUDjSkn1eBWiAHW");
const server = {
  send: defineAction({
    accept: "json",
    input: z.object({
      email: z.string().email(),
      subject: z.string(),
      message: z.string()
    }),
    handler: async ({ email, subject, message }) => {
      const { data, error } = await resend.emails.send({
        from: "Josue david Kennedy <admin@gmail.com>",
        to: ["kennedysuedavid24@gmail.com"],
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
                        <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Todos los derechos reservados</p>
                    </div>
                </div>
            </body>
            </html>
        `
      });
      console.log("Resend response:", { data, error });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return data;
    }
  })
};

export { server };
