import { connect } from 'react-redux'
import { toastAction } from '../../actions/toastActions'
import Toast from '../../constants/Toast'

const mapStateToProps = (state) => ({
    bool: state.bool,
    toastText: state.toastText
})

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
    	onClick:() => dispatch(toastAction(!ownProps.bool,'adsfs'))
    }
}

const ToastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toast)

export default ToastContainer
