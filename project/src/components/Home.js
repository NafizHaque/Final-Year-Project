import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            account: this.props.account
        }
    }

    render(){
        return(
      
    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8">
         
              <div class="alert alert-{{ message.tags }}">
              <h2><b>This is Float Medical   </b></h2>

              <p><i><h3>Your account is:</h3> <b>{this.state.account}</b></i></p>
              <br></br>
                            <i><h4>This application is designed for patients to have a permisssion based ledger for medical data that they can control </h4></i>
                            <br></br>
                            <h6>patients being in control of their own sensitive personal data with the help of blockchain technologies, FloatMedical project, leveraging the use of Ethereum to provide a service to store files in a decentralised network </h6>
                            <h2><b>Powered by the</b></h2> <br></br>
                            <p>
                            <b><a href='https://ethereum.org/' target='_blank'>Ethereum Blockchain</a></b><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/330px-Ethereum-icon-purple.svg.png" alt="Girl in a jacket" width="80" height="80"></img><br></br>

                            <b><a href='https://ethereum.org/' target='_blank'>MetaMask Extension&nbsp;</a></b><img src="https://imgur.com/3mP7Aay.png" alt="Girl in a jacket" width="80" height="80"></img><br></br>
                            <b><a href='https://ethereum.org/' target='_blank'>Ethereum Swarm &nbsp; &nbsp;  </a></b><img src="https://imgur.com/m1CVfz8.png" alt="Girl in a jacket" width="100" height="100"></img><br></br>
                            <b><a href='https://ethereum.org/' target='_blank'>Solidity Language &nbsp;  </a></b><img src="https://imgur.com/ribKO6O.png" alt="Girl in a jacket" width="100" height="100"></img><br></br>
                            <b><a href='https://ethereum.org/' target='_blank'>Origin Stamp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </a></b><img src="https://imgur.com/ij1R8Et.png" alt="Girl in a jacket" width="60" height="60"></img><br></br><br></br>



                            <b><a href='https://ethereum.org/' target='_blank'>Truffle Suite &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;‎‎‎‎‎‎‎‎</a></b><img src="https://imgur.com/EJK1W1Q.png" alt="Girl in a jacket" width="60" height="60"></img><br></br><br></br>
                            <b><a href='https://www.trufflesuite.com/ganache' target='_blank'>Truffle Ganache  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a></b><img src="https://i.imgur.com/3JUv58A.png" alt="Girl in a jacket" width="60" height="60"></img></p>
                            
              </div>
           
        </div>
        <div class="col-md-4">
          <div class="content-section">
            <h3>Our Sidebar</h3>
            <p class='text-muted'>
              <ul class="list-group">
                <li class="list-group-item list-group-item-light"><i className="material-icons"></i><Link to='/upload'>Upload a medical document</Link></li>
                <li class="list-group-item list-group-item-light"><i className="material-icons"></i><Link to='/view'>View your uploaded medical documents</Link></li>
                <li class="list-group-item list-group-item-light">Null</li>
                <li class="list-group-item list-group-item-light"><i className="material-icons"></i><Link to='/doctors'>View/Add a trusted doctor</Link></li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </main>

        )
    }
}

export default Home;