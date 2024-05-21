import './Popular.css'
import Photo_1 from '../../assets/Photo_1.png'
import Photo_2 from '../../assets/Photo_2.png'
import Photo_3 from '../../assets/Photo_3.png'
import Photo_4 from '../../assets/Photo_4.png'
import Photo_5 from '../../assets/Photo_5.png'




const Popular = () => {
    return (
        <section className='popular'>
            <div className='popular_top'>
                <h5>Popular on New York area</h5>
                <p>View All</p>
            </div>
            <div className='popular_bottom'>
                <div className='item'>
                    <figure>
                        <img src={Photo_1} alt='' />
                    </figure>
                    <div className='details'>
                        <h5 className='title'>Restaurant Name</h5>
                        <div className='info'>
                            <p className='fee'><span>icon</span> $ 9.99 Delivery Fee</p>
                            <p className='fee'><span>icon</span> 10 - 15 mins</p>
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
                            <p className='fee'><span>icon</span> $ 9.99 Delivery Fee</p>
                            <p className='fee'><span>icon</span> 10 - 15 mins</p>
                        </div>
                    </div>
                    </div>
                    <div>
                        <figure>
                            <img src={Photo_3} alt='' />
                        </figure>
                        <div className='details'>
                        <h5 className='title'>Restaurant Name</h5>
                        <div className='info'>
                            <p className='fee'><span>icon</span> $ 9.99 Delivery Fee</p>
                            <p className='fee'><span>icon</span> 10 - 15 mins</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='item'>
                    <div>
                        <figure>
                            <img src={Photo_4} alt='' />
                        </figure>
                        <div className='details'>
                        <h5 className='title'>Restaurant Name</h5>
                        <div className='info'>
                            <p className='fee'><span>icon</span> $ 9.99 Delivery Fee</p>
                            <p className='fee'><span>icon</span> 10 - 15 mins</p>
                        </div>
                    </div>
                    </div>
                    <div>
                        <figure>
                            <img src={Photo_5} alt='' />
                        </figure>
                        <div className='details'>
                        <h5 className='title'>Restaurant Name</h5>
                        <div className='info'>
                            <p className='fee'><span>icon</span> $ 9.99 Delivery Fee</p>
                            <p className='fee'><span>icon</span> 10 - 15 mins</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Popular