import React from 'react'
import PropTypes from 'prop-types'
import {TableCell} from "./TableCell";


export const TableEditableCell = ({value, className, onChange}) => (
  <TableCell className={className}>
    <input className={className} value={value} onChange={onChange}/>
  </TableCell>
)


TableEditableCell.defaultProps = {
  value: null,
};

TableEditableCell.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
};
