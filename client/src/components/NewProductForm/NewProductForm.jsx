import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { MessageContext } from '../../context/UserMessage.context'
import productsService from '../../services/product.service'
import uploadService from '../../services/upload.service'


const NewProductForm = () => {

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        ingredients: '',
        price: 0,
        image: '',
        glutenfree: 'false',
        featured: 'false'
    })

    const { name, description, ingredients, price, image, glutenfree, featured } = productData

    const handleInputChange = e => {

        const { value, name } = e.target

        setProductData({
            ...productData,
            [name]: value
        })
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const uploadProductImage = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setProductData({ ...productData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)


    const handleSubmit = e => {
        e.preventDefault()

        productsService
            .createProduct(productData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Has creado un nuevo producto' })
            })
            .catch(err => console.log(err))
    }


    return (
        <Form onSubmit={handleSubmit}><h3>Crear un producto</h3>
            <Form.Group className="mb-3" controlId="name" >
                <Form.Label>Nombre de producto:</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name='name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description" >
                <Form.Label>Descripción:</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={handleInputChange} name='description' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ingredients" >
                <Form.Label>Ingredientes:</Form.Label>
                <Form.Control as="textarea" rows={3} value={ingredients} onChange={handleInputChange} name='ingredients' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price" >
                <Form.Label>Precio:</Form.Label>
                <Form.Control type="number" value={price} onChange={handleInputChange} name='price' />
            </Form.Group>
            <Form.Group controlId="productImage" className="mb-3">
                <Form.Label>Seleccionar imagen</Form.Label>
                <Form.Control type="file" onChange={uploadProductImage} />
            </Form.Group>

            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Gluten Free`}
                        checked={glutenfree}
                        onChange={handleInputChange}
                        name='glutenfree'
                    ></Form.Check>
                </div>
            ))}


            < div className="d-grid gap-2" >
                <Button variant="warning" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere por favor...' : 'Crear nuevo producto'}</Button>
            </div>
        </Form >
    )
}


export default NewProductForm

{/* <Form.Check
        type="switch"
        id="custom-switch"
        label="Gluten Free"
        checked={glutenfree}
        onChange={handleInputChange}
        name='glutenfree'
    ></Form.Check>
    
    <Form.Check
        type="switch"
        id="custom-switch"
        label="Featured"
        checked={featured}
        onChange={handleInputChange}
        name='featured'
    ></Form.Check> */}
