import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import productsService from "../../services/product.service"

const ProductDetailsPage = () => {

    const [productDetails, setProductDetails] = useState({})
    const { product_id } = useParams()

    useEffect(() => {
        productsService
            .getOneProduct(product_id)
            .then(({ data }) => setProductDetails(data))
            .catch(err => console.log(err))

    }, [])
    
    return (

        <>
        <h1>Página Detalles</h1>
        </>
    )
}

export default ProductDetailsPage