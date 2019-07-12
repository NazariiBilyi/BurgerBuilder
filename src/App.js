import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import './App.css';

class App extends Component{

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                        <Route parth="/orders" component={Orders}/>
                    </Switch>
                </Layout>
            </div>
        );
    }

}

export default App;
