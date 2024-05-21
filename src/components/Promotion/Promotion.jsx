import './Promotion.css'
import promotion_Image from '../../assets/Images.png'
const Promotion = () => {
  return (
    <section className='promotion'>
      <div className='promotion_left'>
        <img src={promotion_Image} alt='Promotion_Image' />
      </div>
      <div className='promotion_right'>
        <h1>Take a taste, come join us. Life is so endlessly delicious</h1>
        <p>In the artist&apos;s own experience, of course, art is fundamentally
        indefinable, unsayable; there is something sacred about its demands upon the soul,
         something inherently mysterious in the forms it takes</p>
         <button className='btn'>Download our app</button>
      </div>
    </section>
  )
}

export default Promotion