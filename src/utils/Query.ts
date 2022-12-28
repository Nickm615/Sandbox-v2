import {Client} from "./Client";
import {ExtendedProduct, Post} from "../models";
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
  return arr
}

export async function GetRichTexts(){
  const response = await Client
  .item<Post>('example_post')
  // .type('post')
  .toPromise();
  const item: Post = response.data.item;
  console.log('item', item)
  return item
}
  