import React from "react"
import { NavLink } from "react-router-dom"
import "./footer.css"

import { Select } from 'antd'
const Option = Select.Option

export default class Footer extends React.Component{
    render(){
        let {history}  = this.props ;
        return (
            <div id="footer">
                {/* <ul>
                    <li >
                        <NavLink to="/" className="active bg"  >主页</NavLink>
                    </li>
                    <li >
                        <NavLink to="/product" className="active bg" >商品页面</NavLink>
                    </li>
                    <li >
                        <NavLink to="/talk" className="active bg" >讨论页面</NavLink>
                    </li>
                    <li >
                        <NavLink to="/user" className="active bg" >用户页</NavLink>
                    </li>
                </ul> */}
 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="主页"
                    // optionFilterProp="children"
                   
                    onChange={
                        
                        (input) =>{
                            switch(input){
                                case "主页": history.replace("/home") ; break;
                                case "商品": history.replace("/product") ; break;
                                case "讨论": history.push("/talk") ; break;
                                case "用户": history.push("/user") ;break;
                            } 
                        }
                    }
                >
                    <Option value="主页">主页</Option>
                    <Option value="商品">商品</Option>
                    <Option value="讨论">讨论</Option>
                    <Option value="用户">用户</Option>
                </Select>,
            </div>
        )
    }
}