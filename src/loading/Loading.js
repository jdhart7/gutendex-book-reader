import React from 'react';
import './loadingStyle.css';

export class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loadingDots: '.' }
        this.interval = null;
    }
    componentDidMount() {
        this.setLoadingInterval();
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setLoadingInterval() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                if (this.state.loadingDots.length < 3) {
                    return {
                        loadingDots: prevState.loadingDots + '.',
                    };
                } else {
                    return {
                        loadingDots: '.',
                    };
                }
            });
        }, 700);
    }

    render() {
        return (
            <div className="backgroundDiv">
                <div className="loadingDiv">
                    <p className="loadingText">Loading<span className="loadingSpan">{this.state.loadingDots}</span></p>
                </div>
            </div>
        );
    }
}