import React from 'react';
import BookForm from './BookForm';
import Book from './Book';

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [{
        title: 'Professional Node.js',
        author: 'Pedro Teixeira',
      }],
    };
  }
  onBook(book) {
    this.state.books.push(book);

    this.setState({
      books: this.state.books,
    });
  }
  render() {
    const books = this.state.books.map((book, index) => (
      <Book
        key={index}
        title={book.title}
        read={book.read}
      />
      ));

    return (
      <div>
        <BookForm
          onBook={ev => this.onBook(ev)}
        />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Books;
