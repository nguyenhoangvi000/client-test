import React, { Component } from 'react';

import { BankAccount } from '../../components/BankAccount/index';

import uuidv1 from 'uuid/v1';

import * as IBAN from 'iban';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      bankAccounts: [],
      errorMessages: []
    }
  }

  handleChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  addBankAccount = () => {
    const newBankAccount = {
      _id: uuidv1(),
      IBAN: '',
      bankName: ''
    }
    this.setState({
      bankAccounts: [...this.state.bankAccounts, newBankAccount]
    })
  }
  onInputChange = (event) => {

    let bankAccounts = this.state.bankAccounts;
    let inputID = event.target.id.split("_")[0];
    let inputName = event.target.id.split("_")[1];
    bankAccounts.map((bankAccount) => {
      if (bankAccount._id === inputID) {
        bankAccount[inputName] = event.target.value
      }
      return bankAccount;
    })
    this.setState({
      bankAccounts: bankAccounts
    })
  }

  validateAlphabet = (string) => {
    let re = /^[A-z]+$/;
    return re.test(String(string).toLowerCase());
  }

  validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isEmpty = (string) => {
    return string.length === 0;
  }

  validateForm = (data) => {
    let errorMessages = [];
    if (!this.validateAlphabet(data.firstName)) {
      errorMessages.push({
        key: 'firstName',
        message: 'First Name is not Valid'
      })
    }
    if (!this.validateAlphabet(data.lastName)) {
      errorMessages.push({
        key: 'lastName',
        message: 'Last Name is not Valid'
      })
    }
    if (!this.validateEmail(data.email)) {
      errorMessages.push({
        key: 'email',
        message: 'Email is not Valid'
      })
    }

    data.bankAccounts.forEach((bankAccount) => {
      if (!IBAN.isValid(bankAccount.IBAN)) {
        errorMessages.push({
          key: bankAccount._id + 'IBAN',
          message: 'IBAN is not valid'
        })
      }
      if (this.isEmpty(bankAccount.bankName)) {
        errorMessages.push({
          key: bankAccount._id + 'bankName',
          message: 'bankName is not valid'
        })
      }
    })
    return errorMessages;
  }


  handleRegister = () => {

    this.setState({
      errorMessages: this.validateForm(this.state)
    }, () => {
      if (this.state.errorMessages.length > 0) {
        // alert(JSON.stringify(this.state.errorMessages, null, 4));
      }
      else {
        let result = this.state;
        delete result.errorMessages;
        result.bankAccounts.map((bankAccount) => {
          delete bankAccount._id;
          return bankAccount;
        })
        alert(JSON.stringify(result, null, 4));
      }
    })

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
          <form >
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="form-group has-success">
                  <label className="form-control-label" htmlFor="inputFirstName">First name</label>
                  <input type="text" value={this.state.firstName} onChange={this.handleChange} className="form-control form-control-success" name="firstName" />
                  {
                    this.state.errorMessages.filter((errorMessage) => errorMessage.key === 'firstName').length > 0 ?
                      <small className="form-text text-danger">{this.state.errorMessages.filter((errorMessage) => errorMessage.key === 'firstName')[0].message}</small>
                      : ''
                  }
                </div>
                <div className="form-group has-warning">
                  <label className="form-control-label" htmlFor="inputLastname">Last name</label>
                  <input type="text" value={this.state.lastName} onChange={this.handleChange} className="form-control form-control-warning" name="lastName" />
                  {
                    this.state.errorMessages.filter((errorMessage) => errorMessage.key === 'lastName').length > 0 ?
                      <small className="form-text text-danger">{this.state.errorMessages.filter((errorMessage) => errorMessage.key === 'lastName')[0].message}</small>
                      : ''
                  }
                </div>
                <div className="form-group has-danger">
                  <label className="form-control-label" htmlFor="inputEmail">Email</label>
                  <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control form-control-danger" name="email" />
                  {
                    this.state.errorMessages.filter((errorMessage) => errorMessage.key === 'email').length > 0 ?
                      <small className="form-text text-danger">{this.state.errorMessages.filter((errorMessage) => errorMessage.key === 'email')[0].message}</small>
                      : ''
                  }
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto text-left">
                <h2>Bank accounts</h2>
              </div>
            </div>
            {
              this.state.bankAccounts.map((bankAccount, index) => {
                return (
                  <BankAccount key={index} errorMessages={this.state.errorMessages} onInputChange={this.onInputChange} data={bankAccount} />
                )
              })
            }
            <div className="row">
              <div className="col-md-6 mx-auto text-center">
                <p>You should provide at least one bank account</p>
                <button type="button" onClick={this.addBankAccount} className="btn bg-faded">+ Add bank account</button>
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