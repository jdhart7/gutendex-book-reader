import React from 'react';
import { BookReader } from './BookReader.js';

export class BookReaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookLink: '',
            bookTitle: '',
            listOpen: true,
        };

        this.toggleList = this.toggleList.bind(this);
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
        console.log(myResponse.title);
        this.setState(prevState => {
            return {
                ...prevState,
                bookLink: temp,
                bookTitle: myResponse.title,
            }
        });
    }

    resetLink() {
        this.setState(prevState => {
            return {
                ...prevState,
                bookLink: '',
                bookTitle: '',
            }
        });
    }

    toggleList() {
        console.log('listOpen: ' + this.state.listOpen);
        this.setState(prevState => {
            return {
                ...prevState,
                listOpen: this.state.listOpen ? false : true,
            }
        })
    }

    render() {
        const { bookId } = this.props;
        const bookLink = this.state.bookLink;
        const bookTitle = this.state.bookTitle;
        const listOpen = this.state.listOpen;
        const toggleList = this.toggleList;

        return (
            <div>
                <BookReader 
                    bookId={bookId} 
                    bookLink={bookLink} 
                    bookTitle={bookTitle} 
                    listOpen={listOpen}
                    toggleList={toggleList} 
                />
            </div>
        )
    };
}