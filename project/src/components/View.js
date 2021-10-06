import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './View.css'
class View extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: null,
            account: this.props.account,
            patient: this.props.patient,
            files: [],
            selectedId: null,
            loading: true,
        }
    }

    handleInputChange = (e) => {
        this.setState({
            selectedId: e.target.id,
        });
        window.open('http://localhost:8080/ipfs/' + e.target.id);
    }

    async componentWillMount(){
       if(this.props.patient !== null){
            var patient = await this.state.patient.methods.patients(this.state.account).call();
            var count = patient.fileCount;
            for (var i = 0; i < count; i++) {
                const file = await this.state.patient.methods.files(this.state.account, i).call()
                this.setState({
                    files: [...this.state.files, file]
                })
            }
            this.setState({
                loading: false
            })
       }else{
           this.setState({
               loading: true
           })
       }
    }

    render(){

        const fileList = this.state.files.map(files => {
            return [<h3>Uploaded Medical Documents</h3>,
                
                
                <main role="main" class="container">
                     
                <div class="row">
                  <div class="col-md-8">
                
                  

                <div className="contact" key={files.fileHash}>

                <article class="media content-section">
                    <img class="rounded-circle article-img" src=""></img>
                    <div class="media-body">
                        <div class="article-metadata">
                        <a class="mr-2" href="#"></a>
                        <small class="text-muted">Uploaded on: {files.datetime}</small>
                        </div>
                        <h2><a class="article-title" href="">{files.fileName}</a></h2>
                        <p class="article-content"><a href="" className="secondary-content"><button id={files.fileHash} onClick={this.handleInputChange} className="waves-effect waves-light btn blue darken-2">View</button></a>
                        </p>
                    </div>
                    </article>

                

                </div>
                </div>
                </div>
                </main>
            ]





        }) 
        if(this.state.loading === false){
            return(
                <div className="container">
                    <br></br>
                    <br></br>
                    <ul className="collection">
                           
                       
                            {fileList}
                    </ul>
                </div>
            )
        }else{
            return (
                <div className="container center-align" style={{marginTop: 100}}>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            )
        }
    }
}

export default View;