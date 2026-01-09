import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(path: string) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;

  // Remove leading slash if any for consistency in checks
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  if (cleanPath.startsWith("module-media/")) {
    return `/${cleanPath}`;
  }

  return `/module-media/${cleanPath}`;
}
