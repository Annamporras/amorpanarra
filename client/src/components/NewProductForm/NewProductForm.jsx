import { Form } from 'react-bootstrap'

const NewProductForm = () => {

    return (
        <Form><h3>Crear un producto</h3>
            <Form.Group className="mb-3 mx-auto" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre de producto:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ingredientes:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Precio:</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Gluten Free"
                ></Form.Check>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Featured"
                ></Form.Check>
            </Form>
        </Form>
    )
}


export default NewProductForm

