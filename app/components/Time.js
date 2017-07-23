import React , { Component } from 'react'

class Time extends Component{
    render(){
    	let time = new Date(this.props.createdTime)
        let createdTime = time.toLocaleString()
        return(
            <time>发布于{createdTime}</time>
        )
    }
}
export default Time
