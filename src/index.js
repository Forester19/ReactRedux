import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {HeaderComponent, FooterComponent} from "./component/HeaderFooter";
import {Sign} from './component/LogIn'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();


class MainComponent extends React.Component {
    render() {
        return <BrowserRouter history={history}>
            <>
                <HeaderComponent/>
                <Route path='/sign-in' render={function () {
                    return <Sign name='signin'/>
                }}/>

                <Route path='/sign-up' render={function () {
                    return <Sign name='signup'/>
                }}/>
                <FooterComponent/>
            </>
        </BrowserRouter>;
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));


//serviceWorker.unregister();
