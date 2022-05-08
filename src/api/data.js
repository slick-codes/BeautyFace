import { createContext } from 'react'
import products from './products'

const ProductData = createContext({
    cart: [],
    products
}) 


export default ProductData