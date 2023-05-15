import { Component } from 'react';

import './lookiing-for.css';


class LookiingFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

render() {
    return(
        
            <div className='sarch'>
            <h3 className='title-for'>Lookiing for</h3>
            <input type="text" className='input-for' placeholder='start typing here...'
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
            </div>
    
        
    )
}
}

export default LookiingFor;