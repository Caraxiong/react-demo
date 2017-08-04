import React , { Component } from 'react'
import PropTypes from 'prop-types'

const Toast = ({ text , onClick}) => (
	<div><button onClick = {onClick}>关闭</button><span>{text}</span></div>
)

Toast.propTypes = {
	text: PropTypes.string.isRequired
}
export default Toast