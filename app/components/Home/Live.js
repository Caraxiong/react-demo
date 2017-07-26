import React,{ Component } from 'react'
import livesData from '../../../data/lives.json'
import './live.scss'

class Live extends Component{
    render(){
        let list = livesData.data.map( (data) => {
            return (
                <div key={data.id}>
                    <a href="javascript:void(0)">
                        <img src={data.speaker.member.url} />{data.subject}
                    </a>
                </div>
            )
        })
        return(
            <div className="card-right">
                <div className = "card-right-title">相关Live推荐</div>
                <div className = "card-right-content">{list}</div>
            </div>
        )
    }
}
export default Live
