
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Popular from './components/Popular/Popular'
import Promotion from './components/Promotion/Promotion'
import Showcase from './components/Showcase/Showcase'
import CallToAction from './components/CTA/CallToAction'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <Promotion/>
      <Popular/>
      <Showcase/>
      <CallToAction/>
      <Testimonial/>
      <Footer/>
    </main>
  )
}

export default App