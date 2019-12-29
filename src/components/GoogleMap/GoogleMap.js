import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import config from '../../config';

export class MapContainer extends Component {

    static defaultProps = {
        latitude: 0,
        longitude: 0
    }

    render() {
        const mapStyles = {
            width: '75%',
            height: '50%',
            position: 'relative'
        }
        if (this.props.latitude) {
            return (
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
                    onClick={this.handleToggleClose}
                >
                    <Marker 
                        position={{ lat: this.props.latitude, lng: this.props.longitude }}
                    >
                    </Marker>
                </Map>
            )
        }
    }
}

export default GoogleApiWrapper({
    apiKey: config.MAPS_API_KEY
})(MapContainer)