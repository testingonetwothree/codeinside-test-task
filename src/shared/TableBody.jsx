import React from 'react'
import PropTypes from 'prop-types'


export const TableBody = ({className, children}) => (
  <tbody className={className}>{children}</tbody>
)

TableBody.defaultProps = {
  children: null
};

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
