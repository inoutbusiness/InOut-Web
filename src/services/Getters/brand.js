import { createAPIEndpoint, ENDPOINTS } from "../apiMap";

export const handleGetAllBrandsInfo = () => {

    return createAPIEndpoint(ENDPOINTS.others.getAllBrands)
           .getAll();
}