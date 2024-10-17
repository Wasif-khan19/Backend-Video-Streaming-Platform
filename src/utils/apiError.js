class ApiError extends Error {
    //3852
    constructor
        (
            statusCode,
            message = 'Internal Server Error',
            errors = [],
            stack = '',

        ) {
        super(message);
        this.statusCode = statusCode; 
        this.message = message;
        this.data = null;
        this.succes = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}