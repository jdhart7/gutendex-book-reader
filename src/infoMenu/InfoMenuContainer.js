import React from 'react';
import { InfoMenu } from './InfoMenu.js';

export class InfoMenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoState: false,
        }
    }

    render() {
        const infoState = this.props.infoState;

        return (
            <InfoMenu 
                infoState={infoState ? 'infoMenuContainer' : 'infoMenuContainer closedInfoList'}
            />
        );
    }
}