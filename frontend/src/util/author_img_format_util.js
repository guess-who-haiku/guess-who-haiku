export const camelize = (author) => {
    let results = [];
    let parts = author.split(" ");
    let first = parts[0].toLowerCase();
    results.push(first)
    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
        results.push(part[0].toUpperCase() +
            part.slice(1));
    }
    return results.join("")
}