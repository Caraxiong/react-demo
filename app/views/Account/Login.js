import React,{Component} from 'react'
import '../../../style/common.scss'

class Login extends Component{
    render(){
        return(
            <div className="account-box">
                <form>
                    <div className = "account-form">
                        <div className="input-box">
                            <input type="text" name="name" placeholder="手机号或邮箱" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="密码" />
                        </div>
                    </div>
                    <button className="btn btn-sign">登录</button>
                </form>
            </div>
        )
    }
}
export default Login
