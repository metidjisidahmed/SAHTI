import React, {useEffect , useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar, Button,
    Dialog,
    FormControl, FormLabel,
    Grid,
    IconButton, InputLabel,
    Paper, Select,
    Slide,
    TextField,
    Toolbar,
    Typography,
    RadioGroup,
    FormControlLabel,Radio
} from '@material-ui/core';
import MaterialTable from 'material-table';
import {AddBox, AssignmentTurnedIn, Cached, Close, DeleteForever, EditOutlined} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-loader-spinner";
import { tableIcons, tableLang } from '../widgets/TableWidget';
import {Save , VerifiedUser , ChevronLeft} from "@material-ui/icons";
import { Drawer , Divider , Hidden} from "@material-ui/core";
import clsx from 'clsx';
import moment from "moment";
import {useStylesApp} from "../../GlobalStyle/globalStyle";


/* Dialog Transition animation */
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
/* DIRECT STYLING HERE */
const useStyles = makeStyles((theme) => ({
    card_paper:{
        padding : "5px" , borderRadius : "5px" , backgroundColor : "#98DED9", margin : '2rem'
    },
    icon_button_blue:{
        color : "cyan"
    },
    icon_button_green:{
        color : "#39e600"
    },
    icon_button_red:{
        color : "#ff3333"
    },
    icon_button_yellow :{
        color : "yellow"
    },
    appBar:{
        position: 'relative',
        marginBottom : "3rem"
    },
    title:{
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    subTitle:{
        marginBottom : "2rem"
    },
    tab_appBar_dialog : {
        flexGrow: 1,
        width: '100%',
    } ,
    formControl : {
        width: '100%',
    },
    title_dialog: {
        marginLeft: theme.spacing(2),
        flex: 1,
    }
}));



const Medecin = (props) => {
    // const dispatch = useDispatch() ;
    // const vaccinationList= useSelector( state => state.vaccinationList) ;
    const vaccinationList={  data : [] , loading : false , error : null}
    const classes = useStyles() ;

    const listExemple = [
        {
            ord : 1,
            nss : 'nss 1',
            nom : 'Metidji',
            prenom : 'Sid Ahmed',
            age : 23,
            etat : 'Malade',
            situation : 'nonAtteint',
            suspects : 'Oui',
            phoneNumber : '0555555555',
            email : 'sidahmed@gmail.com'
        },
        {
            ord : 2,
            nss : 'nss 2',
            nom : 'Si Ahmed',
            prenom : 'Massinissa',
            age : 23,
            etat : 'Sain',
            situation : 'nonAtteint',
            suspects : 'Oui',
            phoneNumber : '0555555555',
            email : 'siahmed@gmail.com'
        },
        {
            ord : 3,
            nss : 'nss 1',
            nom : 'Metidji',
            prenom : 'Sid Ahmed',
            age : 23,
            etat : 'Malade',
            situation : 'nonAtteint',
            suspects : 'Oui',
            phoneNumber : '0555555555',
            email : 'sidahmed@gmail.com'
        }
    ];


    const submitAddVaccination =() => {
        // string newDate = moment(currentDate, currentFormatString).format(newFormatString)
        let toPost=formAddVaccination
        // if(formAddCoupon['from']){
        //     toPost={...toPost , from : formAddCoupon['from']}
        // }
        // if(formAddCoupon.to){
        //     toPost={...toPost , to : formAddCoupon.to}
        // }
        // if(formAddCoupon.type==="Percentage"){
        //     toPost={...toPost ,
        //         percentage: formAddCoupon.percentage,
        //         maxAmountToReduce : formAddCoupon.maxAmountToReduce
        //     }
        // }else if(formAddCoupon.type==="Fixed"){
        //     toPost={...toPost ,
        //         minBooking : formAddCoupon.minBooking ,
        //         amount : formAddCoupon.amount
        //     }
        // }
        console.log('post new coupon' , toPost) ;
        // setFormAddVaccination({type : 'Percentage'});
        // setAddVaccinationDialogStatus(false);
        // dispatch(postCoupon(toPost));
    };
    const submitPatchVaccination =(vaccinationId) => {
        let toPatch= formAddVaccination
        // if(formAddCoupon.from){
        //     toPatch={...toPatch , from : formAddCoupon.from}
        // }
        // if(formAddCoupon.to){
        //     toPatch={...toPatch , to : formAddCoupon.to}
        // }
        // if(formAddCoupon.type==="Percentage"){
        //     toPatch={...toPatch ,
        //         percentage: formAddCoupon.percentage,
        //         maxAmountToReduce : formAddCoupon.maxAmountToReduce
        //     }
        // }else if(formAddCoupon.type==="Fixed"){
        //     toPatch={...toPatch ,
        //         minBooking : formAddCoupon.minBooking ,
        //         amount : formAddCoupon.amount
        //     }
        // }
        console.log('patch old vaccination' , toPatch) ;
        // console.log('its Id is ',formAddCoupon._id );
        // setFormAddVaccination({type : 'Percentage'});
        // setAddVaccinationDialogStatus(false);
        // setIsModify(false);
        // dispatch(patchCoupon(toPatch , formAddVaccination._id));
    };

    const onPatch = (data) => {
        console.log('patch coupon' , data)
        // dispatch(patchVaccination(data));
    } ;

    const onDelete = (data) => {
        console.log('delete Coupon' , data);
        // dispatch(deleteCoupon(data[0]._id));
        setIdDeleteVaccination('');
    };


    // ord : 1,
    //     nss : 'nss 1',
    //     nom : 'Metidji',
    //     prenom : 'Sid Ahmed',
    //     age : 23,
    //     etat : 'Malade',
    //     situation : 'nonAtteint',
    //     phoneNumber : '0555555555',
    //     email : 'sidahmed@gmail.com'
    const columns = [
        // { field : 'nss' , title : 'NSS'} ,
        {field:  'ord' , title : "Ordre" , defaultSort : "asc" },
        {field: 'nss' , title: 'NSS' , sorting: false},
        { field: 'nom', title: 'Nom' },
        { field: 'prenom', title: 'Prenom' , sorting : false},
        {field : 'age' , title :'Age'  },
        {field : 'etat' , title : 'Etat Courant' , sorting: false , grouping : true},
        {field: 'situation' , title : 'Situation vis-à-vis de la pandémie' },
        {field : 'suspects' , title : 'Entourage suspect ?'},
        {field: 'phoneNumber', title : 'Numero de téléphone'},
        {field : 'email' , title : 'Email'}
    ];


    /* Default table options*/
    const tableOptions = {
        actionsColumnIndex: 0 ,
        search: true ,
        grouping: true ,
        sorting : true

    };
    const handleCloseAddCouponDialog = () => {
        setAddVaccinationDialogStatus(false);
        if(isModify){
            setFormAddVaccination({type : 'Percentage'});
            setIsModify(false);
        }
        setRefresh(refresh + 1);
    };

    const [isAddVaccinationDialogOpen  , setAddVaccinationDialogStatus]=useState(false);
    const [refresh , setRefresh]= useState(0)
    const [formAddVaccination , setFormAddVaccination]=useState({etat : 'sain' , situation : 'nonAtteint' , suspects : 'Personne 1'});
    const [idDeleteVaccination , setIdDeleteVaccination]=useState('')
    const [isModify , setIsModify]=useState(false);

    // useEffect(()=>{
    //     dispatch(getCoupon());
    // } , [dispatch , refresh])
    return (
        <React.Fragment>
            <Grid item xs={12} >
                {vaccinationList?.loading ?(
                    <Typography align="center">
                        <Loader
                            type="Rings"
                            color="#ffdd00"
                            height={400}
                            width={400}
                        />
                    </Typography>
                ) : vaccinationList?.error ? (
                    <Typography variant="h2" color="error" align="center">
                        <Loader
                            type="Rings"
                            color="#fa3838"
                            height={400}
                            width={400}
                        />
                        { vaccinationList?.error.message }
                    </Typography>
                ) : (
                    <Paper className={classes.card_paper} variant="elevation" elevation={10}>

                        <MaterialTable
                            title="File d'attente de demandes de vaccination"
                            icons={tableIcons}
                            columns={columns}
                            data={listExemple}
                            localization={tableLang}
                            options={tableOptions}
                            actions={props.write ? [
                                {
                                    tooltip: 'Rafrechir les données',
                                    icon: () =>  <Cached fontSize="default" className={classes.icon_button_blue} />,
                                    isFreeAction: true,
                                    onClick: () => setRefresh(refresh + 1)
                                },
                                {
                                    tooltip: 'Supprimer',
                                    icon: () => (<DeleteForever fontSize="default" className={classes.icon_button_red} />),
                                    //here delete riders
                                    onClick: (event, data) => onDelete(data)
                                },
                                {
                                    tooltip: 'Ajouter',
                                    icon: () =>  <AddBox fontSize="default"  />,
                                    isFreeAction: true,
                                    onClick: () => setAddVaccinationDialogStatus(true)
                                },
                                {
                                    tooltip: 'modifier le Coupon',
                                    icon: () => (<EditOutlined fontSize="default"  />),
                                    position : 'row',
                                    onClick: (event, data) => {
                                        setIsModify(true);
                                        setFormAddVaccination(data);
                                        setAddVaccinationDialogStatus(true) ;
                                    }
                                }
                            ]: [
                                {
                                    tooltip: 'Rafrechir les données',
                                    icon: () =>  <Cached fontSize="default" className={classes.icon_button_blue} />,
                                    isFreeAction: true,
                                    onClick: () => setRefresh(refresh + 1)
                                },
                                rowData=>({
                                    tooltip: "Confirmer le Rendez-vous",
                                    icon: () =>  <AssignmentTurnedIn fontSize="default" className={classes.icon_button_green} />,
                                    onClick: () => console.log('Confirmer le rdv'),
                                    hidden : false
                                }),
                            ]}

                            // editable={props.write ? {
                            //     // onRowAdd: newData => onPost(newData),
                            //     // onRowUpdate: (newData, oldData) => onPatch(newData)
                            //
                            // }: {}}
                        />
                    </Paper>
                )
                }
            </Grid>

        </React.Fragment>

    )
} ;

export default Medecin
