import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import usersService from "../../services/user.service"
import { MessageContext } from "../../context/UserMessage.context"
import UserDetails from "../../components/UserDetails/UserDetails"

const UserDetailsPage = () => {

    const [userDetails, setUserDetails] = useState({})
    const [isloading, setisLoading] = useState(true)
    const { user_id } = useParams()

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
            .deleteUser(user_id)
            .then(() => {
                setShowMessage(true)
                setMessageInfo({ title: 'Hecho!', desc: 'Usuario eliminado' })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {!isloading &&
                <Container>

                    <UserDetails userDetails={userDetails} />

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