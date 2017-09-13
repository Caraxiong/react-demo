import React , { Component } from 'react'
import PropTypes from 'prop-types'
import './dialog.scss'

const Dialog = ({ bool , data , onClick }) => {
    let display = ''
    switch ( bool ) {
        case true:
            display = 'flex'
            break
        default:
            display = 'none'
            break
    }
    return (
        <div className = "dialog" style = {{ display:display }}>
            <div className = "dialog-model">
                <div className="dialog-header">
                    温馨提示
					<i className="close" onClick = { onClick }>×</i>
                </div>
                <div className="dialog-body">
                    {data}
                </div>
                <div className="dialog-footer"></div>
             </div>
        </div>
    )
}

Dialog.propTypes = {
    bool: PropTypes.bool,
    data: PropTypes.string
}

export default Dialog
