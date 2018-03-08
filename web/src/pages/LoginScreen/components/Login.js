import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { Home } from 'pages';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:8888/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }

        var config = {
            method: 'get',
            url: apiBaseUrl + 'login',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
              }
        };

        axios({
            method: 'post',
            url: apiBaseUrl + 'login',
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                
              }
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    console.log("Login successfull");
                    var mainScreen = [];
                    mainScreen.push(<Home appContext={self.props.appContext} />)
                    self.props.appContext.setState({ main: mainScreen })
                }
                else if (response.status == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        // //Todo: Pass login - Remove after completing API 
        // console.log("Login successfull");
        // var mainScreen = [];
        // mainScreen.push(<Main appContext={self.props.appContext}/>)
        // self.props.appContext.setState({ main: mainScreen});
    }

    render() {
        return (
            <div>
                <div>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange={(event, newValue) => this.setState({ username: newValue })}
                    />
                    <br />
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    />
                    <br />
                    <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;