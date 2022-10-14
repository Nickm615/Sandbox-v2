import {Client} from "./Client";
import {Product, ExtendedProduct} from "../models";
import { Elements } from "@kontent-ai/delivery-sdk";
import { parse } from 'node-html-parser';

export async function GetProducts(){
  let arr: Array<ExtendedProduct> = [];
  const response = await Client.items<ExtendedProduct>().type('product').toPromise();
  
  response.data.items.map((item: ExtendedProduct)=>{
    item.shopifyObject =  JSON.parse(item.elements.shopify.value).pop();
    arr.push(item)
    return

  }

    )
    console.log(arr)
  return arr
    




    
  }
  