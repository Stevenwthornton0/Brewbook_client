import React from 'react';
import Loader from 'react-loader-spinner';
import '../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class LoaderSpinner extends React.Component {

   render() {
    return(
     <Loader
        type="Oval"
        color="#424242"
        height={75}
        width={75}

     />
    );
   }
}