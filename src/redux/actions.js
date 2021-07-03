import * as ActionTypes from './types'
import {useHistory} from "react-router-dom";


export const loginUserLoading=()=>{
    return {
        type : ActionTypes.USER_LOGIN_LOADING,
    }
}
export const  loginUser=(userData)=>{

    return {
        type : ActionTypes.USER_LOGIN,
        payload : userData
    }
}
export const logoutUser=()=>{
    return {
        type : ActionTypes.USER_LOGOUT,
    }
}

export const loginUserError=(err)=>{
    return {
        type : ActionTypes.USER_LOGIN_ERROR,
        payload : err
    }
}
export function wait(time) {
    return new Promise(function (resolve, reject) {

        setTimeout(resolve, time);
    })
}

const adherantLoading=()=>{
    return {
        type : ActionTypes.ADHERANT_LOADING
    }

}
const addVaccinationList =(vaccinationUser ,  rdvMedecinSchedule , user)=>{
    return {
        type : ActionTypes.ADD_VACCINATION ,
        payload : {
            vaccinationUser : vaccinationUser,
            rdvMedecinSchedule : rdvMedecinSchedule,
            user : user

        }
    }
}

export const fetchAddVaccinationList=(vaccinationToAdd)=>(dispatch , getState)=>{
    dispatch(adherantLoading());
    wait(1000)
        .then(()=>{
            let useless=0;
            const latestrdvs=[];
            const medecinAccounts=getState().accounts.data.filter(user=>user.accountType==='Medecin');
            console.log('MEDECIN ACCOUNTS :' , medecinAccounts);
            let ajouterDemain=false;
            let medecinDemain={};
            medecinAccounts.forEach(medecinAccount=>{
                if(!ajouterDemain){
                    console.log('Medecin Account : ', medecinAccount);
                    const rdvs= medecinAccount.appointment.filter(appointment=>!appointment.isDayWork && appointment.startDate > new Date());
                    console.log('RDVS =' , rdvs);
                    let latestRdv= {};
                    if(rdvs.length){
                        rdvs.forEach((rdv , index)=>{
                            index ?  ( latestRdv.id< rdv.id ? latestRdv=rdv : useless++) :latestRdv=rdv;
                        })
                        latestrdvs.push(latestRdv)
                    }else {
                        // There is a medecin without any future vaccination ( we affect to him this vaccination tomorerow at 8 )
                        ajouterDemain=true;
                        medecinDemain=medecinAccount;
                    }
                    console.log('latest rdvs to Medecin : ', medecinAccount ,'is :' , latestRdv );
                }
            });
            let vaccinationUser={};
            let latestEarliestRdv = {}
            if(!ajouterDemain) {
                console.log('latest RDVS =', latestrdvs);
                latestrdvs.forEach((rdv, index) => {
                    index ? (latestEarliestRdv.endDate > rdv.endDate ? latestEarliestRdv = rdv : useless++) : latestEarliestRdv = rdv;
                })
                console.log('latest Earlies RDV =', latestEarliestRdv);
                let whoWillDoThevaccinationId = latestEarliestRdv.userId;
                vaccinationUser = {...vaccinationToAdd, userId: whoWillDoThevaccinationId}
                // if the latestearlies rdv isn't at  16h ( the end of the day )
                if (latestEarliestRdv.endDate.getHours() !== 16) {
                    vaccinationUser = {...vaccinationUser, startDate: latestEarliestRdv.endDate}
                    let endDate = new Date(vaccinationUser.startDate.getTime());
                    if (vaccinationUser.startDate.getMinutes() === 0) {
                        endDate.setMinutes(30);
                    } else {
                        endDate.setHours(endDate.getHours() + 1);
                        endDate.setMinutes(0);
                    }
                    vaccinationUser = {...vaccinationUser, endDate: endDate}
                    console.log('FINAL RDV =', vaccinationUser);
                } else {
                    // if tomorrow isn't a weekend
                    if (latestEarliestRdv.getDay() !== 4) {
                        let startDate = new Date(latestEarliestRdv.startDate.getTime());
                        startDate.setDate(startDate.getDate() + 1);
                        startDate.setHours(8);
                        startDate.setMinutes(0);
                        let endDate = new Date(startDate.getTime());
                        endDate.setMinutes(30);
                        vaccinationUser = {...vaccinationUser, startDate : startDate , endDate: endDate}
                    }
                    // if tomorrow is a weekend
                    else {
                        let startDate = new Date(latestEarliestRdv.startDate.getTime());
                        startDate.setDate(startDate.getDate() + 3);
                        startDate.setHours(8);
                        startDate.setMinutes(0);
                        let endDate = new Date(startDate.getTime());
                        endDate.setMinutes(30);
                        vaccinationUser = {...vaccinationUser, startDate : startDate , endDate: endDate}
                    }
                }
            }else{
                let whoWillDoThevaccinationId = medecinDemain.userId;
                vaccinationUser = {...vaccinationToAdd, userId: whoWillDoThevaccinationId}
                // if the latestearlies rdv isn't at  16h ( the end of the day )
                let now=new Date();
                let startDate=new Date(now.getTime());
                now.getDay() !== 4  ? startDate.setDate(now.getDate()+1) : startDate.setDate(now.getDate()+3);
                startDate.setHours(8);
                startDate.setMinutes(0);
                let endDate=new Date(startDate.getTime());
                endDate.setMinutes(30);
                vaccinationUser = {...vaccinationUser, startDate : startDate , endDate: endDate}
            }
            let targetedMedecin;
            if(ajouterDemain){
                targetedMedecin=medecinDemain;
            }else{
                targetedMedecin = medecinAccounts.filter(medecinAcc=>medecinAcc.id === latestEarliestRdv.userId)[0];
            }
            console.log('Targeted Medecin is ', targetedMedecin);
            vaccinationUser={...vaccinationUser , medecinName : targetedMedecin.userName};
            console.log('RESULT =' , vaccinationUser);
            const rdvMedecinSchedule = {
                title: getState().user.data.userName,
                startDate: vaccinationUser.startDate,
                endDate: vaccinationUser.endDate,
                id: targetedMedecin.appointment.length,
                userId:targetedMedecin.id,
                location: getState().user.data.email,
            }
            dispatch(addVaccinationList(vaccinationUser , rdvMedecinSchedule , getState().user.data));
        });
}

