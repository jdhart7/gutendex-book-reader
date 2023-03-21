import React from 'react';
import { Loading } from '../loading/Loading.js';
import './bookReader.css';

export class BookReader extends React.Component {
    render() {
        const bookId = this.props.bookId;
        const bookLink = this.props.bookLink;
        const bookTitle = this.props.bookTitle;
        const listOpen = this.props.listOpen;
        const toggleList = this.props.toggleList;

        return (
            <div className="bookReaderContainer">
                {bookTitle ? (
                    <div className="bookHeader">
                        <div className="icon" onClick={toggleList}>
                            <img src={listOpen ? '../../icons/openBook.png' : '../../icons/closedBook.png'} className="iconImage" />
                        </div>
                        <div className="readerHeaderMarkers">
                            <span className="headerLines" />
                            <span className="headerLines" />
                            <span className="headerLines" />
                            <span className="headerLines" />
                            <span className="headerLines" />
                        </div>
                        <div className="bookTitle">
                            {bookTitle}
                        </div>
                        <div className="readerHeaderMarkers">
                            <span className="headerLines" />
                            <span className="headerLines" />
                            <span className="headerLines" />
                            <span className="headerLines" />
                            <span className="headerLines" />
                        </div>
                        <div className="icon">
                            <img src="../../icons/lightOff.png" className="iconImage" />
                        </div>
                    </div>
                ) : ''}
                {!bookId && !bookLink ? <div className="selectBookBackground"><div className="selectBookModal"><p>Please Select a Book to Begin.</p></div></div> : ''}
                {bookId && !bookLink ? <Loading /> : ''}
                {bookId && bookLink ? <iframe src={bookLink} width="100%" height="100%" /> : ''}
            </div>
        );
    }
}