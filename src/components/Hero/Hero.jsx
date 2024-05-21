
import './Hero.css'
import { CiLocationOn } from "react-icons/ci";
const Hero = () => {
  return (
    <section className='hero'>
      <h1>Your favorite food, delivered to you</h1>
      <div className='searchbar'>
        <input
          placeholder='Search here'
          type='text'
          value="New York"
          readOnly
        />
        <div className='icon'>
          <CiLocationOn />
        </div>
        <button className='btn'>Search</button>
      </div>
    </section>
  )
}

export default Hero