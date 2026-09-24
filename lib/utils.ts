/**
 * Shared utility functions
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3");
}
