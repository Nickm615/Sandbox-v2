import { GetProducts } from "../utils/Query";
import {ExtendedProduct} from '../models';
import {useEffect,useState} from 'react';
import {ProductComponent} from '../components/Product';
// import bikeLogo from '../media/bike-logo.png'


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
            {/* <img src={bikeLogo}></img> */}
            <h1>Vicious Cycle</h1>
          </header>
  
          <div className="product-grid">
              {(data.map((item)=>
              <ProductComponent  elements={item.elements} shopifyObject={item.shopifyObject} system={item.system}/>

              
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