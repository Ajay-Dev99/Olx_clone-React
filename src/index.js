import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseCotext } from './store/Context'
import { db } from './Firebase/config'
import Context from './store/Context';
ReactDOM.render(
    <FirebaseCotext.Provider value={{ db }}>
        <Context>
              <App />
        </Context>
    </FirebaseCotext.Provider>

    , document.getElementById('root'));
