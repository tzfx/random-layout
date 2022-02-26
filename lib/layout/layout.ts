export class Layout {
    keys: {
        [key: string]: string[];
    } = {};

    toString(): string {
        return Object.entries(this.keys)
            .map(([_, v]) => v.join(" "))
            .join("\n");
    }
}
