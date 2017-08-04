import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import Discuss from './Discuss'
// import emitter from './EventEmitter.js'

import './comments-list.scss'

const CommentsList = ({ comments }) => (
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		loading: true,
	// 		display:'none'
	// 	}
	// }
	// componentDidMount(){
	// 	// const _self = this
	// 	// _self.setState = ({
	// 	// 	display:  'block'
	// 	// },() => console.log(_self.state))
	// 	// this.showComments = emitter.on('ShowComments',(data) => {
	// 	// 	_self.setState = ({
	// 	// 		display: data ? 'block' : 'none'
	// 	// 	},() => console.log(_self.state))
	// 	// 	// console.log(_this.state.display)
	// 	// })
	// }
	// componentWillUnmount(){
	// 	alert(0)
	// }
	// render() {
	// 	let list = comments.data.map((data) => {
	// 		return (
	// 			<Comment key = {data.id} { ...data }/>
	// 		)
	// 	})
	// 	return(
	// 		<div style={{'display':'block'}}>
	// 			<div className = "comment-header">
	// 				<h2>{comments.common_counts}条评论</h2>
	// 				<a href="javascript:void(0)">切换为时间排序</a>
	// 			</div>
	// 			{list}
    //             <Discuss />
	// 		</div>
	// 	)
	// }
	<div>
		<div className = "comment-header">
			<h2>5条评论</h2>
			<a href="javascript:void(0)">切换为时间排序</a>
		</div>

        <Discuss />
	</div>
)
CommentsList.propTypes = {
	comments: PropTypes.array,
	isShow: PropTypes.string
}

export default CommentsList
