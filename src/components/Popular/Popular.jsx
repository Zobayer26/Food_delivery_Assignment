import './Popular.css'
import { FaArrowRight } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import Photo_1 from '../../assets/Photo_1.png'
import Photo_2 from '../../assets/Photo_2.png'
import Photo_3 from '../../assets/Photo_3.png'
import Photo_4 from '../../assets/Photo_4.png'
import Photo_5 from '../../assets/Photo_5.png'
import delivery_icon from '../../assets/delivery_icon.png'



const Popular = () => {
    return (
        <section className='popular'>
            <div className='popular_top'>
                <h2>Popular on New York area</h2>
                <p>View All <span><FaArrowRight /></span></p>
            </div>
            <div className='popular_bottom'>
                <div className='item'>
                    <figure>
                        <img src={Photo_1} alt='' />
                    </figure>
                    <div className='details'>
                        <h5 className='title'>Restaurant Name</h5>
                        <div className='info'>
                        <p className='fee'>
                                    <img src={delivery_icon} alt='' width={18} height={24} />
                                    <span>$ 9.99 Delivery Fee </span>
                                </p>
                            <p className='fee'><span><LuClock4 /></span> 10 - 15 mins</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div>
                        <figure>
                            <img src={Photo_2} alt='' />
                        </figure>
                        <div className='details'>
                            <h5 className='title'>Restaurant Name</h5>
                            <div className='info'>
                            <p className='fee'>
                                    <img src={delivery_icon} alt='' width={18} height={24} />
                                    <span>$ 9.99 Delivery Fee </span>
                                </p>
                                <p className='fee'><span><LuClock4 /></span> 10 - 15 mins</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <figure>
                            <img src={Photo_3} alt='' />
                        </figure>
                        <div className='details'>
                            <h5 className='title'>Restaurant Name</h5>
                            <div className='info'>
                            <p className='fee'>
                                    <img src={delivery_icon} alt='' width={18} height={24} />
                                    <span>$ 9.99 Delivery Fee </span>
                                </p>
                                <p className='fee'><span><LuClock4 /></span> 10 - 15 mins</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item' >
                    <div>
                        <figure>
                            <img src={Photo_4} alt='' />
                        </figure>
                        <div className='details'>
                            <h5 className='title'>Restaurant Name</h5>
                            <div className='info'>
                            <p className='fee'>
                                    <img src={delivery_icon} alt='' width={18} height={24} />
                                    <span>$ 9.99 Delivery Fee </span>
                                </p>
                                <p className='fee'><span><LuClock4 /></span> 10 - 15 mins</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <figure>
                            <img src={Photo_5} alt='' />
                        </figure>
                        <div className='details'>
                            <h5 className='title'>Restaurant Name</h5>
                            <div className='info'>
                                <p className='fee'>
                                    <img src={delivery_icon} alt='' width={18} height={24} />
                                    <span>$ 9.99 Delivery Fee </span>
                                </p>
                                <p className='fee'><span><LuClock4 /></span> 10 - 15 mins</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Popular