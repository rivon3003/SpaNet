import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
import './App.css';
import Loginscreen from './Screens/Loginscreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Screens/NavBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: [],
            title: "Spa Net"
        }
    }
    componentWillMount() {
        var loginPage = [];
        loginPage.push(<Loginscreen parentContext={this} appContext={this} />);
        this.setState({
            main: loginPage,
            title: "Login"
        })
    }
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                <NavBar title={this.state.title}/>
                    {this.state.main}
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default App;