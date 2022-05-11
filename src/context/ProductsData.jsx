import products from './../api/products'
import { createContext } from 'react'
import catigories from './../api/catigories'

const ProductData = createContext({
    cart: [],
    products,
    catigories
}) 


export default ProductData