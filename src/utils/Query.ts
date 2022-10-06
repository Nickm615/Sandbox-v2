import {Client} from "./Client";
import {Product} from "../models"

export async function GetProducts(){
  let arr: Array<Product> = [];
  const response = await Client.items<Product>().type('product').toPromise();
  
  response.data.items.map((item: Product)=>
    arr.push(item)

    )
    console.log(arr)
  return arr
    




    
  }
  