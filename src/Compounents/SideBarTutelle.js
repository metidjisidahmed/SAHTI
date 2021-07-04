import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Collapse, MenuList, Tooltip, useMediaQuery} from "@material-ui/core";
import {Link, useHistory} from 'react-router-dom'
import {
    AccountBox,
    AssignmentTurnedIn,
    DateRange,
    ExpandLess,
    ExpandMore,
    HourglassEmpty, PinDrop,
    SupervisorAccount
} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../redux/actions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import littleLogo from '../Compounents/SignUp/Asset 10.png';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 8,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const AccountListItems = ({pathName ,listItemColor , roles }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(pathName === "/Tutelle" ||pathName === "/Tutelle/accounts" || pathName === "/Tutelle/accounts/adherants" || pathName === "/Tutelle/accounts/medecins" || pathName === "/Tutelle/accounts/tutelle"  ){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }, [pathName]);

    const handleClick = () => {
        setOpen(!open);
    };


    return (

        <MenuList>
            <Tooltip title="Gestion des comptes" placement="right">

                <MenuItem onClick={handleClick}>
                    <ListItemIcon>
                        <SupervisorAccount color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Gestion des comptes" className={listItemColor} />
                    {open ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
                </MenuItem>

            </Tooltip>
            {/* Collapsing items */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <MenuList component="div" disablePadding>
                    <Tooltip title="Comptes d'adherants" placement="right"  >

                        <MenuItem component={Link} to='/Tutelle/accounts/adherants' selected={pathName === "/Tutelle/accounts/adherants" || pathName==='/Tutelle'}>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Comptes d'adherants"  />
                        </MenuItem>
                    </Tooltip>
                    <Tooltip title="Comptes de medecins" placement="right"  >

                        <MenuItem component={Link} to='/Tutelle/accounts/medecins' selected={pathName === "/Tutelle/accounts/medecins"}>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Comptes de medecins"  />
                        </MenuItem>
                    </Tooltip>
                    {/*<Tooltip title="Comptes de la tutelle" placement="right"  >*/}

                    {/*    <MenuItem component={Link} to='/Tutelle/accounts/tutelle' selected={pathName === "/Tutelle/accounts/tutelle"}>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <AccountBox />*/}
                    {/*        </ListItemIcon>*/}
                    {/*        <ListItemText primary="Comptes de la tutelle"  />*/}
                    {/*    </MenuItem>*/}
                    {/*</Tooltip>*/}


                </MenuList>

            </Collapse>
        </MenuList>
    )};

export default function SideBarTutelle({path , auth , handleClose , handleMenu,anchorEl , accountOpen }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const user = useSelector( state => state.user);
    const dispatch=useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const history= useHistory();
    const isDesktop = useMediaQuery('(min-width:768px)');
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar style={{backgroundColor :'#333'}}>
                    {path.includes('/Tutelle') && user.data?.accountType==='Tutelle'   ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : null}

                    <Typography variant="h6" noWrap style={{flexGrow :1}}>
                        <img style={{marginTop : '5px' ,  height : '3em', width : '10em'}} src={littleLogo}/>
                    </Typography>
                    {
                        user.data && (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={accountOpen}
                                    onClose={handleClose}
                                    style={{marginTop : '2rem'}}
                                >
                                    <MenuItem onClick={()=>{dispatch(logoutUser()); history.push('/login')}}>Se deconnecter</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )
                    }

                    {   !user.data && path==='/' && (
                        <div style={{marginLeft : 'auto'  , display :'flex' , justifyContent :'center'}} >
                            <Link to={'/signup'} style={{textDecoration : 'none'}}><Button size="large" variant="outlined" style={{marginRight  : '0.5rem'}}>Sign Up</Button></Link>
                            <Link to={'/login'} style={{textDecoration : 'none'}}><Button size="large" variant="outlined" >Login</Button></Link>
                        </div>
                    )
                    }
                </Toolbar>

            </AppBar>
            { isDesktop || open ? (
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    style={{maxWidth :'10vw' }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <AccountListItems  pathName={path}  listItemColor={classes.list_items} />
                    <Divider/>
                    <Tooltip title="Gestion de vaccinations" placement="right" >
                        <List>
                            <MenuItem style={{ marginLeft : '-0.8rem'}} component={Link} to='/Tutelle/vaccinations' selected={path === "/Tutelle/vaccinations"} >
                                <ListItem  key="Gestion des vaccinations">
                                    <ListItemIcon><DateRange/>   </ListItemIcon>
                                    <ListItemText primary="Gestion de vaccinations" />
                                </ListItem>
                            </MenuItem>
                        </List>
                    </Tooltip>
                    <Divider />

                </Drawer>
            ) : null}
        </div>
    );
}
