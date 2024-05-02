import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect } from "react"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function useScrollToBottom(dependency) {
    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    }, [dependency]);
}