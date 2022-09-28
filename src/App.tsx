import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GetProducts } from "./utils/Query";
import {Product} from './models';
import ProductComponent from './components/Product'
import {useEffect, useState} from 'react';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<Product[] | undefined>();
      useEffect(() => {
        // GetProducts();
          const getData = async ()=>{
          setData(await GetProducts());
          console.log(data)
          setIsLoaded(true);
          };
          getData();

      },[]);
      if (data){
        return (
          <div className="App">
            <header className="App-header">
            <div>
              <h1>{data[0].elements.title.value}</h1>
              <img src={data[0].elements.image.linkedItems[0].elements.asset.value[0].url}/>
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

export default App;
