import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import productsService from '../../services/product.service'
import ProductList from '../../components/ProductList/Product.List'

const HomePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
                <h1>Catálogo de productos</h1>
                <hr/>
                <ProductList products={products}/>
            </Container>
        </div>

    )

}

export default HomePage

// {
//     products.map(prod => {
//         return (<h1>{prod.name}</h1>)
//     })
// }