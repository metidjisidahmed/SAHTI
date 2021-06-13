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
import {AddBox, Cached, Close, DeleteForever, EditOutlined} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-loader-spinner";
import { tableIcons, tableLang } from '../widgets/TableWidget';
import {Save} from "@material-ui/icons";


import moment from "moment";

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

function AddVaccinationDialogForm({setFormAddVaccination , formAddVaccination , submitAddVaccination , isModify , submitPatchVaccination}){
    const classes = useStyles();
    return(
        <div style={{padding:'2% 10%' , marginTop :'5rem'}}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={12}>
                    <Grid item xs={12}  >
                        <Typography
                            variant= 'h4'
                            align="center"
                            color="primary"
                            gutterBottom
                        > {isModify ? 'Modifier la demande de vaccination  : ' + formAddVaccination.code : 'Ajouter une demande de vaccination'}</Typography>

                    </Grid>
                    <form onSubmit={console.log('submitted')}>

                        <Grid
                            container
                            spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center"

                        >
                            {/*Age*/}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="number"
                                    onChange={(event)=>setFormAddVaccination(oldState=>{return {...oldState ,  [event.target.name] : Number(event.target.value) } })}
                                    defaultValue={isModify ? formAddVaccination.age : ''}
                                    disabled={isModify}
                                    name="age"
                                    id="age"
                                    label="age"
                                    variant="filled"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            {/*Etat*/}
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="filled" className={classes.formControl}>
                                    <InputLabel htmlFor="etat">Etat courant</InputLabel>
                                    <Select
                                        onChange={(event)=>setFormAddVaccination(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}
                                        native
                                        defaultValue={isModify ? formAddVaccination.etat : ''}                                        //onChange={handleChange}
                                        inputProps={{
                                            name: 'etat',
                                            id: 'etat',
                                        }}
                                    >
                                        <option key='malade' value='malade' >Malade</option>
                                        <option key='sain' value='sain' >Sain</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                            {/*Situation vis-à-vis de la pandémie*/}
                            <Grid item xs={12} sm={6}>

                                <FormControl variant="filled" className={classes.formControl}>
                                    <InputLabel htmlFor="situation">Situation vis-à-vis de la pandémie</InputLabel>
                                    <Select
                                        onChange={(event)=>setFormAddVaccination(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                        native
                                        defaultValue={isModify ? formAddVaccination.situation : ''}
                                        //onChange={handleChange}
                                        inputProps={{
                                            name: 'situation',
                                            id: 'situation',
                                        }}
                                    >
                                        <option key="ancienPorteur" value="ancienPorteur" >Ancien porteur ( guéris )</option>
                                        <option key="nonAtteint" value="nonAtteint" >Non atteint</option>

                                    </Select>
                                </FormControl>
                            </Grid>
                            {/*Entourage suspect*/}
                            <Grid item xs={12} sm={6}>

                                <FormControl variant="filled" className={classes.formControl}>
                                    <InputLabel htmlFor="situation">Entourage suspect</InputLabel>
                                    <Select
                                        onChange={(event)=>setFormAddVaccination(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                        native
                                        defaultValue={isModify ? formAddVaccination.suspects : ''}
                                        //onChange={handleChange}
                                        inputProps={{
                                            name: 'suspects',
                                            id: 'suspects',
                                        }}
                                    >
                                        <option key="ancienPorteur" value="ancienPorteur" >Personne 1</option>
                                        <option key="nonAtteint" value="nonAtteint" >Personne 2</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/*Téléphone*/}
                            <Grid item xs={12} sm={6} >
                                <TextField

                                    onChange={(event)=>setFormAddVaccination(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}
                                    defaultValue={isModify ? formAddVaccination.phoneNumber : ''}
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    label="Téléphone"
                                    variant="filled"
                                    required
                                    fullWidth
                                    // inputRef={props.myRef}
                                />

                            </Grid>
                            {/*Email*/}
                            <Grid item xs={12} sm={6} >
                                <TextField

                                    onChange={(event)=>setFormAddVaccination(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}
                                    defaultValue={isModify ? formAddVaccination.email : ''}
                                    name="email"
                                    id="email"
                                    label="Email"
                                    variant="filled"
                                    required
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}  >
                                <Button  startIcon={<Save />} disabled={!(formAddVaccination.age && formAddVaccination.etat && formAddVaccination.situation && formAddVaccination.suspects  && (formAddVaccination.phoneNumber || formAddVaccination.email) ) } onClick={()=>!isModify ? submitAddVaccination() : submitPatchVaccination()}   color="primary" variant="outlined" size="large" style={{fontWeight : 'bold'}} >
                                    Enregistrer les modification
                                </Button>
                            </Grid>


                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}


const Medecin = (props) => {
    // const dispatch = useDispatch() ;
    // const vaccinationList= useSelector( state => state.vaccinationList) ;
    const vaccinationList={  data : [] , loading : false , error : null}
    const classes = useStyles() ;

    const listExemple = [
        {
            ord : 1,
            nss : 'nss 1',
            etat : 'Malade',

            nom : 'Metidji',
            prenom : 'Sid Ahmed'
        },
        {
            ord : 3,
            nom : 'Hassani',
            prenom : 'Mehdi'
        } ,
        {
            ord : 4,
            nom : 'Bacha',
            prenom : 'Amine'
        },
        {
            ord : 2,
            nom : 'Si Ahmed',
            prenom : 'Massinissa'
        } ,
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


    const columns = [
        // { field : 'nss' , title : 'NSS'} ,
        {field:  'ord' , title : "Ordre" , defaultSort : "asc" },
        { field: 'nom', title: 'Nom' , sorting : false},
        { field: 'prenom', title: 'Prenom' , sorting : false},

    ];


    /* Default table options*/
    const tableOptions = {
        actionsColumnIndex: 0 ,
        search: true ,
        grouping: false ,
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
                                {
                                    tooltip: 'Ajouter',
                                    icon: () =>  <AddBox fontSize="default"  />,
                                    isFreeAction: true,
                                    onClick: () => setAddVaccinationDialogStatus(true)
                                },
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
            <Dialog  open={isAddVaccinationDialogOpen} onClose={handleCloseAddCouponDialog} TransitionComponent={Transition} fullWidth fullScreen>
                {/* MAIN BAR */}
                <AppBar className={classes.appBar_dialog}>
                    <Toolbar>
                        <IconButton size="small" edge="start" color="secondary" onClick={handleCloseAddCouponDialog} aria-label="close">
                            <Close />
                        </IconButton>
                        <Typography variant="h6" color="secondary" className={classes.title_dialog}>
                            { isModify ? 'Modifier un Coupon' : 'Ajouter un Coupon' }
                        </Typography>
                    </Toolbar>
                </AppBar>

                <AddVaccinationDialogForm isModify={isModify} submitAddVaccination={submitAddVaccination} submitPatchVaccination={submitPatchVaccination()} setFormAddVaccination={setFormAddVaccination} formAddVaccination={formAddVaccination} />

                {/*<div className={classes.tab_appBar_dialog}>*/}
                {/*    /!* TABS*!/*/}
                {/*    <AppBar position="static" color="default">*/}
                {/*        <Tabs*/}
                {/*            value={tabvalue}*/}
                {/*            onChange={handleChangeTabs}*/}
                {/*            variant="fullWidth"*/}
                {/*            //scrollButtons="on"*/}
                {/*            indicatorColor="primary"*/}
                {/*            textColor="primary"*/}
                {/*            aria-label="form tabs"*/}
                {/*            centered*/}
                {/*        >*/}
                {/*            <Tab label="Modifier le profile" icon={<Face />} {...a11yProps(0)} />*/}
                {/*            <Tab label="Modifier le vehicule" icon={<LocalTaxi />} {...a11yProps(1)} />*/}
                {/*            <Tab label="modifier la line" icon={<MapRounded />} {...a11yProps(2)} />*/}
                {/*            <Tab label="modifier la zone" icon={<Explore />} {...a11yProps(3)} />*/}
                {/*        </Tabs>*/}
                {/*    </AppBar>*/}







                {/*</div>*/}
            </Dialog>

        </React.Fragment>

    )
} ;

export default Medecin
