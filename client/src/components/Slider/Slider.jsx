import { Carousel } from 'react-bootstrap'
import './Slider.css'

const Slider = () => {

    return (
        <div>

            <Carousel variant='dark' className='sliderSize'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319946/Amor%20Panarra/slider1_pi9tnf.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319947/Amor%20Panarra/slider2_znl526.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dabjtydsw/image/upload/v1646319950/Amor%20Panarra/slider3_kydzrh.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider