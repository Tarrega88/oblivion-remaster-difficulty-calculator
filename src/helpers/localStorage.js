export function loadState(key) {
    try {
        const serialized = localStorage.getItem(key);
        return serialized ? JSON.parse(serialized) : undefined;
    } catch (e) {
        return undefined;
    }
}

export function saveState(key, state) {
    try {
        localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {

    }
}