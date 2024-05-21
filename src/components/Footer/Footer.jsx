import './Footer.css'

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
          <div>
            <p> All resturants</p>
            <p>Best Sellers</p>
            <p>Top Rated</p>
            <p>Newcomers</p>
          </div>
          <div>
            <p> FAQ</p>
            <p>Join Our program</p>
            <p>Be Our partners</p>
            <p>Terms & conditions</p>
          </div>
          <div>
            <p> Our parent company</p>
            <p>Make an investment</p>

          </div>
        </div>
      </div>

      <div>
        image
      </div>
    </footer>
  )
}

export default Footer