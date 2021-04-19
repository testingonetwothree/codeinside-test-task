import React from 'react'
import PropTypes from 'prop-types'


export const TableRow = ({className, children}) => (
  <tr className={className}>{children}</tr>
)

TableRow.defaultProps = {
  children: null
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
