import axiosInstance from "../apiResp.ts";
import {BLResponse} from "../response/BLResponse.ts";
import {Product} from "../response/sys/Product.ts";


export async function getProductList(): Promise<BLResponse<Product[]> | undefined> {
    try {
        return await axiosInstance.get("/acquisition-backend/backend/getProductIntroduce")
    } catch (err) {
        console.log(err);
    }
    return undefined
}