import React, { Component } from 'react';
import Web3 from 'web3';

import '../App.css';
import Patient from "../abis/Med.json";
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './View.css'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class Upload extends Component {


  //Get the Account
  // Get the network
  //Get smart contract
  //-- ABI
  //-- Address


  constructor(props) {
    super(props);
    this.state = { 
      'buffer': null,
      'fileHash': 'QmcRbqfTpJGCcq5G2oNpyKWAqNfYsrJKvpVhnVD77imY3h',
      'fname': null,
      'fhash': null,
      'sfile': null,
      'patient': this.props.patient,
      'account': this.props.account,
     
    };
  }



  captureFile = (event) => {

    event.preventDefault()
    const file = event.target.files[0]

    this.setState({
        sfile: file
    }, () =>  console.log(this.state.sfile));
  

   
}

  handleInputChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }




  // Example hash: "QmVEoibJkhggQ5yvCp65E73rn6UH68iT4ZH5mh3bedbZk7"
  // Example url: https://ipfs.infura.io/ipfs/QmVEoibJkhggQ5yvCp65E73rn6UH68iT4ZH5mh3bedbZk7

  onSubmit = async (event) => {

 
    event.preventDefault()
    console.log("Submitting the form...")
    await ipfs.add(this.state.sfile, (error, result) => {
         console.log('added', result);
         this.setState({'fileHash': result[0].hash});
         this.ConnectFile();
         
          if(error) {
             console.error(error)
             return
          }
   
         
          })
}
 // Step 2: Store file on blockchain....  
ConnectFile() {
  console.log(this.state);
  this.setState({ loading: true })
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  this.state.patient.methods.saveFile(this.state.fname, this.state.fileHash, today).send({ from: this.state.account })
  .once('receipt', (receipt) => {
      console.log(receipt);
    this.setState({ loading: false })
  })
}





  render() {
    return (
      <div>
       
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={'https://ipfs.infura.io/ipfs/'+this.state.fileHash} className="App-logo" alt="logo" />
                </a>
                <p>&nbsp;</p>
                <h2> Hello patient:</h2> <h4> <b>{this.state.account}</b>  </h4>
                <br></br>
                <h5> Your uploaded file would be shown above as a snapshot </h5>
                <h6> We accept any image format and PDFs </h6>
                <br></br>
                <form onSubmit={this.onSubmit}>

                  <label htmlFor="file">Upload Medical Document</label> &nbsp; &nbsp;
                  <input type='file' id="file" name="file" onChange={this.captureFile} required/>
                  <br></br>
                  <label htmlFor="fname">File Name Here</label> &nbsp; &nbsp;
                  <input type="text" id="fname" name="fname" onChange={this.handleInputChange} required/>
                  
                  <input type='submit' />
                  
                  
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
