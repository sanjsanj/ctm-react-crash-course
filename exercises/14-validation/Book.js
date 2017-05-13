import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      read: this.props.read,
    };
  }
  toggleRead() {
    this.setState({
      read: !this.state.read,
    });
  }
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>
          <input
            type="checkbox"
            checked={this.state.read}
            onChange={ev => this.toggleRead(ev)}
          />
        </td>
      </tr>
    );
  }
}

Book.propTypes = {
  read: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Book.defaultProps = {
  read: false,
};

export default Book;
