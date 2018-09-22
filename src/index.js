import React from 'react';
import { render } from "react-dom";

import './index.css';
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";

import store from './Store/Store'
import App from './App';


const renderApp = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    );
};

renderApp(App);

// ReactDOM.render(<App />, document.getElementById('root'));