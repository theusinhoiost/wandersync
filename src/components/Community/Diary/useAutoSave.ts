import { useEffect } from "react";

export function useAutoSave<T>(
    key: string,
    data: T,
    delay = 1000
) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(data));
        }, delay);

        return () => clearTimeout(timeout);
    }, [key, data, delay]);
}
