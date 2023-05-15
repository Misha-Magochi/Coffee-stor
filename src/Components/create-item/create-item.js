import { Component } from "react";
import coffee from '../img/coffee.jpg';
import './create-item.css';

class CreateItem extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {name, price, type} = this.props;
        return (
            <ul className='card-holder'>
            <img src={coffee} alt="coffee" />
            <h4 className='item-title'>{name}</h4>
            <div className='type-coffee'>{type}</div>
            <div className='item-price'>{price + '$'}</div>
        </ul>
        )
    }
}

export default CreateItem;