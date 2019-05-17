import React from "react"
import "./talk.css"
export default class Talk extends React.Component{
    render(){
        return (
            <div id="talk">
                这里是讨论页面
            </div>
        )
    }
    fn1(){
        return(
            window.axios(
                "/a.json"
            ).then(
                res=>{
                    return res
                }
            )
        )
    }
    fn3(){
        return(
            window.axios(
                "/aa.json"
            ).then(
                res=>{
                    return res
                }
            )
        )
    }
    fn2(){
        return (
            window.axios(
                "/api/banner"
            ).then(
                res=>{
                    return res
                }
            )
        )
    }
    // componentDidMount(){

    //     window.axios.all([this.fn1(), this.fn2(),this.fn3()])
    //     .then(window.axios.spread(function (acct, perms,ccc) {
    //       // 两个请求现在都执行完成

    //       console.log(acct,perms,ccc);
    //     })) 

    // }
}