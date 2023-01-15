import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleGetAllProductsInfo = () => {

    return createAPIEndpoint(ENDPOINTS.others.getAllProducts)
           .getAll();
}