import React, { PropTypes } from 'react';

class Guest extends React.Component {
  onRemoveClick() {
    this.props.onRemove(this.props.name);
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.children}</td>
        <td>
          <button
            type="button"
            className="close"
            onClick={ev => this.onRemoveClick(ev)}
          >
            <span>&times;</span>
          </button>
        </td>
      </tr>
    );
  }
}

Guest.propTypes = {
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Guest;
