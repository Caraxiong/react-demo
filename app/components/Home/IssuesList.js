import React,{ Component } from 'react'
import Issues from './Issues'
import issuesData from '../../../data/issues.json'
import './issues.scss'

class IssuesList extends Component{
    render(){
        let list = issuesData.data.map( (data) => {
            return (
                <Issues key={data.id} { ...data } />
            )
        })
        return(
            <div className = "card-right">
                <div className = "card-right-title">相关问题</div>
                <div className = "card-right-content">
                   {list}
                </div>
            </div>
        )
    }
}
export default IssuesList
