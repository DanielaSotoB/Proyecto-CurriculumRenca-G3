import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Slider from '../components/Principal/Slider'
import Introduccion from '../components/Principal/Introduccion'
import Mensaje from '../components/Principal/Mensaje'
import Motivacional from '../components/Principal/Motivacional'
import Tarjetas from '../components/Principal/Tarjetas'
// import ProfileButton from '../components/navbar/ProfileButton'

const RutaAprendizaje = () => {
  return (
    <>
    <Navbar />
    {/* <ProfileButton /> */}
    <Slider /> 
    <Introduccion />
    <Mensaje />
    <Motivacional />
    <Tarjetas />



    <Footer />  
    </>
  )
}
 
export default RutaAprendizaje