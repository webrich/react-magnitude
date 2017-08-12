require('react-hot-loader/patch');
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('main')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('main')
        );
    })
}