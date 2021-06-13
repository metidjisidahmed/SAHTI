import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx"
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {ButtonGroup, Button, Drawer, Divider, Hidden} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom"
import {useStylesApp} from "../../GlobalStyle/globalStyle";
import {ChevronLeft} from "@material-ui/icons";
import SideBarMedecine from "../SideBarMedecine";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const SideBar = (props) => {
    const classes= useStylesApp();
    const roles={};
    const rolesWrite={};
    if(props.roles){
        props.roles.forEach((authority)=>{
            roles[authority.entity]= authority.has.read;
            // roles[authority.entity]= true;
        });
        props.roles.forEach((authority)=>{
            rolesWrite[authority.entity]= authority.has.write;
            // rolesWrite[authority.entity]= true;
        });
    }



    return (
        <Drawer
            variant={props.variantDrawer}
            classes={{
                paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>

                <IconButton color="primary" onClick={(e) => props.handleDrawerClose(e)} aria-label="close drawer">
                    <ChevronLeft />
                </IconButton>

            </div>
            <Divider />
             {/*<List>{<HomeListItems routerHook={history} listItemColor={classes.list_items} />}</List> */}

            {/*<HomeListItems  pathName={locationPathName}  listItemColor={classes.list_items} />*/}
            <Divider />
            {/*<MainListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items} />*/}
            <Divider  />
            {/*<BookingListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items} />*/}
            <Divider  />
            {/*<TripListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items} />*/}
            <Divider />
            {/*<DriverListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items}/>*/}
            <Divider  />
            {/*<RiderListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items} />*/}
            <Divider />
            <Divider/>
            {/*<OperationalListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items}/>*/}
            <Divider/>
            {/*<CommunicationListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items}/>*/}
            <Divider />
            {/*<AdditionalPagesListItems roles={roles} pathName={locationPathName} listItemColor={classes.list_items}/>*/}
        </Drawer>

    )
}

export default function HeaderCompounent({path}) {
    const [drawerIsOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const classes = useStyles();
    const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log("PATH =", path);
    if(path==='/login' || path ==='/signup') return null
    return (
        <React.Fragment>
                {/*<div className={classes.root}>*/}
                    {/*<FormGroup>*/}
                    {/*    <FormControlLabel*/}
                    {/*        control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}*/}
                    {/*        label={auth ? 'Logout' : 'Login'}*/}
                    {/*    />*/}
                    {/*</FormGroup>*/}
                {/*    <AppBar position="static">*/}
                {/*        <Toolbar>*/}
                {/*            /!*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*!/*/}
                {/*            /!*    <MenuIcon />*!/*/}
                {/*            /!*</IconButton>*!/*/}
                {/*            { path==='/medecin'? (*/}
                {/*                    <IconButton*/}
                {/*                        edge="start"*/}
                {/*                        color="secondary"*/}
                {/*                        aria-label="open drawer"*/}
                {/*                        onClick={()=>handleDrawerOpen()}*/}
                {/*                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}*/}
                {/*                    >*/}
                {/*                        <MenuIcon/>*/}
                {/*                    </IconButton>*/}
                {/*            ) : null}*/}
                {/*            <Typography variant="h6" className={classes.title}>*/}
                {/*                /!*Photos*!/*/}
                {/*            </Typography>*/}
                {/*            {*/}
                {/*                !auth && (*/}
                {/*                    <React.Fragment>*/}
                {/*                        <Link to={'/login'} style={{textDecoration : 'none'}}><Button size="large" variant="outlined" style={{marginRight  : '0.5rem'}}>Sign Up</Button></Link>*/}
                {/*                        <Link to={'/login'} style={{textDecoration : 'none'}}><Button size="large" variant="outlined" >Login</Button></Link>*/}
                {/*                    </React.Fragment>*/}
                {/*                )*/}
                {/*            }*/}
                            {/*<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">*/}

                {/*            /!*</ButtonGroup>*!/*/}
                {/*            {auth && (*/}
                {/*                <div>*/}
                {/*                    <IconButton*/}
                {/*                        aria-label="account of current user"*/}
                {/*                        aria-controls="menu-appbar"*/}
                {/*                        aria-haspopup="true"*/}
                {/*                        onClick={handleMenu}*/}
                {/*                        color="inherit"*/}
                {/*                    >*/}
                {/*                        <AccountCircle />*/}
                {/*                    </IconButton>*/}
                {/*                    <Menu*/}
                {/*                        id="menu-appbar"*/}
                {/*                        anchorEl={anchorEl}*/}
                {/*                        anchorOrigin={{*/}
                {/*                            vertical: 'top',*/}
                {/*                            horizontal: 'right',*/}
                {/*                        }}*/}
                {/*                        keepMounted*/}
                {/*                        transformOrigin={{*/}
                {/*                            vertical: 'top',*/}
                {/*                            horizontal: 'right',*/}
                {/*                        }}*/}
                {/*                        open={open}*/}
                {/*                        onClose={handleClose}*/}
                {/*                    >*/}
                {/*                        <MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                {/*                        <MenuItem onClick={handleClose}>My account</MenuItem>*/}
                {/*                    </Menu>*/}
                {/*                </div>*/}
                {/*            )}*/}
                {/*        </Toolbar>*/}
                {/*/!*    </AppBar>*!/*/}
                {/*</div>*/}
                <SideBarMedecine path={path} auth={auth} handleMenu={handleMenu} handleClose={handleClose} anchorEl={anchorEl}  accountOpen={open} />
        </React.Fragment>
    );
}
