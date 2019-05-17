import React from "react"
import { Route,Switch,Redirect } from "react-router-dom" 
import Footer from "./footer/footer"
import Home from "./home/home"
import Product from "./product/product"
import Activity from "./activity/activity"
import Talk from "./talk/talk"
import User from "./user/user"
import Err from "./err/err"
import HomeDetail from "./home/detail/detail"   
import Loading from "./loading/loading"

import store from "../store/index"
import {observer} from "mobx-react"
@observer
class App extends React.Component{
    render(){
        return(
            <>
                <Route component={Footer}/>
                {store.bLoad&&<Loading/>}
                <Switch>    
                        <Route path="/home"  component={Home} />
                        <Route path="/home-detail/:id" component={HomeDetail}/>
                        <Route path="/product" component={Product} />
                        <Route path="/activity" component={Activity} />
                        <Route path="/talk" component={Talk} />
                        <Route path="/user" component={User} />
                        <Redirect exact from="/"  to="/home" />
                        <Route component={Err}/>
                </Switch>
            </>
        )
    }
}
export default App