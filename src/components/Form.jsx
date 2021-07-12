import React, { Component } from 'react';
import { months, years } from '../staticJSONData/data';
// cardNumber, name, month, year, cvv
import Card from './Card';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            cardNumber: '',
            name: '',
            month: '',
            year: '',
            cvv: ''
        }
    }

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    render() {
        return (
            <>
                <Card 
                    cardNumber={this.state.cardNumber}
                    name={this.state.name}
                    month={this.state.month}
                    year={this.state.year}
                    cvv={this.state.cvv}
                />
                <form style={{backgroundColor:'orange'}}>
                    <div>
                        <label>Card Number</label>
                        <input 
                            type="text" 
                            value={this.state.cardNumber} 
                            name='cardNumber' 
                            onChange={this.handleChange} 
                            maxLength='16' 
                        />
                    </div>
                    <div>
                        <label>Card Name</label>
                        <input 
                            type="text" 
                            value={this.state.name} 
                            name='name' 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <select name="month" onChange={this.handleChange}>
                            {months.map(month => <option value={month} key={month}>{month}</option>)}
                        </select>
                        <select name="year" onChange={this.handleChange}>
                            {years.map(year => <option value={year} key={year}>{year}</option>)}
                        </select>
                        <input type="text" name='cvv' onChange={this.handleChange} maxLength='3' />
                    </div>
                </form>
            </>
        );
    }
}

export default Form;
