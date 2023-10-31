export default function(str) {
    const max = 10000;
    const n = Math.floor(Math.random() * max);

    return `${str}${n}`;
}