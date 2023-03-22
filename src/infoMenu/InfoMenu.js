import React from 'react';
import { Loading } from '../loading/Loading.js';
import './infoMenu.css';

export class InfoMenu extends React.Component {
    render() {
        const infoState = this.props.infoState;
        
        return (
            <div className={infoState}>
                <h1>Info</h1>
            </div>
        );
    }
}