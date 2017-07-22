import React,{ Component } from 'react'
import './answer-bottom.scss'

class AnswerBottom extends Component{
	constructor(props){
		super(props)

		this.handleClick = this.handleClick.bind(this)
		this.showComments = this.showComments.bind(this)

		this.state = {
			count : 0,
			commentShow : false
		}
	}
	handleClick (e) {
		e.preventDefault()

		this.setState({
			count : this.state.count + 1
		})
	}
	showComments (e) {
		e.preventDefault()
		this.setState({
			commentShow : true
		})
	}
	render(){
		return(
			<div className = "answer-bottom-items">
				<div>
					<a href="javascript:void(0)" className = "btn btn-plain btn-vote mr10" onClick={this.handleClick}>赞同{this.state.count}</a>
					<a href="javascript:void(0)" className = "btn btn-plain btn-vote">反对</a>
				</div>
				<a href="javascript:void(0)" className = "btn btn-plain ml20" showFlag = {this.state.commentShow} onClick={this.showComments}>{this.props.commentData}条评论</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">分享</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">收藏</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">感谢</a>
			</div>
		)
	}
}
export default AnswerBottom
