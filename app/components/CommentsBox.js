import React , { Component } from 'react'
import comments from '../../data/comments.json'

class CommentsBox extends Component{
	render() {
		let list = comments.data.map((data) => {
			return (
				<div key = {data.id}>
					<div>
						<img src={data.author.member.url}/>
						<span>{data.author.member.name}</span>
					</div>
					<p>{data.content}</p>
					<a href = "javascript:void(0)">点赞数{data.vote_count}</a>
				</div>
			)
		})
		return(
			<div>
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