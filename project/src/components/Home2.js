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
            <body>
    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8">
         
              <div class="alert alert-{{ message.tags }}">
              <h2><b>Welcome to Medi-Care!</b></h2>
                            <i><h4>Your one-stop medical document library</h4></i>
                            <h6>Medi-Care uses a technology called <b>Blockchain</b> which provides decentralization and immutabilty to any data present on it</h6>
                            <p>Powered by the <b><a href='https://ethereum.org/' target='_blank'>Ethereum Blockchain</a></b></p>
                            <p><i>Your account is: <b>{this.state.account}</b></i></p>
              </div>
           
        </div>
        <div class="col-md-4">
          <div class="content-section">
            <h3>Our Sidebar</h3>
            <p class='text-muted'>You can put any information here you'd like.
              <ul class="list-group">
                <li class="list-group-item list-group-item-light"><i className="material-icons">cloud_upload</i><Link to='/upload'>Upload a medical document</Link></li>
                <li class="list-group-item list-group-item-light"><i className="material-icons">insert_drive_file</i><Link to='/view'>View your uploaded medical documents</Link></li>
                <li class="list-group-item list-group-item-light">Calendars</li>
                <li class="list-group-item list-group-item-light"><i className="material-icons">person_add</i><Link to='/doctors'>View/Add a trusted doctor</Link></li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </main>

</body>
        )
    }
}

export default Home;