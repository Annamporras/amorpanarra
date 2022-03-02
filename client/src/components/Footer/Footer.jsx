import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <footer>
            <article className='subfooter'>
                <ul >
                    <Link to='/nosotros'><li>SOBRE NOSOTROS</li></Link>
                    <br />
                    <Link to='/contacto'><li>CONTACTO</li></Link>
                </ul>

            </article>

            <hr />
            <article className='footerEnd'>
                <p>Developed by Ernesto & Anna</p>
            </article>
        </footer >
    )
}

export default Footer