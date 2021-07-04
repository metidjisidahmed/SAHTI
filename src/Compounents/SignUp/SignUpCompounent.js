import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {FormControl, InputLabel, Select} from "@material-ui/core";
import {fetchSignUpUser} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
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

export default function SignUpCompounent() {
    const classes = useStyles();
    const [signUpForm , setSignUpForm]=useState({accountType : 'Adherant'});
    const [isChecked , setChecked ]=useState(false);
    const dispatch = useDispatch();
    const history=useHistory();


    return (
        <Container component="main" maxWidth="xs" style={{backgroundColor : '#333'}}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                autoComplete="fname"
                                name="nom"
                                variant="outlined"
                                required
                                fullWidth
                                id="nom"
                                label="Nom"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                variant="outlined"
                                required
                                fullWidth
                                id="prenom"
                                label="Prenom"
                                name="prenom"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                defaultValue={''}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="L'adresse Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel htmlFor="accountType">Type de compte</InputLabel>
                                <Select
                                    onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                    native
                                    defaultValue={signUpForm.accountType}                                        //onChange={handleChange}
                                    inputProps={{
                                        name: 'accountType',
                                        id: 'accountType',
                                    }}
                                >
                                    <option key='Adherant' value='Adherant' >Adherant</option>
                                    <option key='Medecin' value='Medecin' >Medecin</option>
                                    {/*<option key='Tutelle' value='Tutelle' >Tutelle</option>*/}

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} hidden={!(signUpForm.accountType==='Adherant')} >
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                variant="outlined"
                                required
                                fullWidth
                                name="nss"
                                label="Numéro de sécurité social"
                                id="nss"
                            />
                        </Grid>
                        <Grid item xs={12} hidden={!(signUpForm.accountType==='Medecin')} >
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                variant="outlined"
                                required
                                fullWidth
                                name="matricule"
                                label="Matricule médical"
                                id="Matricule médical"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                onChange={(event)=>setSignUpForm(oldState=>{return {...oldState ,  [event.target.name] : event.target.value } })}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox onChange={()=>setChecked(!isChecked)} checked={isChecked} color="primary" />}
                                label="J'accepte les termes et les conditions"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // style={signUpForm.nom && signUpForm.prenom && signUpForm.email && signUpForm.password && isChecked && ( ( signUpForm.nss && signUpForm.accountType==="Adherant") || ( signUpForm.matricule && signUpForm.accountType==="Medecin") ) ?  {} : {opacity : '0.2'}}
                        disabled={! (signUpForm.nom && signUpForm.prenom && signUpForm.email && signUpForm.password && isChecked && ( ( signUpForm.nss && signUpForm.accountType==="Adherant") || ( signUpForm.matricule && signUpForm.accountType==="Medecin") ))}
                        onClick={()=>{dispatch(fetchSignUpUser(signUpForm)); setTimeout(()=>{history.push('/login')}, 1500) }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}