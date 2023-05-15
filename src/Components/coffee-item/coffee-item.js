import CreateItem from '../create-item/create-item'

import './coffee-item.css';
const CoffeeItem = ({data, }) => {

const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return(
        <CreateItem
        key={id} {...itemProps}
        />
    ) 
})





    return(
        <ul className='cart-container'>
            {elements}
        </ul>
    )
}
export default CoffeeItem;