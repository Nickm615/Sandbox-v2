import { GetProducts } from "../utils/Query";
import {ExtendedProduct} from '../models';
import {useEffect,useState} from 'react';
import {ProductComponent} from '../components/_product';
import bikeLogo from '../media/bike-logo-2.png'
import { ProductSearch } from "./ProductSearch";


export function ProductListing() {
    const [data, setData] = useState<ExtendedProduct[] | undefined>();
    useEffect(() => {
        const getData = async ()=>{
        setData(await GetProducts());
        };
        getData();

    },[]);
    if (data){
      return (
        
        <div>
          <header className='product-header'>
            <img className="logo" src={bikeLogo}></img>
            <h1>Vicious Cycle</h1>
          </header>
          <ProductSearch/>
        </div>
      )
    
    } else{
      return(
        <div></div>
      )
    }
}