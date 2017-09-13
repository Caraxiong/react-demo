import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hideDialogFun } from '../../actions/dialogActions'
import Dialog from '../../constants/Dialog'

const DialogContainer = ({ bool , data , hideDialogFun }) => (
    <Dialog bool = { bool }  data = { data } onClick = {() => hideDialogFun()} />
)

DialogContainer.propTypes = {
    bool: PropTypes.bool,
    data: PropTypes.string,
    hideDialogFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        bool: state.dialog.bool,
        data: state.dialog.data
    }
}

export default connect(
    mapStateToProps,
    { hideDialogFun }
)(DialogContainer)
