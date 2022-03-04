import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import productService from "../../services/product.service"
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import ProductDetails from "../../components/ProductDetails/ProductDetails"


const ProductDetailsPage = () => {

    const [productDetails, setProductDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { product_id } = useParams()

    useEffect(() => {
        productService
            .getOneProduct(product_id)
            .then(({ data }) => {
                setProductDetails(data)
                setisLoading(false)
            })
            .catch(err => console.log(err))

    }, [])

    // const addToCart = () => {
    //     let cart = []
    //     //función para agregar al Cart
    // }

    return (

        <>

            {!isloading &&

                <Container className="prueba">

                    <ProductDetails productDetails={productDetails} />

                    {/* <Card.Body>
                        <Button variant="warning" onClick={addToCart}>Agregar al carrito</Button>
                    </Card.Body> */}
                </Container>
            }

        </>
    )
}

export default ProductDetailsPage