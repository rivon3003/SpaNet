import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import { DistrictFilter, SpaList, SpaMap } from './components';
import { NearbyToggle, BottomNavBar } from 'components'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNearbyMode: false
        }
    }

    componentWillMount() {
        this.props.appContext.setState({ title: "Trang chính" })
    }

    handleNearby() {
        const isNearbyMode = this.state.isNearbyMode ? false : true;
        this.setState({ isNearbyMode: isNearbyMode });
    }

    render() {
        return (
            <div>
                <BottomNavBar home={this} handleNearby={this.handleNearby}/>   
                <SearchBar
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                />
                <DistrictFilter isNearbyMode={this.state.isNearbyMode} />
                <SpaList isNearbyMode={this.state.isNearbyMode} appContext = {this.props.appContext} />
                <SpaMap
                    isNearbyMode={this.state.isNearbyMode}
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />             
            </div>
        );
    }
}
export default Home;

