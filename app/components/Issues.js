import React,{ Component } from 'react'
import issuesData from '../../data/issues.json'
import './issues.scss'

class Issues extends Component{
    render(){
        let list = issuesData.data.map( (data) => {
            return (
                <div key={data.id}><a href="javascript:void(0)">{data.title}</a><span>{data.answer_count}个回答</span></div>
            )
        })
        return(
            <div className = "card-right">
                <div className = "card-right-title">相关问题</div>
                <div className = "card-right-content">{list}</div>
            </div>
        )
    }
}
export default Issues
