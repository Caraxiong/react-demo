import React,{ Component } from 'react'
import './content.scss'

class Content extends Component{
    render(){
        return(
            <div className = "w flex center content-box-main">
                <div className = "content-box">
                    <div className = "tag">
                        <a href="javascript:void(0)">web开发</a>
                        <a href="javascript:void(0)">js开发</a>
                        <a href="javascript:void(0)">前端开发</a>
                        <a href="javascript:void(0)">代码</a>
                    </div>
                    <div className = "ques">
                        <h3>如何写出优美的javascript代码</h3>
                        <p>
                            <span>
                                我是一名前端开发工程师，主要写 JavaScript，有大概两年经验。最近在写一些页面上的模块，发现自己在构思的时候总是很清晰，但是写着写着感觉代码越来越乱，
                        看起来就像一坨屎，而我又有点儿代码洁癖，看着越来越乱的代码就不想进行下去。请问怎么办呢？我是一名前端开发工程师，主要写 JavaScript，有大概两年经验。
                        最近在写一些页面上的模块，发现自己在构思的时候总是很清晰，但是写着写着感觉代码越来越乱，看起来就像一坨屎，而我又有点儿代码洁癖，看着越来越乱的代码就不想进行下去。
                        请问怎么办呢？
                            </span>
                            <a href="javascript:void(0)" className="btn btn-plain">显示全部</a>
                        </p>
                        <div className = "ques-footer">
                            <a href="javascript:void(0)" className="btn mr20"><i></i>12条评论</a>
                            <a href="javascript:void(0)" className="btn mr20"><i></i>分享</a>
                            <a href="javascript:void(0)" className="btn"><i></i>邀请回答</a>
                        </div>
                    </div>
                </div>
                <div className = "content-right">
                    <div>
                        <p>关注者</p>
                        <p>1304</p>
                    </div>
                    <div>
                        <p>被浏览</p>
                        <p>1212165</p>
                    </div>
                    <a href="javascript:void(0)" className="btn mr20">关注问题</a>
                    <a href="javascript:void(0)" className="btn btn-blue "><i></i>写回答</a>
                </div>
            </div>
        )
    }
}
export default Content
