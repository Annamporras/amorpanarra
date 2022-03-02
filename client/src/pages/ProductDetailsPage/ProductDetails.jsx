import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import productsService from "../../services/product.service"
import './ProductDetails.css'

const ProductDetailsPage = () => {

    const [productDetails, setProductDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { product_id } = useParams()
    

    useEffect(() => {
        productsService
            .getOneProduct(product_id)
            .then(({ data }) => {
                setProductDetails(data)
                setisLoading(false)
            })
            .catch(err => console.log(err))

    }, [])

    return (

        <>

           {!isloading && <h1 className="prueba">Detalles de {productDetails.name}</h1>}

        </>
    )
}

export default ProductDetailsPage