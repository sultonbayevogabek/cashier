export function removeNonNumerics(number: string): string {
   return number.replace(/\D/g, '')
}