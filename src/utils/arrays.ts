export function incrementArray<T>(array: T[], value: T): T[] {
    return [...array, value];
}

export function changeArray<T>(array: T[], value: T, newValue: T) {
    return [
        ...array.slice(0, array.indexOf(value)),
        newValue,
        ...array.slice(array.indexOf(value) + 1)
    ];
}
