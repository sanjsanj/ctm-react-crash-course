import React, { PropTypes } from 'react';
import Back from './Back';
import Next from './Next';

const Footer = ({
  index,
  title,
  size
}) => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className="pull-right">
            <Back index={index} title={title} />
            <Next index={index} size={size} />
          </div>
        </div>
        <div className='row'>
          <a href='https://yld.io' target='_blank'>© YLD Limited {year}</a> Check out our blog <a href='https://blog.yld.io/' target='_blank'>https://blog.yld.io/</a>!
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  size: PropTypes.number
};

Footer.defaultProps = {
  title: ''
};

module.exports = Footer;
