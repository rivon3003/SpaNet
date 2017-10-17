import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UploadScreen from './Upload';
import Main from './Main';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    console.log("Login successfull");
                    var uploadScreen = [];
                    uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
                    self.props.appContext.setState({ main: uploadScreen })
                }
                else if (response.data.code == 204) {
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

        //Todo: Pass login - Remove after completing API 
        console.log("Login successfull");
        var mainScreen = [];
        mainScreen.push(<Main appContext={self.props.appContext}/>)
        self.props.appContext.setState({ main: mainScreen});
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