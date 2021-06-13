import logo from "../logo.svg";
import HeaderCompounent from "./Header/HeaderCompounent";
import {Route, Switch, useLocation} from "react-router-dom";
import HomeCompounent from "./Home/HomeCompounent";
import SignUpCompounent from "./SignUp/SignUpCompounent";
import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";
import Adherant from "./Adherant/AdherantCompounent";
import Medecin from "./Medecin/MedecinCompounent";


export default function Main(props){
    let routeLocation = useLocation ();
    let locationPathName = routeLocation.pathname;
    return (
       <React.Fragment>
           <HeaderCompounent path={locationPathName}/>
           <Switch>
               <Route exact path='/' component={()=><HomeCompounent/>} />
               <Route path='/login' component={()=>{return <SignUpCompounent/>}} />
               <Route path='/adherant' component={()=>{return <Adherant/>}} />
               <Route path='/medecin' component={()=>{return <Medecin/>}}/>
               {/*<Redirect to="/" />*/}
           </Switch>
       </React.Fragment>

    )

}