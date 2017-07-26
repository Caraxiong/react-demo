import React,{ Component } from 'react'
import issuesData from '../../../data/issues.json'
import './issues.scss'

class Issues extends Component{
    static propTypes = {
        id: React.PropTypes.string,
        title: React.PropTypes.string,
        answer_count:React.PropTypes.number
    }
    render(){
        return(
           <div key={this.props.id}><a href="javascript:void(0)">{this.props.title}</a><span>{this.props.answer_count}个回答</span></div>
        )
    }
}
export default Issues
