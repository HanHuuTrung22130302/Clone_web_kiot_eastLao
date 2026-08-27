import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeUrl(url: string): string {
  if (url.startsWith("https://www.kiotviet.vn"))
    return url.replace("https://www.kiotviet.vn", "") || "/";
  if (url.startsWith("https://kiotviet.vn"))
    return url.replace("https://kiotviet.vn", "") || "/";
  return url;
}