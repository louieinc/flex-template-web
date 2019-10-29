import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg
      className={className}
      {...rest}
      width="50"
      height="50"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path style={{fill:'#dae6fd'}} d="M23.93,14.67a5,5,0,0,0-4.22-4.91,3,3,0,0,0-2.63-1.61A6.76,6.76,0,0,0,4.54,9.94a5,5,0,0,0-3.13,6.53A2.54,2.54,0,0,0,1.09,18a2.58,2.58,0,0,0,2.4,2.34H21.74a1.86,1.86,0,0,0,1.43-3.05A4.9,4.9,0,0,0,23.93,14.67Z"/>
      <path style={{fill:'#5e5f68'}} d="M23.7,10c-.23-.65-3.82,0-8.18,1.47L8.39,8.79,6.7,10.34l.17.14,0-.05a.51.51,0,0,1,.78,0l2.55,3h0c-.53.2-1.09.38-1.62.64L4.2,16.32H9.37l4.78-1.6h0l1.46-.5C20.32,12.56,23.94,10.67,23.7,10Z"/>
      <path style={{fill:'#244d9c'}} d="M6.7,14.61,3.4,13l-.83.67-.29.23.09.11h0a.3.3,0,0,1,.43.08l1.18,2Z"/>
        />
    </svg>

  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
