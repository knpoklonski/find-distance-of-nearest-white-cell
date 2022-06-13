export class ParsingError extends Error {
    line: number;

    constructor(message: string, line: number) {
        super(message);
        this.line = line;
        Object.setPrototypeOf(this, ParsingError.prototype);
    }

    getErrorMessage() {
        return `Parsing error ${this.message} at line ${this.line}`;
    }
}