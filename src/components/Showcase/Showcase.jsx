import './Showcase.css'
import ShowcaseData from '../../utils/ShowcaseData'
import Ornament from '../../assets/Ornament.png'

const Showcase = () => {
  return (
    <section className='showcase'>
      <p className='title'>How it works</p>
      <div className='showcase_container'>
        {ShowcaseData.map((item) => (
          <div className='container_box'
            key={item.id}>
            <h1>{item.title}</h1>
            <div className='figure'>
              <img src={Ornament} alt='Ornament_img' />
              <img className='img' src={item.image} alt={item.title} />
            </div>
            <p >{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Showcase