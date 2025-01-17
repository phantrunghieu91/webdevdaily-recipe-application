export function getKeysAsString<T extends object>(obj: T): string {
  return Object.keys(obj).join(", ");
}