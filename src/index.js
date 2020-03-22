'use-strict'


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {I18nextProvider} from 'react-i18next';

import i18n from './common/i18n';


ReactDOM.render(
  <I18nextProvider>
    <App i18n={i18n}/>
  </I18nextProvider>,
  document.getElementById('root')
);
