import { parse } from 'node-html-parser'
import { ExtendedProduct, Product } from "../models"
import {FunctionComponent} from 'react';

type ProductProps = ExtendedProduct
export const ProductComponent = ({elements, shopifyObject}: ProductProps)=> 
        <div className="product-card">
            <img className="product-img" width={'300px'} height={'200px'} src={shopifyObject.previewUrl}/>
            <p>{shopifyObject.title}</p>
            <div>
            </div>
        </div>

    
