import React, { Component } from 'react';




class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        if (this.props.campsite !== null) {
            return (
                <div className="row" />
            );
        }
        return <div />;

    }

} 


export default CampsiteInfo;