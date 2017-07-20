import React,{Component} from 'react'
import Banner from './components/Banner.js'
import Content from './components/Content.js'
import Issues from './components/Issues.js'
import Live from './components/Live.js'
import Answer from './components/Answer.js'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Banner />
                <Content />
                <div className = "w center">
                    <div className ="fl left-box">
                        <Answer />
                    </div>
                    <div className="fr right-box">
                        <Issues />
                        <Live />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
