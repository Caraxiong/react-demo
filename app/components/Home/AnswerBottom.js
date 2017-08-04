import React,{ Component } from 'react'
import ShowCommentsList from '../../containers/Home/ShowCommentsList'
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
	componentWillmount(){
		
	}
	handleClick (e) {
		e.preventDefault()

		this.setState({
			count : this.state.count + 1
		})
	}
	showComments (commentShow,e) {
		e.preventDefault()
		this.setState({
			commentShow : !commentShow
		})
		emitter.emit('ShowComments',!commentShow)
	}
	render(){
		return(
			<div className = "answer-bottom-items">
				<div>
					<a href="javascript:void(0)" className = "btn btn-plain btn-vote mr10" onClick={this.handleClick}>赞同{this.state.count}</a>
					<a href="javascript:void(0)" className = "btn btn-plain btn-vote">反对</a>
				</div>
				<ShowCommentsList />
				<a href="javascript:void(0)" className = "btn btn-plain ml20">分享</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">收藏</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">感谢</a>
			</div>
		)
	}
}
export default AnswerBottom
