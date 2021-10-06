import React, { Component } from 'react'

class Doctor extends Component {

    constructor(props){
        super(props)
        this.state = {
            'patient': this.props.patient,
            'account': this.props.account,
            'loading': null,
            'docAccount': null,
            'name': null,
            'doctors': []
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addDoctorToPatient();
    }
    
    addDoctorToPatient() {
        console.log('final', this.state);
        this.setState({ loading: true })
        this.state.patient.methods.saveDoctor(this.state.name, this.state.docAccount).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            console.log(receipt);
          this.setState({ loading: false })
          window.location.assign("/doctors");
        })
    }

    async componentWillMount(){
        console.log('Inside com will mount', this.props);
        if(this.props.patient !== null){
            var patient = await this.state.patient.methods.patients(this.state.account).call();
            var count = patient.doctorCount;
            for (var i = 0; i < count; i++) {
                const doctor = await this.state.patient.methods.doctors(this.state.account, i).call()
                this.setState({
                    doctors: [...this.state.doctors, doctor]
                })
            }
            this.setState({
                loading: false
            })
            console.log(this.state);
        }else{
            this.setState({
                loading: true
            })
        }
    }
    

    render(){
        const docList = this.state.doctors.map(doctors => {
            return (
                <div className="contact" key={doctors.doctorAccount}>
                    <article class="media content-section">
                    <img class="rounded-circle article-img" src=""></img>
                    <div class="media-body">
                        <div class="article-metadata">
                        <a class="mr-2" href="#"></a>
                        <small class="text-muted">Local Hospital Doctor: </small>
                        </div>
                        <h2><a class="article-title" href="">{doctors.doctorName}</a></h2>
                        <p>{doctors.doctorAccount} </p>
                    </div>
                    </article>
                </div>
            )
        }) 
        if(this.state.loading === false){
            return(
                <div className="container">
                <br></br>
                    <div className="container">
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <h3>My Doctors</h3>
                            </li>
                                {docList}
                        </ul>
                    </div>  

                    <div className="container">
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>

                    <div className="container">
                    <h3>Add a Trusted Doctor</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="name" name="name" onChange={this.handleInputChange} required/>
                            <label htmlFor="name">Name</label><br></br>
                            <input type="text" id="docAccount" name="docAccount" onChange={this.handleInputChange} required/>
                            <label htmlFor="name">Doctor's Account</label><br></br><br></br>
                            <button className="btn blue darken-2" type="submit" name="action">
                                <i className="material-icons right">Add Doctor</i>
                            </button>
                        </form>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="container center-align">
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            )
        }
    }
}

export default Doctor;