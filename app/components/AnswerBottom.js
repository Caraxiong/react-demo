import React,{ Component } from 'react'
import './answer-bottom.scss'

class AnswerBottom extends Component{
	render(){
		return(
			<div className = "answer-bottom-items">
				<div>
					<a href="javascript:void(0)" className = "btn btn-plain btn-vote mr10">赞同</a>
					<a href="javascript:void(0)" className = "btn btn-plain btn-vote">反对</a>
				</div>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">17条评论</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">分享</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">收藏</a>
				<a href="javascript:void(0)" className = "btn btn-plain ml20">感谢</a>
			</div>
		)
	}
}
export default AnswerBottom