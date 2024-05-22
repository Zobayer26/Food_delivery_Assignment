import './Footer.css'
import Footer_img from '../../assets/Footer_img.png'
import Footer_img_1 from '../../assets/Footer_img_1.png'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <div className='footer_top'>
          <h1 className='footer_top_logo'>FoodDelivery  </h1>
          <ul className='footer_top_list'>
            <li>Partners</li>
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className='footer_bottom'>
          <div>
            <p>
              123 Lorem Ipsum Street
              Tangerang, Banten
            </p>
            <p>
              +10 - 234 - 5678
            </p>
          </div>
          <ul>
            <li> All resturants</li>
            <li>Best Sellers</li>
            <li>Top Rated</li>
            <li>Newcomers</li>
          </ul>
          <ul>
            <li> FAQ</li>
            <li>Join Our program</li>
            <li>Be Our partners</li>
            <li>Terms & conditions</li>
          </ul>
          <ul>
            <li> Our parent company</li>
            <li>Make an investment</li>
          </ul>
        </div>
      </div>
      <div className='footer_img'>
        <img className="img_1" src={Footer_img} alt=' ' />
        <img className="img_2" src={Footer_img_1} alt=' ' />
      </div>
    </footer>
  )
}

export default Footer