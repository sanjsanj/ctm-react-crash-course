import React from 'react';
import PropTypes from 'prop-types';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

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
    if (!this.state.title) {
      return;
    }

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
            onChange={ev => this.changeTitle(ev)}
            placeholder="Title"
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="read">
            <span>Read: </span>
            <input
              checked={this.state.read}
              onChange={ev => this.changeRead(ev)}
              type="checkbox"
              id="read"
            />
          </label>
        </div>
        <div className="form-group">
          <button
            className="btn btn-default"
            onClick={ev => this.addBook(ev)}
          >
            Add Book
          </button>
        </div>
      </div>
    );
  }
}

BookForm.propTypes = {
  onBook: PropTypes.func.isRequired,
};

export default BookForm;
