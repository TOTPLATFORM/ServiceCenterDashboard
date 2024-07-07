export const enumToArray = (enumObj: any) => {
    return Object.keys(enumObj)
        .filter(key => isNaN(Number(key)))  // Filter out numeric keys
        .map(key => ({
            label: key,
            value: key
        }));
};