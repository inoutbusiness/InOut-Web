import { createAPIEndpoint, ENDPOINTS } from "../apiMap"

export const handleSignUp = (dataRequest) => {
    createAPIEndpoint(ENDPOINTS.signUp)
    .post(dataRequest)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}