import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import './Layout.scss'

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }})
    };

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;
