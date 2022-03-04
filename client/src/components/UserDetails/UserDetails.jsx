import { Card, Button, Row, Col, Container } from 'react-bootstrap'

const UserDetails = ({userDetails}) => {

    const { username, email, phone, address, role, _id } = userDetails

    return (
                <Container className="prueba">

                    <Card.Body>
                        <Card.Title><h1>{username}</h1></Card.Title>
                    </Card.Body>

                    <Card.Body>
                        <hr />
                        <Card.Title>Contacto</Card.Title>
                        <Card.Text>Teléfono: {phone}</Card.Text>
                        <Card.Text>email: {email}</Card.Text>
                        <hr />
                        <Card.Title>Dirección</Card.Title>
                        <Card.Text>Calle {address.street.name} {address.street.number}, {address.postCode} {address.city}, {address.country}</Card.Text>
                        <hr />

                    </Card.Body>


                </Container>
    )
}

export default UserDetails