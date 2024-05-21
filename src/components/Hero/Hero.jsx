
import './Hero.css'
import { TiLocationOutline } from "react-icons/ti";
const Hero = () => {
  return (
    <section className='hero'>
     <div className='hero_details'>
     <h1>Your favorite food, delivered to you</h1>
      <div className='searchbar'>
        <div className="location">
          <TiLocationOutline className='icon' />
          <p>New York</p>
        </div>
        <hr className='line' />
        <input
          placeholder=''
          type='text'
        />
        <button className='btn'>Search</button>
      </div>
     </div>
    </section>
  )
}

export default Hero