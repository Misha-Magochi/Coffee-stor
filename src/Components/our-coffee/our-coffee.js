
import './our-coffee.css';
import cover from '../img/cover.jpg'


const OurCoffee = () => {
    return(
        <div className='block' >
    <div className='our'>
        <h1 className='our-title'>Our Coffee</h1>
        
    </div>
    < img src={cover} alt="cover" className='our-img' />
    </div>
)
}
export default OurCoffee;