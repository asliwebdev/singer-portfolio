import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
