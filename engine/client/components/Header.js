import React, { PropTypes } from 'react';
import Back from './Back';
import Next from './Next';

const Header = ({
  title,
  slug,
  index,
  size
}) => {
  const _title = !title
    ? 'Learn React'
    : title;

  return (
    <div className='header'>
      <div className='container'>
        <div className='row'>
          <Back index={index} title={title} />
          <Next index={index} size={size} />
          <h1>
            {_title}
          </h1>
          <a href='https://yld.io' target='_blank'>
            <img
              className='logo'
              src={require('file-loader!../../../images/yld.png')}
              alt='YLD'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  size: PropTypes.number
};

Header.defaultProps = {
  title: ''
};

module.exports = Header;
