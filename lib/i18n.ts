export type Locale = "en" | "vi";

export const locales: Locale[] = ["en", "vi"];
export const defaultLocale: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (locales as string[]).includes(x);
}
