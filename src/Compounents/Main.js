import logo from "../logo.svg";
import HeaderCompounent from "./Header/HeaderCompounent";
import {Route, Switch, useLocation} from "react-router-dom";
import HomeCompounent from "./Home/HomeCompounent";
import SignUpCompounent from "./SignUp/SignUpCompounent";
import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";
import Adherant from "./Adherant/AdherantCompounent";
import Medecin from "./Medecin/RdvEnAttenteCompounent";
import RdvConfirmesCompounent from "./Medecin/RdvConfirmesCompounent";
import RdvEnAttenteCompounent from "./Medecin/RdvEnAttenteCompounent";
import ScheduleMedecin from "./Medecin/ScheduleMedecinCompounent";
import Paper from "@material-ui/core/Paper";
import {Appointments, Scheduler, WeekView} from "@devexpress/dx-react-scheduler-material-ui";
import appointments from "../redux/reducers/appointmentsReducer";


export default function Main(props){
    let routeLocation = useLocation ();
    let locationPathName = routeLocation.pathname;
    return (
       <React.Fragment>
           <div style={{display : 'flex' , marginTop:'4rem'}} >
               <HeaderCompounent path={locationPathName}/>
               <Switch>
                   <Route exact path='/' component={()=><HomeCompounent/>} />
                   <Route path='/login' component={()=>{return <SignUpCompounent/>}} />
                   <Route path='/adherant' component={()=>{return <Adherant/>}} />
                   <Route exact path='/medecin' component={()=>{return <ScheduleMedecin/>}}/>
                   <Route path='/medecin/enAttente' component={()=>{return <RdvEnAttenteCompounent/>}}/>
                   <Route path='/medecin/confirme' component={()=>{return <RdvConfirmesCompounent/>}}/>
                   <Route path='/medecin/schedule' component={()=>{return <ScheduleMedecin/>}}/>
                   {/*<Redirect to="/" />*/}
               </Switch>
           </div>

       </React.Fragment>

    )

}