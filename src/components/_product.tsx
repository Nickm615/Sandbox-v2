import { parse } from 'node-html-parser'
import { ExtendedProduct, Product } from "../models"
import {FunctionComponent} from 'react';
import { RichText } from './richText'

type ProductProps = ExtendedProduct
export const ProductComponent = ({elements, shopifyObject}: ProductProps)=> 
        <div className="product-card">
            <img className="product-img" width={'300px'} height={'200px'} src={shopifyObject.previewUrl}/>
            <h4 className='product-description'>{shopifyObject.title}</h4>
            <RichText element={elements.description}></RichText>
            <div>
            </div>
        </div>

    
