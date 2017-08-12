import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import { Node } from 'react-magnitude';

class App extends React.Component {
    render() {
        return (
            <HashRouter hashType='slash'>
                <Node>
                    <Navbar />
                    <Body/>
                    <Footer />
                </Node>
            </HashRouter>
            );
    }
}

export default App;