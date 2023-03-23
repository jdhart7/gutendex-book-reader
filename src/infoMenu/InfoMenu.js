import React from 'react';
import { Loading } from '../loading/Loading.js';
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
                formattedLinks.push(<p>{formats[i]}: <a href={formats[i + 1]}>{formats[i + 1]}</a></p>);
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
                            <h3>{bookTitle}</h3>
                            <h5>{' by ' + authors}</h5>
                            <p>Bookshelves: <br />{bookShelves}</p>
                            <p>{downloadCount == '1' ? 'Downloaded ' + downloadCount + ' Time' : 'Downloaded ' + downloadCount + ' Times'}</p>
                            <p>Copyright: {copyright}</p>
                            <p>Languages: {languages}</p>
                            {formattedLinks}
                        </div>
                    ) : ''}
            </div>
        );
    }
}