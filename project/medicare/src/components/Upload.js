import React, { Component } from 'react';
import { link } from 'react-router-dom'
import logo from '../logo.png';
import '../App.css';






class Upload extends Component {




    constructor(props){
        super(props)
        this.state = {
            'fname': null,
            'buffer': null,
            'fhash': null,
            'sfile': null
        }
    }


    captureFile = (event) => {

        event.preventDefault()
        const file = event.target.files[0]

        this.setState({
            sfile: file
        }, () =>  console.log(this.state.sfile));
       
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("submitting the form")


    }
    

    render() {
        return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a
                className="navbar-brand col-sm-3 col-md-2 mr-0"
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
            >
                Dapp University
            </a>
            </nav>
            <div className="container-fluid mt-5">
            <div className="row">
                <main role="main" className="col-lg-12 d-flex text-center">
                <div className="content mr-auto ml-auto">
                    <a
                    href="http://www.dappuniversity.com/bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={logo} className="App-logo" alt="logo" />
                    </a>

                    
                    <h2> Upload Med data</h2>
                <form onSubmit = {this.onSubmit}>
                    <input type="file" id="file" name="file" onChange={this.captureFile} required/>
                    <input type="text" id="fname" name="fname" onChange={this.handleInputChange} required/>
                    <input type="submit" />


                </form>
                
                </div>
                </main>
            </div>
            </div>
        </div>
    );
  }
}

export default Upload;
