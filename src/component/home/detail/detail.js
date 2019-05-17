import React from "react"
import querystring from 'query-string';

export default class HomeDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content : props.match.params.id
        }
    }
    render(){
        
        return(
            <div>
                {this.state.msg&&this.state.msg}
            </div>
        )
    }
    componentDidMount(){

        window.axios(
            "/api/banner"
        ).then(
            res=>{
                for(let i=0;i<res.data.length;i++){
                    if( res.data[i]._id == this.state.content){
                        this.setState({
                            msg:res.data[i].detail.content
                        })
                    }
                }

            }
        )
    }
}