const confirmVaccination=(vaccinationToConfirmId , emailVaccinatedUser)=>{
    return {
        type : ActionTypes.VACCINATION_CONFIRMED,
        payload : {
            vaccinationToConfirmId : vaccinationToConfirmId,
            emailVaccinatedUser : emailVaccinatedUser
        }
    }
}

const rdvEnAttenteLoading=()=>{
    return {
        type : ActionTypes.RDV_EN_ATTENTE_LOADING
    }
}

const rdvConfirmedLoading=()=>{
    return {
        type : ActionTypes.RDV_CONFIRMED_LOADING
    }
}

export const fetchConfirmVaccination = (vaccinationToConfirmId , emailVaccinatedUser)=>(dispatch)=>{
    dispatch(rdvConfirmedLoading());
    dispatch(rdvEnAttenteLoading())
    wait(1000)
        .then(()=>{
            dispatch(confirmVaccination(vaccinationToConfirmId , emailVaccinatedUser))
        })
}

const signUpUserLoading=()=>{
    return {
        type : ActionTypes.SIGN_UP_USER_LOADING
    }
}

const signUpUser=(signUpUserForm)=>{
    return {
        type : ActionTypes.SIGN_UP_USER,
        payload : signUpUserForm

    }
}

export const fetchSignUpUser=(signUpUserForm)=>(dispatch)=>{
    dispatch(signUpUserLoading());
    wait(1000)
        .then(()=>{
            dispatch(signUpUser(signUpUserForm));
        });
}