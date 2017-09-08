import React from 'react';
import PropTypes from 'prop-types';

const Twitter = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.666,4.993A4.89,4.89,0,0,1,12.494,6.2q.007.1.007.3a6.635,6.635,0,0,1-.275,1.877,6.764,6.764,0,0,1-2.732,3.727,6.637,6.637,0,0,1-3.641,1.042A6.488,6.488,0,0,1,2.266,12.1a5.031,5.031,0,0,0,.564.029,4.575,4.575,0,0,0,2.9-1,2.342,2.342,0,0,1-2.184-1.62,2.967,2.967,0,0,0,.441.036A2.422,2.422,0,0,0,4.6,9.47,2.3,2.3,0,0,1,3.26,8.664a2.257,2.257,0,0,1-.532-1.487V7.149a2.314,2.314,0,0,0,1.056.3,2.332,2.332,0,0,1-.759-.832A2.342,2.342,0,0,1,3.062,4.32a6.623,6.623,0,0,0,2.13,1.725,6.512,6.512,0,0,0,2.687.72,2.594,2.594,0,0,1-.058-.535,2.334,2.334,0,0,1,2.336-2.336,2.252,2.252,0,0,1,1.707.738,4.584,4.584,0,0,0,1.483-.564A2.269,2.269,0,0,1,12.32,5.355,4.682,4.682,0,0,0,13.666,4.993Z"/></svg>)


Twitter.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Twitter;