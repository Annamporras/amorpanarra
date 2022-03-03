import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import productsService from '../../services/product.service'
import ProductList from '../../components/ProductList/ProductList'
import Slider from "../../components/Slider/Slider"
import './HomePage.css'


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
        <section>
            <Slider/>
            <Container className="catalog">
                <h1>Catálogo</h1>
                <hr/>
                <ProductList products={products}/>
            </Container>
        </section>

    )

}

export default HomePage

// {
//     products.map(prod => {
//         return (<h1>{prod.name}</h1>)
//     })
// }