import { GetProducts } from "../utils/Query";
import {Product, ExtendedProduct} from '../models';
import {useEffect,useState} from 'react';


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
        <div className="App">
          <header className="App-header">
          <div>
              {(data.map((item)=>
              <div>
                <h4>{item.elements.name.value}</h4>
                <img className="product-image"src={item.shopifyObject?.previewUrl}/>

              </div>
              ))}
          </div>
          </header>
        </div>
      )
    
    } else{
      return(
        <div></div>
      )
    }
}