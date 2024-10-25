import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [storageValue, setStorageValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            return defaultValue
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storageValue) : value;
            setStorageValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (e) {
            console.error(`Error setting LocalStorage key: ${key}`, error);
        }
    }

    const removeValue = () => {
        try {
            localStorage.removeItem(key);
            setStorageValue(defaultValue)
        } catch (e) {
            console.error(`Error removing LocalStorage key: ${key}`, e);
        }
    }

    return [storageValue, setValue, removeValue] as const;
}

export function useSessionStorage<T>(key: string, initialValue: T) {
    // Get initial value from SessionStorage or use initialValue
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = sessionStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.error(`Error reading SessionStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Function to set new value in both state and SessionStorage
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            sessionStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting SessionStorage key "${key}":`, error);
        }
    };

    // Function to remove item from SessionStorage
    const removeValue = () => {
        try {
            sessionStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (error) {
            console.error(`Error removing SessionStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue, removeValue] as const;
}