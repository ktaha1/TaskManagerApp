

class CustomAPIError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustumAPIError(msg, statusCode)
}

module.exports = {createCustomError, CustomAPIError}