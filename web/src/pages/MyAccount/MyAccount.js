import React, {Component} from 'react';

export default class MyAccount extends Component{

    componentWillMount() {
        this.props.appContext.setState({title: "Tài khoản của tôi"})
    }
    render(){
        return(
            <div> MyAccount </div>
        );
    }
}