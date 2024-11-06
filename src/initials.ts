export function initials(label: string): string {
  const splitted: string[] = label.split(" ");
  const parts = splitted.filter(Boolean);
  const initials = parts.map((part) => part.charAt(0));
  return initials.join(" ");
}
