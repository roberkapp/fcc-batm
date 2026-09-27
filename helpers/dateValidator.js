export const dateValidator = (date) => {
    if(!date) return new Date(Date.now());
    if(!isNaN(date)) return new Date(Number(date));
    return new Date(date);
} 