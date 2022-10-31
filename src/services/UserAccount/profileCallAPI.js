import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleUpdateUserAccountInfo = (id, dataRequest) => {

    return createAPIEndpoint(ENDPOINTS.updateUserAccountInfo)
           .put(id, dataRequest)
}