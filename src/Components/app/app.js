/* import { Component } from "react"; */
import Header from '../header/header';
import OurCoffee from '../our-coffee/our-coffee';
import AboutOur from '../about-our/about-our';
import LookiingFor from '../lookiing-for/lookiing-for';
import AppFilter from '../filter-item/filter-item'
import CoffeeItem from '../coffee-item/coffee-item';
import Footer from '../footer/footer'
import { Component } from 'react';

import './app.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Arabica Coffee 1 kg', type: 'Brazil', price: 6.99, id: 1},
                {name: 'Robusta Coffee 1 kg', type: 'Kenya', price: 6.99, id: 2},
                {name: 'Liberica Coffee 1 kg', type: 'Columbia', price: 6.99, id: 3},
                {name: 'Excelsa Coffee 1 kg', type: 'Brazil', price: 6.99, id: 4},
                {name: 'Mocha Coffee 1 kg', type: 'Brazil', price: 6.99, id: 5},
                {name: 'Maragogipe Coffee 1 kg', type: 'Brazil', price: 6.99, id: 6}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 7;
    }

searchEmp = (items, term) => {
   if (term.legth === 0) {
    return items;
   }
return items.filter(item => {
    return item.name.indexOf(term) > -1
})
}

onUpdateSearch = (term) => {
    this.setState({term});
}

filterPost = (items, filter) => {
    switch (filter) {
        case 'Brazil':
            return items.filter(item => item.type == 'Brazil');
        case 'Kenya':
            return items.filter(item => item.type == 'Kenya');
        case 'Columbia':
            return items.filter(item => item.type == 'Columbia');
        default:
            return items
    }

}

onFilterSelect = (filter) => {
    this.setState({filter});
}

render() {
    const {data, term, filter} = this.state;
    const visidleData = this.filterPost(this.searchEmp(data, term), filter);

    return(
        <div className="app">
            <Header />
            <OurCoffee/>
            <AboutOur/>
            <div className='lookiing-for'>
            <LookiingFor 
            onUpdateSearch={this.onUpdateSearch}
            onFilterSelect={this.onFilterSelect}/> 
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <CoffeeItem
            data={visidleData}/>
            <Footer/>
        </div>

    );
}

}


export default App;