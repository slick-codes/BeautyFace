import products from './../api/products'
import { createContext } from 'react'

const ProductData = createContext({
    cart: [],
    products
}) 


export default ProductData