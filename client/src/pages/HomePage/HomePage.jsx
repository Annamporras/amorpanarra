import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import productsService from '../../services/product.service'
import ProductList from '../../components/ProductList/ProductList'
import Slider from "../../components/Slider/Slider"
import './HomePage.css'
import LoadingSpinner from "../../components/Spinner/Spinner"


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
            <Slider />
            <Container className="catalog">
                <h1>Productos</h1>
                <hr />
                {!products.length ? <LoadingSpinner /> : <ProductList products={products} />}
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