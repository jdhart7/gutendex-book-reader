import React from 'react';
import { BookReader } from './BookReader.js';

export class BookReaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookLink: ''
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.bookId !== this.props.bookId) {
            this.getBookInformation();
        }
    }

    async getBookInformation() {
        this.resetLink();
        const getBookInfo = await fetch('https://gutendex.com/books/' + this.props.bookId, {
            method: 'GET'
        });
        const myResponse = await getBookInfo.json();
        let jsonString = JSON.stringify(myResponse);
        jsonString = jsonString.split('text/html');
        jsonString = jsonString[1].split('"');
        let temp = jsonString[2];
        console.log('temp: ' + temp);
        this.setState(prevState => {
            return {
                ...prevState,
                bookLink: temp,
            }
        });
    }

    resetLink() {
        this.setState(prevState => {
            return {
                ...prevState,
                bookLink: '',
            }
        });
    }

    render() {
        const { bookId } = this.props;
        const bookLink = this.state.bookLink;

        return (
            <div>
                <BookReader bookId={bookId} bookLink={bookLink} />
            </div>
        )
    };
}