import {Product} from "./index"


export interface ExtendedProduct extends Product{
    shopifyObject: {
        handle: string;
        id: string;
        previewUrl: string;
        sku: string;
        title: string;
    }
}