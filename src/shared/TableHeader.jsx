import React from 'react'
import PropTypes from 'prop-types'


export const TableHeader = ({className, children}) => (
  <thead className={className}>{children}</thead>
)

TableHeader.defaultProps = {
  children: null
};

TableHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
