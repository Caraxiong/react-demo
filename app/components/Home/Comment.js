import React , { Component } from 'react'
class Comment extends Component{
    static propTypes = {
        id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
        content: React.PropTypes.string,
        author: React.PropTypes.object,
        vote_count: React.PropTypes.number
    }
    render() {
        return(
            <div key = {this.props.id} className="comment-body">
                <div className = "comment-author">
                    <img src=""/>
                    <span>{this.props.author.member.name}</span>
                </div>
                <p className = "comment-content">{this.props.content}</p>
                <div className = "comment-footer">
                    <button className="btn btn-plain">点赞数{this.props.vote_count}</button>
                    <button className="btn btn-plain ml20">回复</button>
                    <button className="btn btn-plain ml20">踩</button>
                    <button className="btn btn-plain ml20">举报</button>
                </div>
            </div>
        )
    }
}
export default Comment
