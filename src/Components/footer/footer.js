import './footer.css';
import Fcoffee from '../header/svg/Fcoffee.svg'
import Coffee from '../header/svg/Coffee.svg';

const footer = () => {
    
    return(
        <div className='footer-container'>
        <div className='footer-block'>
        <div className='footer-logo'>
        <img src={Fcoffee} alt="Fcoffee" />
        </div>

        <a
        className="link-footer"
        href="#">
        Coffee house
        </a>
        <a
        className="link-footer"
        href="#">
        Our coffee
        </a>
        <a
        className="link-footer"
        href="#">
        For your pleasure
        </a>
        </div>
        <div className='coffee-block'>
        <div className='line'></div>
        <img src={Coffee} alt="swg" className='coffee-swg' />
        <div className='line'></div>
        </div>
        </div>
    )
}

export default footer;