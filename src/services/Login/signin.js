import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleSignIn = (dataRequest) => {
    
    return createAPIEndpoint(ENDPOINTS.signIn)
           .post(dataRequest)
}