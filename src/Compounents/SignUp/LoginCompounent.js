
import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {loginUserError , loginUser , wait , loginUserLoading} from "../../redux/actions";
import { useHistory} from "react-router-dom";
import bigLogo2 from './Asset 7-100 rogné.jpg'



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
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${bigLogo2})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function LoginCompounent() {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData , setFormData]=useState({ email : '' , password : ''})
    const user = useSelector( state => state.user);
    const accounts=useSelector(state=>state.accounts)
    const fetchLoginUser=(formData)=>(dispatch , getState )=>{
        dispatch(loginUserLoading());
        wait(1000)
            .then(()=>{
                const allUsers=getState().accounts.data;
                console.log('all users ', allUsers);
                const theUser=allUsers.filter(user=>user.email===formData.email)[0];
                if(theUser){
                    if(formData.password==theUser.password){
                        dispatch(loginUser(theUser));
                        localStorage.setItem('accounts' ,JSON.stringify(accounts.data) );
                        wait(100).then(()=>history.push('/'+theUser.accountType));
                    }else{
                        dispatch(loginUserError('Le Mot de passe est incorrecte !'));
                    }
                }else{
                    dispatch(loginUserError("il n'existe aucun utilisateur avec ce mail"));
                }

            })
            .catch(err=>dispatch(loginUserError(err)))

    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} >
                <img style={{width : '100%' , height : '100%'}} src={bigLogo2}/>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            disabled={user.loading}
                            onChange={(event)=>setFormData(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}
                            defaultValue={formData.email }
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            disabled={user.loading}
                            onChange={(event)=>setFormData(oldState=>{return {...oldState ,[event.target.name] : event.target.value } })}
                            defaultValue={formData.password }
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={()=>{
                                dispatch(fetchLoginUser(formData))
                            }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            {/*<Grid item xs>*/}
                            {/*    <Link href="#" variant="body2">*/}
                            {/*        Forgot password?*/}
                            {/*    </Link>*/}
                            {/*</Grid>*/}
                            <Grid item>
                                <Link href={'/signup'} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {user.error?
                            <Box mt={8}>
                                <Typography variant="body2" color="error" align="center" style={{fontSize : '1.5rem'}}>
                                    {user.error}
                                </Typography>
                            </Box>
                            : ''}
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
