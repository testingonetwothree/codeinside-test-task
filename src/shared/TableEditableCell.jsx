import React from 'react'
import PropTypes from 'prop-types'
import {TableCell} from "shared/TableCell";


export const TableEditableCell = ({value, className, placeholder, onChange}) => (
  <TableCell className={className}>
    <input className={className} value={value} placeholder={placeholder} onChange={onChange}/>
  </TableCell>
)


TableEditableCell.defaultProps = {
  value: null,
  placeholder: '',
};

TableEditableCell.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
};
