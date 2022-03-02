import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => {

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" bg="warning" variant="light">
            <Container>
                <Navbar.Brand href="/"> <img
                    src="../../images/Logo.png"
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Amor Panarra logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/productos/crear">Crear Producto</Nav.Link>
                        <Nav.Link href="/perfiles">Usuarios</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/perfil">Mi cuenta</Nav.Link>
                        <Nav.Link eventKey={2} href="/carrito">
                            Logo carrito
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation