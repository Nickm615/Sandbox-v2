import { GetProducts } from "../utils/Query";
import {ExtendedProduct} from '../models';
import {useEffect,useState} from 'react';
import {ProductComponent} from '../components/_product';
import bikeLogo from '../media/bike-logo-2.png'
import { ProductSearch } from "./ProductSearch";


export function ProductListing() {
    const [data, setData] = useState<ExtendedProduct[] | undefined>();
    useEffect(() => {
      // GetProducts();
        const getData = async ()=>{
        setData(await GetProducts());
        // setIsLoaded(true);
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
          <h3>Popular products</h3>
          <div className="product-field">
              {(data.map((item)=>
              <ProductComponent key={item.system.id}elements={item.elements} system={item.system} shopifyObject={item.shopifyObject}/>

              
              ))}
          </div>
        </div>
      )
    
    } else{
      return(
        <div></div>
      )
    }
}