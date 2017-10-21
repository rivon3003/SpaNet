import React, {Component} from 'react';

export default class MySpa extends Component{

    componentWillMount() {
        this.props.appContext.setState({title: "Spa của tôi"})
    }
    render(){
        return(
            <div> MySpa </div>
        );
    }
}