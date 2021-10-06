
import React, { Component } from 'react';

class Reg extends Component {

    constructor(props){
        super(props)
        this.state = {
            'name': null,
            'number': null,
            'email': null,
            'password': null,
            'patient': this.props.patient,
            'account': this.props.account,
            'loading': null,
        }
    }

    addUsers() {
        console.log('final', this.state);
        this.setState({ loading: true })
        this.state.patient.methods.addPatient(this.state.account, this.state.name, this.state.number, this.state.email).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            console.log(receipt);
          this.setState({ loading: false })
          window.location.assign("/");
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addUsers();
    }
    
    
    

    render(){
        return(
            <div className="container">
                <h1>Please register to start uploading your files!</h1>
                <form onSubmit={this.handleSubmit}>

                <div class="form-group">
                    <input type="text" id="name" class="form-control" name="name" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Name</label><br></br>
                </div>

                <div class="form-group">
                    <input type="tel" class="form-control" id="number" name="number" onChange={this.handleInputChange} required/>
                    <label htmlFor="number">Number</label><br></br>
                </div>

                <div class="form-group">
                    <input type="email" class="form-control" id="email" name="email" onChange={this.handleInputChange} required/>
                    <label htmlFor="email">Email</label><br></br>
                </div>
                
                <div class="form-group">
                <input type="password" class="form-control" id="password" name="password" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Password</label><br></br><br></br>
                </div>
                    <button class="btn btn-primary" type="submit" name="action">Create Account
                        
                    </button>
                </form>
            </div>      
        )
    }
}

export default Reg;