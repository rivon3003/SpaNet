import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import DistrictFilter from './DistrictFilter';
import NearbySpaToggle from './NearbySpaToggle';
import SpaList from './SpaList';
import SpaMap from './SpaMap';

class Main extends Component {
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
                <SearchBar
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                />
                <NearbySpaToggle onToggle={() => this.handleNearby()} />
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
export default Main;

