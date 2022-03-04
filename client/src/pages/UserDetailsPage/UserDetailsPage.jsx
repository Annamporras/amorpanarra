import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import usersService from "../../services/user.service"
import { MessageContext } from "../../context/UserMessage.context"

const UserDetailsPage = () => {

    const [userDetails, setUserDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { user_id } = useParams()
    const { username, email, phone, address, role, _id } = userDetails


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

    const deleteProfile = () => {
        usersService
            .deleteUser(_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario eliminado' })
            })
            .catch(err => console.log(err))
    }

    return (
        <>

            {!isloading &&
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

                    <Card.Body>
                        {/* BOTÓN DE EDITAR */}
                        <Button variant="danger" onClick={deleteProfile}>Eliminar</Button>
                    </Card.Body>
                </Container>
            }
        </>
    )
}

export default UserDetailsPage