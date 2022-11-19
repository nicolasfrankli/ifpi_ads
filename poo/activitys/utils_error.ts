export class AplicationError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class accountNotFound extends Error {
    constructor(message: string) {
        super(message);
    }
}
export class InvalidSavingError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class insufficientFunds extends AplicationError {
    constructor(message: string) {
        super(message);
    }
}

export class InvalidValueError extends AplicationError {
    constructor(message: string) {
        super(message);
    }
}

export class FileError extends Error{
    constructor(message: string) {
        super(message);
    }
}