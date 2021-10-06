import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import "./View.css"


class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: "",
            loading: true, 
            account: this.props.account
        }
        
    }

    render(){
        return(
            <header class="site-header">
      <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
        <div class="container">
          <a class="navbar-brand mr-4" href="{% url 'blog-home' %}"> Med</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggle">

          
            <div class="navbar-nav">
           
                <li class="nav-item"><NavLink class="nav-link" to="/">Home</NavLink></li>
                <li class="nav-item"><NavLink class="nav-link" to="/upload">Upload</NavLink></li>
                <li class="nav-item"><NavLink class="nav-link" to="/view">View</NavLink></li>
                <li class="nav-item"><NavLink class="nav-link" to="/doctors">Doctors</NavLink></li>
                  
           
            </div>
          </div>
        </div>
      </nav>
    </header>

        )
            
        }
    }

export default withRouter(Nav);