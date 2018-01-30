import React, { Component } from 'react';

export const BankAccount = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="form-group has-success">
          <label className="form-control-label" htmlFor={props.data._id + 'iban'}>IBAN</label>
          <input type="text" value={props.data.IBAN} onChange={props.onInputChange} className="form-control form-control-success" id={props.data._id + '_IBAN'} />
          {
            props.errorMessages.filter((errorMessage) => errorMessage.key === props.data._id + '_IBAN').length > 0 ?
              <small className="form-text text-danger">{this.state.errorMessages.filter((errorMessage) => errorMessage.key === props.data._id + '_IBAN')[0].message}||''</small> : ''
          }
        </div>
        <div className="form-group has-success">
          <label className="form-control-label" htmlFor={props.data._id + 'bankName'}>Bank name</label>
          <input type="text" value={props.data.bankName} onChange={props.onInputChange} className="form-control form-control-success" id={props.data._id + '_bankName'} />
          {
            props.errorMessages.filter((errorMessage) => errorMessage.key === props.data._id + '_bankName').length > 0 ?
              <small className="form-text text-danger">{this.state.errorMessages.filter((errorMessage) => errorMessage.key === props.data._id + '_bankName')[0].message}||''</small> : ''
          }
        </div>
      </div>
    </div>
  )
}