import { GetProducts } from "../utils/Query";
import {ExtendedProduct} from '../models';
import {useEffect,useState} from 'react';
import {ProductComponent} from '../components/_product';
import bikeLogo from '../media/bike-logo-2.png'


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
          <h3>Popular products</h3>
          <div className="product-field">
              {(data.map((item)=>
              <ProductComponent elements={item.elements} shopifyObject={item.shopifyObject} system={item.system}/>

              
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