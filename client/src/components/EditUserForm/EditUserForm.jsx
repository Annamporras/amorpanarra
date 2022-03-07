import { useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import usersService from "../../services/user.service";
import { MessageContext } from "../../context/UserMessage.context"

const EditUserForm = () => {

    const [userDetails, setUserDetails] = useState({})
    const [editData, setEditData] = useState({userDetails})
    const [isloading, setisLoading] = useState(true)
    const { user_id } = useParams()
    
    const { username, userlastname, email, phone, address, role, _id } = userDetails
    
    useEffect(() => {
        usersService
            .getOneUser(user_id)
            .then(({ data }) => {
                setUserDetails(data)
                setisLoading(false)
            })
            .catch(err => console.log(err))

    }, [])
    
    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        usersService
            .editUser (_id)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario editado' })
                navigate(`/perfiles/${_id}`)
                
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setEditData({
            ...editData,
            [name]: value
        })
    }

    return (
        <Card>
            <Container>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 mt-3" controlId="username" >
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control type="text" value={username} onChange={handleInputChange} name='username' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3 mt-3" controlId="userlastname" >
                                <Form.Label>Apellido:</Form.Label>
                                <Form.Control type="text" value={userlastname} onChange={handleInputChange} name='userlastname' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="description" >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type='email' value={email} onChange={handleInputChange} name='email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone" >
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control type='number' value={phone} onChange={handleInputChange} name='phone' />
                    </Form.Group>
                    <Row> <h5>Dirección:</h5>
                        <Col>
                            <Form.Group className="mb-3" controlId="name" >
                                <Form.Label>Calle:</Form.Label>
                                <Form.Control type="text" value={address.street.name} onChange={handleInputChange} name='name' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="number" >
                                <Form.Label>Número:</Form.Label>
                                <Form.Control type="number" value={address.street.number} onChange={handleInputChange} name='number' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="postCode" >
                                <Form.Label>Código Postal:</Form.Label>
                                <Form.Control type="number" value={address.postCode} onChange={handleInputChange} name='postCode' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="city" >
                                <Form.Label>Ciudad:</Form.Label>
                                <Form.Control type="text" value={address.city} onChange={handleInputChange} name='city' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="country" >
                                <Form.Label>País:</Form.Label>
                                <Form.Control type="text" value={address.country} onChange={handleInputChange} name='country' />
                            </Form.Group>
                        </Col>
                    </Row>
                    < div className="d-grid gap-2 mb-3" >
                        <Button variant="warning" type="submit">Completar</Button>
                    </div>
                </Form>

            </Container>
        </Card >
    )
}

export default EditUserForm