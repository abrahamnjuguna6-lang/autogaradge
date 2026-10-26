export function buildWhatsAppUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Short reference the buyer can quote, e.g. AB-4821. */
export function createReference(): string {
  return `AB-${1000 + Math.floor(Math.random() * 9000)}`
}
