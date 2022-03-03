import { useState, useContext } from "react"
import { Form, Row, Col, Button, Container, Card } from 'react-bootstrap'
import authService from "../../services/auth.service"
import { MessageContext } from "../../context/UserMessage.context"



const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        address: {
            street: {
                name: '',
                number: ''
            },
            postCode: '',
            city: '',
            country: ''
        }
    })

    const { username, email, password, phone, name, number, postCode, city, country } = signupData

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)
    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Te has registrado correctamente. Por favor inicia sesión' })

            })
            .catch(err => console.log(err))
    }



    return (
        <Card>
            <Container>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 mt-3" controlId="username" >
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleInputChange} name='username' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description" >
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type='email' value={email} onChange={handleInputChange} name='email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password" >
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type='password' value={password} onChange={handleInputChange} name='password' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone" >
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control type='number' value={phone} onChange={handleInputChange} name='phone' />
                    </Form.Group>
                    <Row> <h5>Dirección:</h5>
                        <Col>
                            <Form.Group className="mb-3" controlId="name" >
                                <Form.Label>Calle:</Form.Label>
                                <Form.Control type="number" value={name} onChange={handleInputChange} name='name' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="number" >
                                <Form.Label>Número:</Form.Label>
                                <Form.Control type="number" value={number} onChange={handleInputChange} name='number' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="postalCode" >
                                <Form.Label>Código Postal:</Form.Label>
                                <Form.Control type="number" value={postCode} onChange={handleInputChange} name='postalCode' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="city" >
                                <Form.Label>Ciudad:</Form.Label>
                                <Form.Control type="text" value={city} onChange={handleInputChange} name='city' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="country" >
                                <Form.Label>País:</Form.Label>
                                <Form.Control type="text" value={country} onChange={handleInputChange} name='country' />
                            </Form.Group>
                        </Col>
                    </Row>
                    < div className="d-grid gap-2 mb-3" >
                        <Button variant="warning" type="submit">Completar registro</Button>
                    </div>
                </Form>

            </Container>
        </Card>
    )
}

export default SignupForm