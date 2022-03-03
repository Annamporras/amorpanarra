import { useContext, useState } from "react"
import authService from '../../services/auth.service'
import { Form, Button, Card, Container } from 'react-bootstrap'
import './LoginForm.css'
import { useNavigate } from "react-router-dom"


const LoginForm = () => {

    const [loginForm, setloginForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    //const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    //const { storeToken, authenticateUser } = useContext(AuthContext)


    const handleInputChange = e => {
        const { name, value } = e.target
        setloginForm({
            ...loginForm,
            [name]: value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        authService
            .login(loginForm)
            .then(({ data }) => console.log(data))

    }

    return (
        <Container className="separate">
            <Card.Title>Inicio sesión</Card.Title>
            <Card  style={{ width: '30rem' }}>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="warning" type="submit" style={{ width: '100%' }}>Iniciar sesión</Button>

                </Form>
            </Card>
        </Container>
    )
}

export default LoginForm