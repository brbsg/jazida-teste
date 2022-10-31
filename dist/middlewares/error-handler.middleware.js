import { errorTypeToStatusCode, isAppError, } from "../utils/error-utils.js";
export function errorHandler(err, req, res, next) {
    console.log(err);
    if (isAppError(err)) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message);
    }
    return res.sendStatus(500);
}
