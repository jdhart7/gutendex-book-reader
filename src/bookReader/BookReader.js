import React from 'react';
import { Loading } from '../loading/Loading.js';
import openBookIcon from '../icons/openBook.png';
import closedBookIcon from '../icons/closedBook.png';
import offLightBulbIcon from '../icons/lightOff.png';
import onLightBulbIcon from '../icons/lightOn.png';
import './bookReader.css';

export class BookReader extends React.Component {
    render() {
        const bookId = this.props.bookId;
        const bookLink = this.props.bookLink;
        const bookTitle = this.props.bookTitle;
        const listState = this.props.listState;
        const infoState = this.props.infoState;
        const toggleInfo = this.props.toggleInfo;
        const toggleList = this.props.toggleList;

        return (
            <div className="bookReaderContainer">
                <div className="bookHeader">
                    <div className="icon" onClick={toggleList} title={listState ? 'Close book list menu' : 'Open book list menu'}>
                        <img src={listState ? openBookIcon : closedBookIcon} 
                            className="iconImage" 
                            alt="toggle book list menu" 
                        />
                    </div>
                    <div className="readerHeaderMarkers">
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                    </div>
                    <div className="bookTitle">
                        {bookTitle ? (bookTitle.length > 46 ? bookTitle.substring(0, 46) + "..." : bookTitle) : 'Select a book'}
                    </div>
                    <div className="readerHeaderMarkers">
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                    </div>
                    <div className="icon"  onClick={toggleInfo}>
                        <img src={infoState ? onLightBulbIcon : offLightBulbIcon}
                            alt="toggle info menu"
                            className="iconImage" />
                    </div>
                </div>
                {!bookId && !bookLink ? <div className="selectBookBackground"><div className="selectBookModal"><p>Please Select a Book to Begin.</p></div></div> : ''}
                {bookId && !bookLink ? <Loading /> : ''}
                {bookId && bookLink ? <iframe src={bookLink} className="iframe" width="100%" height="100%" /> : ''}
            </div>
        );
    }
}