export default function handleDate(start: string, end?: string): string {
    if (end === "undefined") {
        return `${start} - Present`;
    } else if (start === end) {
        return `${start}`;
    } else {
        return `${start} - ${end}`;
    }
}