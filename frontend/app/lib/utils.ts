import { format } from "date-fns"
export function capitalise(str: string): string {
    return str
        .split(' ')
        .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
        .join(' ')
}

export function formatIsoDate(date: string): string {
    return format(new Date(date ?? ""), "EEE dd MMM yyyy")
}

export function getValidImageSrc(src: unknown, fallback: string = 'https://placehold.net/800x600.png'): string {
    if (typeof src === 'string' && src.length > 0) {
        return src;
    }
    return fallback;
}
