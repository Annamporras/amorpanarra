import { createContext, useState } from 'react';
import productsService from '../services/product.service';


const ProductsContext = createContext();

function ProductProviderWrapper(props) {
    const [shoppingList, setShoppingList] = useState([])

    const [products, setProducts] = useState({})

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }
    const addToCart = (item) => {
        setShoppingList([...shoppingList, item])
    }


    return (
        <ProductsContext.Provider value={{ loadProducts, products, addToCart, shoppingList }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductProviderWrapper };