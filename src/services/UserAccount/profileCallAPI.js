import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleUpdateUserAccountInfo = (id, dataRequest) => {

    return createAPIEndpoint(ENDPOINTS.others.updateUserAccountInfo)
           .put(id, dataRequest)
}