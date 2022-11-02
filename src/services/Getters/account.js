import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export function getAccountIdByEmail(email) {

    return createAPIEndpoint(ENDPOINTS.others.getAccountIdByEmail)
           .post(email)
}

export function getAccountInfoById(id) {

    return createAPIEndpoint(ENDPOINTS.others.getAccountInfoById)
           .post(id)
}