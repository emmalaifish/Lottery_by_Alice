// Portals: https://reactjs.org/docs/portals.html

import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const dialogRoot = document.getElementById('dialog');

export default class Dialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this._confirmCallback = this._confirmCallback.bind(this);
    this._cancelCallback = this._cancelCallback.bind(this);
  }

  showDialog(options) {
    const { message, confirmBtnText, cancelBtnText, confirmCallback, cancelCallback } = options;

    this.setState({
      hidden: false,
      message,
      confirmBtnText,
      cancelBtnText,
      confirmCallback: confirmCallback && typeof confirmCallback === 'function' ? confirmCallback : undefined,
      cancelCallback: cancelCallback && typeof cancelCallback === 'function' ? cancelCallback : undefined,
    });
  }

  hideDialog() {
    this.setState({
      hidden: true
    });
  }

  _confirmCallback() {
    const { confirmCallback } = this.state;

    if (confirmCallback) confirmCallback();

    return this.hideDialog();
  }

  _cancelCallback() {
    const { cancelCallback } = this.state;

    if (cancelCallback) cancelCallback();

    return this.hideDialog();
  }

  render() {
    const { hidden, message, confirmBtnText, cancelBtnText } = this.state;

    return createPortal(
      <div className={`dialog ${hidden ? 'hidden' : ''}`}>
        <div className="container">
          <span className="icon icon-close" onClick={this.hideDialog} />
          <div className="dialog-message">{message}</div>
          <div className="dialog-btn-group">
            {
              confirmBtnText &&
                <button className="confirm-btn" onClick={this._confirmCallback}>{confirmBtnText}</button>
            }
            {
              cancelBtnText &&
                <button className="cancel-btn" onClick={this._cancelCallback}>{cancelBtnText}</button>
            }
          </div>
        </div>
      </div>
      ,
      dialogRoot
    );
  }
}
