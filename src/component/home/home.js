import React from "react"
import {Link} from "react-router-dom"
import "./home.css"
import querystring from 'query-string'
import store from "../../store/index"
import {observer} from "mobx-react"

@observer
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            list : ""
        }
    }
    render(){
        return (
            <div id="home">
                <ul>
                    {this.state.list&&
                        this.state.list.map(
                            item=> <li key={item._id}>
                                    <Link to={
                                        {
                                            pathname:`/home-detail/${item._id}`,
                                            search:querystring.stringify({a:1})
                                        }
                                    }>
                                        {item.detail.auth}
                                    </Link>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){

        store.onOff() 
        window.axios(
            "/api/banner"
        ).then(
            res=>{
                console.log(res)
                this.setState({
                    list:res.data
                })
                store.onOff() 
            }
        )
    }
   
}
export default Home