
import './filter-item.css';

const AppFilter = (props) => {
    const buttonsData = [
        {type: 'Brazil', lable: 'Brazil', di: 1},
        {type: 'Kenya', lable: 'Kenya', di: 2},
        {type: 'Columbia', lable: 'Columbia', di: 3},
    ];
    const buttons = buttonsData.map(({type, lable}) => {
        /* const active = props.filter === name; */
        return (

            <button type="button"
            className="btn-filter"
            key = {type}
            onClick={() => props.onFilterSelect(type)}>
                {lable}
            </button>
           
        )
    })

    return (
        <div className='filter'>
        <h3 className='title-filter'>Or filter</h3>
            {buttons}
        </div>
    )

}

export default AppFilter;