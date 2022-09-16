import { Client } from "./Client";
import {Product} from '../models'

export async function ContentLoader(){
   let response = await Client.items<Product>().type('product').toPromise();
   console.log(response)
   return response;
}