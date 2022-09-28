import { Client } from "./Client";
import {Product} from '../models'

export async function ContentLoader(){
    var product : Product

   let response = await Client.items<Product>().type('product').toPromise()
   product = response.data.items[0]
   console.log(product)
   return product;
}