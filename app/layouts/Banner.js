import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

import './banner.scss'
class Banner extends Component{
    constructor(props){
        super(props)

        this.findFun = this.findFun.bind(this)

        this.state = {
            searchVal: ''
        }
    }
    findFun(e){
        this.setState({
            searchVal: e.targe.value
        })
    }
    render(){
        const { searchVal } = this.state
        return(
            <header className="banner-box">
                <div className="w inner-banner-box">
                    <div className="flex">
                        <a href="javascript:void(0)" aria-label="知乎"></a>
                        <nav>
                            <Link to="/">首页</Link>
                            <a href="javascript:void(0)">发现</a>
                            <a href="javascript:void(0)">话题</a>
                        </nav>
                        <form className="search-form">
                            <input type="text" className="Input" placeholder="搜索你感兴趣的内容…" value={searchVal} onChange = {this.findFun}/><button className="btn btn-search">搜索</button>
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
