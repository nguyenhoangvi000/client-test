import React, { Component } from 'react';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      bankAccounts: []
    }
  }

  handleChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);
  }


  handleRegister = () => {
    console.log(this.state);
    alert(JSON.stringify(this.state, null, 4));
  }

  render() {
    return (
      <div className="register-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h1>Register Account</h1>
            </div>
          </div>
          <form onSubmit={this.handleRegister}>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="form-group has-success">
                  <label className="form-control-label" htmlFor="inputFirstName">First name</label>
                  <input type="text" value={this.state.firstName} onChange={this.handleChange} className="form-control form-control-success" name="firstName" />
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
                <div className="form-group has-warning">
                  <label className="form-control-label" htmlFor="inputLastname">Last name</label>
                  <input type="text" value={this.state.lastName} onChange={this.handleChange} className="form-control form-control-warning" name="lastName" />
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
                <div className="form-group has-danger">
                  <label className="form-control-label" htmlFor="inputEmail">Email</label>
                  <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control form-control-danger" name="email" />
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto text-left">
                <h2>Bank accounts</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="form-group has-success">
                  <label className="form-control-label" htmlFor="inputSuccess1">IBAN</label>
                  <input type="text" className="form-control form-control-success" id="inputSuccess1" />
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
                <div className="form-group has-success">
                  <label className="form-control-label" htmlFor="inputSuccess1">Bank name</label>
                  <input type="text" className="form-control form-control-success" id="inputSuccess1" />
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto text-center">
                <p>You should provide at least one bank account</p>
                <button type="button" className="btn bg-faded">+ Add bank account</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto text-right">
                <button type="button" onClick={this.handleRegister} className="btn btn-warning">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}