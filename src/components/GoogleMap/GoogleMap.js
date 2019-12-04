import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from '../../config';

class GoogleMap extends Component {
    static defaultProps = {
        latitude: '',
        longitude: ''
    }

    render() {
        const mapStyles = {
            width: '50%',
            height: '50%'
        };

        const latitude = this.props.latitude;
        const longitude = this.props.longitude;

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: latitude, lng: longitude }}
            >
                <Marker 
                    position={{ lat: latitude, lng: longitude }} 
                />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: config.MAPS_API_KEY
})(GoogleMap)