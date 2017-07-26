import React,{ Component } from 'react'
import Issues from './Issues'
import issuesData from '../../../data/issues.json'
import './issues.scss'

class IssuesList extends Component{
    render(){
        return(
            <div className = "card-right">
                <div className = "card-right-title">相关问题</div>
                <div className = "card-right-content">
                    issuesData.data.map( data => (
                        <Issues { ...data } />
                    ))
                </div>
            </div>
        )
    }
}
export default IssuesList
