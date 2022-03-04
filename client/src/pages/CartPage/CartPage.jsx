import { useContext } from "react"
import { ProductsContext } from "../../context/Products.context"
import { Container, Table } from "react-bootstrap"
import './CartPage.css'

const CartPage = () => {

    const { shoppingList } = useContext(ProductsContext)
    console.log(shoppingList)

    function totalSum() {
        let totalSum = 0
        shoppingList.map((elm) => {
            totalSum += elm.price
        })
        return totalSum.toFixed(2)
    }
    function totalItemSum() {
        let sum = 0

        return sum += shoppingList.length
    }




    return (

        <Container>
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
                        <th>Total</th>
                        <th>{totalSum()}</th>
                    </tr>
                </tfoot>

            </Table>
        </Container>
    )
}

export default CartPage