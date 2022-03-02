import axios from 'axios'

class ProductsService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/products` })


// AQUI VA EL INTECEPTOOOOOOOOOOOOORRRRR

    }

    getAllProducts = () => {
        return this.api.get('/getAllProducts')
    }

    getOneProduct = id => {
        return this.api.get(`/getOneProduct/${id}`)
    }

    createProduct = product => {
        return this.api.post(`/createProduct`, product)
    }

    editProduct = product_id =>{
        return this.api.put('/edit/:product_id', product_id)
    }

    deleteProduct = product_id => {
        return this.api.delete('/delete/:product_id', product_id)
    }
}
const productsService = new ProductsService()

export default productsService