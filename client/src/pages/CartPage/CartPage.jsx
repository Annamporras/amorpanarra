import { useContext } from "react"
import { ProductsContext } from "../../context/Products.context"
import { Container, Table, Button, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {

    const { shoppingList } = useContext(ProductsContext)
    console.log(shoppingList)

    function totalSum() {
        let resultSum = 0
        shoppingList.map((elm) => {
            resultSum += elm.price
        })
        return resultSum.toFixed(2)


    }
    function totalItemSum() {
        let sum = 0

        return sum += shoppingList.length
    }
    let shippingCost = 3.50
    // esta operación no está bien :()
    function totalResult() {

        return shippingCost += totalSum()
    }


    return (

        <Container>
            <h1>Detalles de tu pedido</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                {shoppingList.map(product => {
                    return <tbody>
                        <tr>
                            <td>{shoppingList.length}</td>
                            <td><img className='tableImage' src={product.image} /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>

                    </tbody>
                })
                }

                <tfoot>
                    <tr>
                        <th>{totalItemSum()}</th>
                        <th></th>
                        <th>Subtotal</th>
                        <th>{totalSum()} €</th>
                    </tr>
                </tfoot>

            </Table>
            <Row className="justify-content-md-end">
                <Col md={{ span: 3, offset: 3 }}>
                    <h3>Total compra</h3>
                    <Table striped bordered hover >
                        <tbody >
                            <tr>
                                <td>Subtotal:</td>
                                <td>{totalSum()} €</td>
                            </tr>
                            <tr>
                                <td>Gastos de envío:</td>
                                <td>{shippingCost} €</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>{totalResult()} €</td>
                            </tr>

                        </tbody>

                    </Table>
                </Col>
            </Row>
            <Row >
                <Col >
                    <Link to='/'>
                        <Button className='btn btn-outline-warning' variant="light" size='lg'>Seguir comprando</Button>
                    </Link>
                </Col>
                <Col md={{ span: 3, offset: 3 }}>
                    <Link to='/finalizar-compra' >
                        <Button className='buyButton btn btn-outline-warning' style={{ width: '100%' }} variant="dark" size='lg'>Finalizar compra</Button>
                    </Link>
                </Col>
            </Row>
            <br />
        </Container>

    )
}

export default CartPage