import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showDialogFun } from '../../actions/dialogActions'
import Btn from '../../components/operator/Btn'

const BtnContainer = ({ showDialogFun }) => (
    <Btn onClick = { () => showDialogFun() } btnName={'12条评论'}/>
)

BtnContainer.propTypes = {
    showDialogFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        bool: state.dialog.bool,
        data: state.dialog.data
    }
}

export default connect(
    mapStateToProps,
    { showDialogFun }
)(BtnContainer)
