import React from 'react';

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      read: false,
    };
  }

  changeTitle(ev) {
    this.setState({
      title: ev.target.value,
    });
  }
  changeRead() {
    this.setState({
      read: !this.state.read,
    });
  }
  addBook() {
    this.props.onBook(this.state);
    this.setState({
      title: '',
      read: false,
    });
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={this.state.title}
            onChange={this.changeTitle.bind(this)}
            placeholder="Title" type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="read">
            <span>Read: </span>
            <input
              checked={this.state.read}
              onChange={this.changeRead.bind(this)}
              type="checkbox"
              id="read"
            />
          </label>
        </div>
        <div className="form-group">
          <button
            className="btn btn-default"
            onClick={this.addBook.bind(this)}
          >Add Book</button>
        </div>
      </div>
    );
  }
}

export default BookForm;
