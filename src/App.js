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

    setBookId(bookId) {
        console.log('in app: ' + bookId);
        this.setState((prevState) => {
            return {
                ...prevState,
                bookId: bookId,
            }
        })
    }

    render() {
        const bookId = this.state.bookId;
        const setBookId = this.setBookId;

        return (
            <div className='main'>
                <BookSelectContainer className="BookSelectContainer" setBookId={setBookId} />
                {console.log('in app renderer: ' + bookId)}
                <BookReaderContainer className="BookReaderContainer" bookId={bookId} />
            </div>
        )
    }
}