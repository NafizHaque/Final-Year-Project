import React, { Component } from 'react';
import Nav from './components/Nav';
import Reg from './components/Reg';
import Upload from './components/Upload';
import View from './components/View';
import { BrowserRouter, Route } from 'react-router-dom';
import Web3 from 'web3';
import Patient from "./abis/Med.json";
import Doctor from './components/Doctor';
import Home from './components/Home';
import "./App.css"

class App extends Component {

    constructor(){
        super()
        this.state = {
            'account': null,
            'patient': null,
            'loading': true,
        }
    }

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockChain()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Error metamask not found!')
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    async loadBlockChain(){
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ 'account': accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = Patient.networks[networkId]
        if(networkData) {
            const patient = new web3.eth.Contract(Patient.abi, networkData.address)
            this.setState({ 'patient': patient, 'loading': false })
        } else {
            window.alert('Patient contract not deployed to detected network.')
        }
    }

    render(){
        if(this.state.loading === false){
            return (
                <BrowserRouter>
                    <div className="App">
                        <main>
                            <Nav account={this.state.account}/>
                            <Route exact path = '/' component={(() => <Home account={this.state.account}/>)} />
                            <Route exact path="/reg" component={(() => <Reg account={this.state.account} patient={this.state.patient}/>)} />
                            <Route exact path="/upload" component={(() => <Upload account={this.state.account} patient={this.state.patient}/>)} />
                            <Route exact path="/view" component={(() => <View account={this.state.account} patient={this.state.patient}/>)} />
                            <Route exact path="/doctors" component={(() => <Doctor account={this.state.account} patient={this.state.patient}/>)} />
                         
                        </main>
                        {/* <Footer></Footer> */}
                    </div>
                </BrowserRouter>
            );
        }else{
            return (
                <div className="container center-align" style={{marginTop: 100}}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            )
        }
    }
}

export default App;