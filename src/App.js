import React from 'react';
import './App.css';
import { BookSelectContainer } from './bookSelect/BookSelectContainer.js';
import { BookReaderContainer } from './bookReader/BookReaderContainer.js';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bookId: '' };
        this.setBookId = this.setBookId.bind(this);
    }

    setBookId(bookId, bookTitle) {
        console.log('in app: ' + bookId);
        console.log('in app: ' + bookTitle)
        this.setState((prevState) => {
            return {
                ...prevState,
                bookId: bookId,
                bookTitle: bookTitle,
            }
        })
    }

    render() {
        const bookId = this.state.bookId;
        const bookTitle = this.state.bookTitle;
        const setBookId = this.setBookId;

        return (
            <div className='main'>
                <BookSelectContainer className="BookSelectContainer" setBookId={setBookId} />
                {console.log('in app renderer: ' + bookId)}
                <BookReaderContainer className="BookReaderContainer" bookId={bookId} bookTitle={bookTitle} />
            </div>
        )
    }
}