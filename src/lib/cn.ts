/**
 * Utility function to merge classNames - type-safe alternative to classnames
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default cn;
