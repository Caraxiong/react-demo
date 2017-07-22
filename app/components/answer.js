import React,{ Component } from 'react'
import AnswerBottom from  './AnswerBottom.js'
import Time from  './Time.js'
import CommentsBox from  './CommentsBox.js'
import answers from '../../data/answers.json'

import './answer.scss'

class Answer extends Component{
    // static propTypes = {

    // }
    // static defaultProps = {

    // }
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        const { publishTime } = this.props
        let list = answers.data.map( (data) => {
            return(
                <div key={data.id} className = "answer-box">
                    <div className = "answer-header">
                        <a href="javascript:void(0)">
                            <img src={data.author.url} alt={'头像'}/>
                        </a>
                        <div className = "answer-header-info">
                             <a href="javascript:void(0)">{data.author.name}</a>
                            <span>{data.author.headline}</span>
                        </div>
                    </div>
                    <div className = "answer-content">
                        <label className = "btn btn-plain">{data.voteup_count}人赞同了该回答</label>
                        <p>{data.content}</p>
                        <Time createdTime = {data.created_time} />
                    </div>
                    <AnswerBottom commentData= {data.comment_count}/>
                    <CommentsBox />
                </div>
            )
        })
        return(
            <div>
                <div className = "answer-title">
                    <label>46个回答</label>
                    <div>
                        <a href="javascript:void(0)" className = "btn">默认排序</a>
                        <a href="javascript:void(0)" className = "btn">按时间排序</a>
                    </div>
                </div>
                {list}
            </div>
        )
    }
}
export default Answer
