export function getRandomNumber(length = 24) {
    return Math.random().toString(16).substr(2, length);
}
