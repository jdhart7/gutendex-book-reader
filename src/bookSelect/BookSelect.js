import React from 'react';
import { Loading } from '../loading/Loading.js';
import './bookSelect.css';

export class BookSelect extends React.Component {
    render() {
        let {bookList, numberOfBooks, pageNumber, changePage} = this.props;
        let numberOfPages = parseInt(numberOfBooks / 32);
        numberOfPages = numberOfBooks % 32 > 0 ? numberOfPages + 1 : numberOfPages;

        return (
            <div className="container">
                <input className="inputStyle bookSearchInput" placeholder="Search Books" />
                <div className="bookListContainer">
                    { bookList ? '' : <Loading /> }
                    <ul className="bookList">
                        { bookList ? bookList : '' }
                    </ul>
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={changePage} id="PREV" disabled={pageNumber === 1}>PREV</button>
                    <div key={pageNumber}>
                        Page {pageNumber} of {numberOfPages}
                    </div>
                    {console.log('pageNumber in render: ' + pageNumber)}
                    <button className="button" onClick={changePage} id="NEXT" disabled={pageNumber >= numberOfPages ? true : false}>NEXT</button>
                </div>
            </div>
        );
    }
}