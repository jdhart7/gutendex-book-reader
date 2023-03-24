import React from 'react';
import { Loading } from '../loading/Loading.js';
import openBookIcon from '../icons/openBook.png';
import bookshelfIcon from '../icons/bookshelfIcon.png';
import saveIcon from '../icons/saveIcon.png';
import computerIcon from '../icons/computerIcon.png';
import authorIcon from '../icons/printerIcon.png';
import copyrightIcon from '../icons/copyrightIcon.png';
import languageIcon from '../icons/languageIcon.png';
import './infoMenu.css';

export class InfoMenu extends React.Component {
    render() {
        const { infoState, bookId, bookTitle, bookInfo, authors, bookShelves, downloadCount, copyright, languages, formats } = this.props;

        let temp = [];
        for (let i = 0; i < 30; i++) {
            temp.push(<p>test</p>);
        }

        let formattedLinks = [];
        if (formats) {
            console.log(formats);
            for (let i = 0; i < formats.length; i += 2) {
                formattedLinks.push(<p>{formats[i]}: <a href={formats[i + 1]} target="_blank" rel="noopener noreferrer">{formats[i + 1]}</a></p>);
            }
        }
        
        return (
            <div className={infoState}>
                <div className="infoHeader">
                    <div className="headerMarkers">
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                    </div>
                    <div>Info</div>
                    <div className="headerMarkers">
                        <span className="headerLines" />
                        <span className="headerLines" />
                        <span className="headerLines" />
                    </div>
                </div>
                {!bookId ? (<div className="selectBookBackground"><div className="selectBookModal"><p>Please Select a Book to Begin.</p></div></div>) : ''}
                {bookId && !bookInfo ? <Loading /> : ''}
                {bookId && bookInfo ? (
                        <div className="information">
                            <div className="headerHolder">
                                <img src={openBookIcon} className="infoIcons" alt='' />
                                <h3>{bookTitle}</h3>
                            </div>
                            <div className="headerHolder">
                                <img src={authorIcon} className="infoIcons" alt='' />
                                <h5>{' by ' + authors}</h5>
                            </div>
                            <div className="headerHolder">
                                <img src={bookshelfIcon} className="infoIcons" alt='' />
                                <p>Bookshelves: <br />{bookShelves}</p>
                            </div>
                            <div className="headerHolder">
                                <img src={saveIcon} className="infoIcons" alt='' />
                                <p>{downloadCount == '1' ? 'Downloaded ' + downloadCount + ' Time' : 'Downloaded ' + downloadCount + ' Times'}</p>
                            </div>
                            <div className="headerHolder">
                                <img src={copyrightIcon} className="infoIcons" alt='' />
                                <p>Copyright: {copyright}</p>
                            </div>
                            <div className="headerHolder">
                                <img src={languageIcon} className="infoIcons" alt='' />
                                <p>Languages: {languages}</p>
                            </div>
                            <div className="headerHolder">
                                <img src={computerIcon} className="infoIcons" alt='' />
                                <p>Download Links:</p>
                            </div>
                            {formattedLinks}
                        </div>
                    ) : ''}
            </div>
        );
    }
}