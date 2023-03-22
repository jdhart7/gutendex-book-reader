import React from 'react';
import './App.css';
import { BookSelectContainer } from './bookSelect/BookSelectContainer.js';
import { BookReaderContainer } from './bookReader/BookReaderContainer.js';
import { InfoMenuContainer } from './infoMenu/InfoMenuContainer';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            bookId: '', 
            listState: true, 
            infoState: false,
        };

        this.setBookId = this.setBookId.bind(this);
        this.toggleList = this.toggleList.bind(this);
        this.toggleInfo = this.toggleInfo.bind(this);
    }

    setBookId(bookId, bookTitle) {
        this.setState((prevState) => {
            return {
                ...prevState,
                bookId: bookId,
                bookTitle: bookTitle,
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

    toggleInfo(infoState) {
        this.setState((prevState) => {
            return {
                ...prevState,
                infoState: infoState,
            }
        });
    }

    render() {
        const bookId = this.state.bookId;
        const bookTitle = this.state.bookTitle;
        const listState = this.state.listState;
        const infoState = this.state.infoState;
        const setBookId = this.setBookId;
        const toggleList = this.toggleList;
        const toggleInfo = this.toggleInfo;

        return (
            <div className='main'>
                <BookSelectContainer className="BookSelectContainer" setBookId={setBookId} listState={listState} />
                <BookReaderContainer className="BookReaderContainer" bookId={bookId} bookTitle={bookTitle} toggleList={toggleList} toggleInfo={toggleInfo} />
                <InfoMenuContainer infoState={infoState} />
            </div>
        )
    }
}