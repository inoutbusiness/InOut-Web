import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export function getAccountIdByEmail(email) {

    return createAPIEndpoint(ENDPOINTS.getAccountIdByEmail)
           .post(email)
}

export function getAccountInfoById(id) {

    return createAPIEndpoint(ENDPOINTS.getAccountInfoById)
           .post(id)
}