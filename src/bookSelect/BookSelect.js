import React from 'react';
import { Loading } from '../loading/Loading.js';
import { SearchBooks } from './searchBooks/SearchBooks.js';
import './bookSelect.css';

export class BookSelect extends React.Component {
    render() {
        let {bookList, numberOfBooks, pageNumber, changePage, onSearch} = this.props;
        let numberOfPages = parseInt(numberOfBooks / 32);
        numberOfPages = numberOfBooks % 32 > 0 ? numberOfPages + 1 : numberOfPages;

        return (
            <div className="container">
                <SearchBooks onSearch={onSearch} />
                <div className="bookListContainer">
                    { bookList ? '' : <Loading /> }
                    <ul className="bookList">
                        { bookList ? bookList : '' }
                    </ul>
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={changePage} id="PREV" disabled={pageNumber === 1 || !bookList}>PREV</button>
                    <div key={pageNumber}>
                        Page {pageNumber} of {numberOfPages}
                    </div>
                    <button className="button" onClick={changePage} id="NEXT" disabled={pageNumber >= numberOfPages ? true : false}>NEXT</button>
                </div>
            </div>
        );
    }
}