import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CreateSpa from './CreateSpa'
import MyAccount from './MyAccount'
import MySpa from './MySpa'
import Main from './Main';
import Loginscreen from './Loginscreen';

const styles = {
    loggedToggle: {
        display: 'none'
    }
}
class Login extends Component {
    static muiName = 'FlatButton';

    handleBtnLogin(event){
        var self = this;
        var loginPage = [];
        loginPage.push(<Loginscreen parentContext={this} appContext={self.props.appContext} />);
        self.props.appContext.setState({
            main: loginPage,
            title: "Đăng nhập"
        })
    }
    render() {
        return (
            <FlatButton {...this.props} label="Login" onClick={(event) => this.handleBtnLogin(event)}/>
        );
    }
}

class Logged extends Component {
    constructor(props) {
        super(props);
    }

    handleMiAccountClick(event){
        var self = this;
        var mainScreen = [];
        mainScreen.push(<MyAccount appContext={self.props.appContext}/>) 
        self.props.appContext.setState({main: mainScreen})
    }

    handleMiMySpaClick(event){
        var self = this;
        var mainScreen = [];
        mainScreen.push(<MySpa appContext={self.props.appContext}/>) 
        self.props.appContext.setState({main: mainScreen})
    }

    render() {
        return (
            <IconMenu
                {...this.props}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem primaryText="Tài khoản" onClick={(event) => this.handleMiAccountClick(event)} />
                <MenuItem primaryText="Spa của tôi" onClick={(event) => this.handleMiMySpaClick(event)} />
                <MenuItem primaryText="Thoát" />
            </IconMenu>
        );
    }
}

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class NavBar extends Component {
    constructor(props){
        super(props);
    }
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({ logged: logged });
    };

    handleClose(event){
        var self = this;
        var mainScreen = [];
        mainScreen.push(<Main appContext={self.props.appContext} />)
        self.props.appContext.setState({ main: mainScreen })
    }

    render() {
        var self = this;
        return (
            <div>
                <Toggle
                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={styles.loggedToggle }
                />
                <AppBar
                    title={this.props.title}
                    iconElementLeft={this.state.logged ? <IconButton><NavigationClose onClick={(event) => this.handleClose(event)}/></IconButton> : null}
                    iconElementRight={this.state.logged ? <Logged appContext={self.props.appContext}/> : <Login appContext={self.props.appContext}/>}
                />
            </div>
        );
    }
}

export default NavBar;