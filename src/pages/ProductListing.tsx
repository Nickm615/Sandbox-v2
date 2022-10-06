import { GetProducts } from "../utils/Query";
import {Product} from '../models';
import {useEffect,useState} from 'react';


export function ProductListing() {
    const [data, setData] = useState<Product[] | undefined>();
    useEffect(() => {
      // GetProducts();
        const getData = async ()=>{
        setData(await GetProducts());
        // setIsLoaded(true);
        };
        getData();

    },[]);
    if (data){
      let shopify = JSON.parse(data[0].elements.shopify.value)
      console.log(shopify)
      return (
        <div className="App">
          <header className="App-header">
          <div>
              {(data.map((item)=>
              <div>
                <h4>{item.elements.name.value}</h4>
                <img className="product-image"src={shopify[0].previewUrl}/>
                <p>{shopify[0].id}</p>

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