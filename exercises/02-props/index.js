import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Read: {this.props.read ? 'True' : 'False'}</p>
      </div>
    );
  }
}

// TODO
Book.defaultProps = {
  title: 'Default title',
  read: false,
};

class Library extends React.Component {
  render() {
    const read = true;
    const title = 'Professional Node.js: Building JavaScript Based Scalable Software';

    return (
      <ul>
        {/* don't declare any attributes here */}
        <li><Book /></li>
        {/* TODO pass the title and read values to Book by using the Book tag attributes */}
        <li><Book title="Second book title" read /></li>
      </ul>
    );
  }
}

export default Library;
