import React from 'react'
import PropTypes from 'prop-types'


export const TableCell = ({className, children}) => (
  <td className={className}>{children}</td>
)

TableCell.defaultProps = {
  children: null
};

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
