import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'


const ProductCard = ({ name, image, price, glutenfree }) => {

    const addToCart = () => {
        let cart = []
        //función para agregar al Cart
    }

    return (

        <article>

            <Card className='productCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                {glutenfree ? <Card.Text>Sin gluten</Card.Text> : <Card.Text>Gluten a tope</Card.Text>}
                <Card.Text>Precio: {price}€</Card.Text>
            
                <Card.Body>
                    <Link className='btn btn-primary' to={`/productos/:id`}>Detalles</Link>
                    <Button variant="warning" onClick={addToCart}>Agregar al carrito</Button>
                </Card.Body>
            </Card>


        </article>
    )
}

export default ProductCard