//https://stackoverflow.com/a/5915122/1218155

export function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}