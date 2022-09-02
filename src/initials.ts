import compact from "lodash.compact";

export function initials(label: string): string {
  const splitted: string[] = label.split(" ");
  const parts = compact(splitted);
  const initials = parts.map((part) => part.charAt(0));
  return initials.join(" ");
}
