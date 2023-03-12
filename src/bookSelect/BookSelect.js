import React from 'react';
import { Loading } from '../loading/Loading.js';
import './bookSelect.css';

export class BookSelect extends React.Component {
    render() {
        return (
            <div className="container">
                <input className="inputStyle bookSearchInput" placeholder="Search Books" />
                <div className="bookListContainer">
                    { this.props.bookList ? '' : <Loading /> }
                    <ul className="bookList">
                        { this.props.bookList ? this.props.bookList : '' }
                    </ul>
                </div>
                <div className="buttonContainer">
                    <button className="button">PREV</button>
                    <button className="button">NEXT</button>
                </div>
            </div>
        );
    }
}