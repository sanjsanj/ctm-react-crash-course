import React, { PropTypes } from 'react';

const Guest = ({
  onRemove,
  name,
  children,
}) => (
  <tr>
    <td>{name}</td>
    <td>{children}</td>
    <td>
      <button
        type="button"
        className="close"
        onClick={() => onRemove(name)}
      >
        <span>&times;</span>
      </button>
    </td>
  </tr>
  );

Guest.propTypes = {
  onRemove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Guest;
