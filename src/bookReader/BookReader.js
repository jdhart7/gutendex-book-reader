import React from 'react';
import { Loading } from '../loading/Loading.js';
import './bookReader.css';

export class BookReader extends React.Component {
    render() {
        const bookId = this.props.bookId;
        const bookLink = this.props.bookLink;

        return (
            <div className="bookReaderContainer">
                {!bookId && !bookLink ? <div className="selectBookBackground"><div className="selectBookModal"><p>Please Select a Book to Begin.</p></div></div> : ''}
                {bookId && !bookLink ? <Loading /> : ''}
                {console.log('bookLink below:')}
                {bookLink ? console.log(bookLink) : ''}
                {bookId && bookLink ? <iframe src={bookLink} width="100%" height="100%" /> : ''}
            </div>
        );
    }
}