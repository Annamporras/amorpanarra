import { Card, Button, Row, Col, Container } from 'react-bootstrap'



const ProductDetails = ({ productDetails }) => {

    const { name, description, image, ingredients, category, weight, glutenfree, featured } = productDetails

    return (
        <Container>
            <Row>
                <Col>
                    <Card.Body>
                        <Card.Title><h1>{name}</h1></Card.Title>
                        <Card.Title>Descripción</Card.Title>
                        <hr />
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Col>
                <Col><Card.Img variant="top" src={image} /></Col>
                <Card.Body>
                    <Card.Title>Ingredientes</Card.Title>
                    <hr />
                    <Card.Text>{ingredients}</Card.Text>
                    <Card.Title>Categoria</Card.Title>
                    <hr />
                    <Card.Text>{category}</Card.Text>
                    <Card.Title>Información adicional</Card.Title>
                    <hr />
                    <Card.Text>Sin gluten: {glutenfree}</Card.Text>
                    <Card.Text>Peso: {weight}</Card.Text>
                    <Card.Text>Destacado: {featured}</Card.Text>
                </Card.Body>
            </Row>
            <Card.Body>

            </Card.Body>
        </Container>
    )
}

export default ProductDetails