import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleResetPassword = (dataRequest) => {
  
    return createAPIEndpoint(ENDPOINTS.resetPassword)
           .post(dataRequest)
}