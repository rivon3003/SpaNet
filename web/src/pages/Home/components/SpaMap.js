import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const spaLocations = [
    { lat: 10.462622, lng: 106.460172 },
    { lat: 10.562624, lng: 106.160172 },
    { lat: 10.662626, lng: 106.660172 },
    { lat: 10.762628, lng: 106.360172 },
    { lat: 10.862630, lng: 106.860172 },
    { lat: 10.962632, lng: 106.560172 },
    { lat: 10.962632, lng: 106.340172 },
];


const SpaMap = withScriptjs(
    withGoogleMap((props) => <GoogleMap
    
        defaultZoom={8}
        defaultCenter={spaLocations[0]}
    >
        {props.isMarkerShown && spaLocations.map((spaLocation) => (
            <Marker position={spaLocation} />
        ))}
    </GoogleMap>
    ))
export default SpaMap;