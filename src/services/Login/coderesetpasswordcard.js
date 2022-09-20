import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleEmailCodeChecker = (code) => {

    return createAPIEndpoint(ENDPOINTS.emailCodeChecker) 
           .post(code)
}