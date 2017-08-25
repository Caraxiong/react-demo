import React , { Component } from 'react'
import emitter from './EventEmitter.js'

import comments from '../../../data/comments.json'

class CommentsBox extends Component{
	constructor(props){
		super(props)
		this.state = {
			loading: true,
			display:'none'
		}
	}
	componentDidMount(){
		const _self = this
		this.showComments = emitter.on('ShowComments',(data) => {
			_self.setState = ({
				display: data ? 'block' : 'none'
			},() => console.log(_self.state))
			// console.log(_this.state.display)
		})
	}
	componentWillUnmount(){
		emitter.removeListener(this.showComments)
	}
	render() {
		let list = comments.data.map((data) => {
			return (
				<div key = {data.id}>
					<div>
						<img src=""/>
						<span>{data.author.member.name}</span>
					</div>
					<p>{data.content}</p>
					<a href = "javascript:void(0)">点赞数{data.vote_count}</a>
				</div>
			)
		})
		return(
			<div style={{'display':this.state.display}}>
				<div>
					<h2>{comments.common_counts}</h2>
					<a href="javascript:void(0)">切换为时间排序</a>
				</div>
				{list}
			</div>
		)
	}
}
export default CommentsBox
