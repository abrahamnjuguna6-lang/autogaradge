/** WhatsApp number every request goes to, digits only. Override with VITE_WHATSAPP_NUMBER in .env. */
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '254700000000').replace(/\D/g, '')
