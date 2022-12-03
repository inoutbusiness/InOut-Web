import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleGetAllUsersInfo = () => {

    return createAPIEndpoint(ENDPOINTS.others.getAllUsers)
           .getAll();
}