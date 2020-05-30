import React, { Component } from 'react';
import { div, divImg, divImgOverlay, divText, divBody, divTitle } from 'reactstrap';



class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    render() {

        if (campsite) {
            return (
                <div className="row" />
            );
        }
        return <div />;

    }

} 


export default CampsiteInfo;