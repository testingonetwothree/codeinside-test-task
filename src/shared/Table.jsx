import React from 'react'
import PropTypes from 'prop-types'


export const Table = ({className, children}) => (
  <table className={className}>{children}</table>
)

Table.defaultProps = {
  children: null
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
