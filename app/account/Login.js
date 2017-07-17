import React,{Component} from 'react'
import '../../style/common.scss'

class Login extends Component{
    render(){
        return(
            <div className="account-box">
                <div className="input-box">
                    <label>姓名：</label>
                    <input type="text" name="name" placeholder="手机号或邮箱" />
                </div>
                <div className="input-box">
                    <label>密码：</label>
                    <input type="password" name="password" placeholder="密码" />
                </div>
                <button className="btn">登录</button>
            </div>
        )
    }
}
export default Login
