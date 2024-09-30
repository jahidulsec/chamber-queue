import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const wait = async(time=1000) => {
  await new Promise((resolve) => {
      setTimeout(resolve, time)
  })
}