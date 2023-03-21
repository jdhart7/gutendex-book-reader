import React from 'react';
import './App.css';
import { BookSelectContainer } from './bookSelect/BookSelectContainer.js';
import { BookReaderContainer } from './bookReader/BookReaderContainer.js';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { bookId: '', listState: true, };
        this.setBookId = this.setBookId.bind(this);
        this.toggleList = this.toggleList.bind(this);
    }

    setBookId(bookId, bookTitle) {
        this.setState((prevState) => {
            return {
                ...prevState,
                bookId: bookId,
            }
        })
    }

    toggleList(listState) {
        this.setState((prevState) => {
            return {
                ...prevState,
                listState: listState,
            }
        });
    }

    render() {
        const bookId = this.state.bookId;
        const bookTitle = this.state.bookTitle;
        const listState = this.state.listState;
        const setBookId = this.setBookId;
        const toggleList = this.toggleList;

        return (
            <div className='main'>
                <BookSelectContainer className="BookSelectContainer" setBookId={setBookId} listState={listState} />
                <BookReaderContainer className="BookReaderContainer" bookId={bookId} bookTitle={bookTitle} toggleList={toggleList} />
            </div>
        )
    }
}