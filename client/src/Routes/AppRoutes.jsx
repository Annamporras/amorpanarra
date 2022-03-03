import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AuthPage from '../pages/AuthPage/AuthPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetails'



const AppRoutes = () => {


    return (
        <Routes>

            <Route path='/' element={<HomePage/>} />

            <Route path='/inicio-sesion' element={<AuthPage />} />

            <Route path='/productos/:product_id' element={<ProductDetailsPage/>} />

            <Route path="*" element={<h1>404</h1>} />



        </Routes>



    )
}

export default AppRoutes