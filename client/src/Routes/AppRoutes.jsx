import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AuthPage from '../pages/AuthPage/AuthPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import UsersListPage from '../pages/UsersListPage/UsersListPage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'

const AppRoutes = () => {


    return (
        <Routes>

            <Route path='/' element={<HomePage/>} />

            <Route path='/inicio-sesion' element={<AuthPage />} />

            <Route path='/productos/:product_id' element={<ProductDetailsPage/>} />

            <Route path='/perfiles' element={<UsersListPage />} />

            <Route path='/perfiles/:user_id' element={<UserDetailsPage />} />

            <Route path="*" element={<h1>404</h1>} />



        </Routes>



    )
}

export default AppRoutes