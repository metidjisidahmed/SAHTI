import logo from "../logo.svg";
import HeaderCompounent from "./Header/HeaderCompounent";
import {Route, Switch, useLocation} from "react-router-dom";
import HomeCompounent from "./Home/HomeCompounent";
import LoginCompounent from "./SignUp/LoginCompounent";
import {ThemeProvider} from "@material-ui/core/styles";
import React, {useState} from "react";
import Medecin from "./Medecin/RdvEnAttenteCompounent";
import RdvConfirmesCompounent from "./Medecin/RdvConfirmesCompounent";
import RdvEnAttenteCompounent from "./Medecin/RdvEnAttenteCompounent";
import ScheduleMedecin from "./Medecin/ScheduleMedecinCompounent";
import Paper from "@material-ui/core/Paper";
import {Appointments, Scheduler, WeekView} from "@devexpress/dx-react-scheduler-material-ui";
import appointments from "../redux/reducers/medecinSchedule";
import {useDispatch, useSelector} from "react-redux";
import SignUpCompounent from "./SignUp/SignUpCompounent";
import NotFound from "./NotFound";
import AdherantCompounent from "./Adherant/AdherantCompounent";


export default function Main(props){
    let routeLocation = useLocation ();
    let locationPathName = routeLocation.pathname;
    const dispatch = useDispatch();
    const user = useSelector( state => state.user);
    return (
       <React.Fragment>
           <div style={locationPathName!=='/signup' ? {display : 'flex' , marginTop:'4rem'} : {display : 'flex' , marginTop:'4rem'} } >
               {locationPathName==='/signup' || locationPathName==='/login' ? null :  <HeaderCompounent path={locationPathName}/>  }

               <Switch>
                   <Route exact path='/' component={()=><HomeCompounent/>} />
                   {
                       !user.data ? (
                           <React.Fragment>
                               <Route path='/login' component={()=>{return <LoginCompounent/>}} />
                               <Route path='/signup' component={()=>{return <SignUpCompounent/>}}/>
                           </React.Fragment>

                       ) : user.data.accountType==='Adherant' ? (
                           <Route path='/Adherant' component={()=>{return <AdherantCompounent/>}} />

                       ) : user.data.accountType==='Medecin' ? (
                           <React.Fragment>
                               <Route exact path='/Medecin' component={()=>{return <ScheduleMedecin/>}}/>
                               <Route path='/Medecin/enAttente' component={()=>{return <RdvEnAttenteCompounent/>}}/>
                               <Route path='/Medecin/confirme' component={()=>{return <RdvConfirmesCompounent/>}}/>
                               <Route path='/Medecin/schedule' component={()=>{return <ScheduleMedecin/>}}/>
                           </React.Fragment>

                       ) : null
                   }
                   <Route path="*" component={() => <NotFound/>} />

                   {/*<Redirect to="/" />*/}
               </Switch>
           </div>

       </React.Fragment>

    )

}