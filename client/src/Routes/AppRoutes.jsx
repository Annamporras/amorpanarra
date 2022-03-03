import { Routes, Route } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import HomePage from '../pages/HomePage/HomePage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetails'


const AppRoutes = () => {


    return (
        <Routes>

            <Route path='/' element={<HomePage/>} />

            <Route path='/productos/:product_id' element={<ProductDetailsPage/>} />

            {/* <Route path='/inicio-sesion' element={<LoginForm />} /> */}

            <Route path="*" element={<h1>404</h1>} />



        </Routes>



    )
}

export default AppRoutes