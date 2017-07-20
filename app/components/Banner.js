import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

import './banner.scss'
class Banner extends Component{
    render(){
        return(
            <header className="banner-box">
                <div className="w inner-banner-box">
                    <div className="flex">
                        <a href="javascript:void(0)" aria-label="知乎"></a>
                        <nav>
                            <a href="javascript:void(0)">首页</a>
                            <a href="javascript:void(0)">发现</a>
                            <a href="javascript:void(0)">话题</a>
                        </nav>
                        <form>
                            <input type="text" placeholder="搜索你感兴趣的内容…" /><i></i>
                        </form>
                    </div>
                    <div className="b-operate">
                        <Link to="/login" className="btn btn-blue mr20">登录</Link>
                        <Link to="/register" className="btn">加入</Link>
                    </div>
                </div>
            </header>
        )
    }
}
export default Banner
