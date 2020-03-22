'use-strict'

//Dependencies
import React, { Component } from "react";

import { translate, Trans } from 'react-i18next';

var componentInstance;


class App extends Component {

  constructor(props){
    super(props);
    componentInstance = this; // store component reference in a variable
  }

  // On change of radio button selection change language
  changeLanguage(event){
    componentInstance.props.i18n.changeLanguage(event.target.value)
  }

  // Renders UI
  render() {

    return(

      <div className="main-container">
        { this.props.t('welcome_react') }
        <div onChange={this.changeLanguage}>
          <input type="radio" value="en" name="language" defaultChecked /> English
          <input type="radio" value="hi" name="language"/> Hindi
        </div>
      </div>

    )

  }

}

export default translate('translation')(App);
