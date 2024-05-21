import './Testimonial.css'
import testimonialImage from '../../assets/Rectangle.png'
import TestimonialLogo from '../../utils/TestimonialLogo.js'

const Testimonial = () => {
  return (
    <section className='testimonial'>
      <h1 className='testimonial_title'>What our food lovers said</h1>
      <p className=' testimonial_para'>In the artist&apos;s own experience, of course, art is
        fundamentally indefinable, unsayable; there is something sacred
        about its demands upon the soul, something
        inherently mysterious in the forms it takes</p>
      <div className='testi_card'>
        <img src={testimonialImage} alt='' />
        <div className='testi_card_details'>
          <div className='testi_card_box'>
            <div className='testi_card_oval'>

            </div>
            <h3>In the artist&apos;s own experience, of course, art is
              fundamentally indefinable, unsayable</h3>
            <p className='testi_card_para'>
              Tim Oliver, ordered Burger Extracheese
            </p>
          </div>
        </div>
      </div>
      <div>
        {TestimonialLogo.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo} alt='' />
        ))}
      </div>
    </section>
  )
}

export default Testimonial