import React from 'react';
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
import {Tooltip, useMediaQuery} from "@material-ui/core";
import {Link } from 'react-router-dom'
import {AssignmentTurnedIn, DateRange, HourglassEmpty} from "@material-ui/icons";
import {useSelector} from "react-redux";

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
        marginRight: 36,
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

export default function SideBarMedecine({path , auth , handleClose , handleMenu,anchorEl , accountOpen }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const user = useSelector( state => state.user);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
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

                <Toolbar>
                    {path.includes('/medecin') && user.data?.accountType==='Medecin'  ? (
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
                        Mini variant drawer
                    </Typography>
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
            { path.includes('/medecin') &&  user.data?.accountType==='Medecin'  &&( isDesktop ? true : open) ?
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
                    <Tooltip title="Agenda personnelle" placement="right" >
                        <List>
                            <MenuItem style={{ marginLeft : '-0.8rem'}} component={Link} to='/medecin/schedule' selected={path === "/medecin/schedule" || path==="/medecin"}>
                                <ListItem  key="Agenda personnelle">
                                    <ListItemIcon><DateRange/>   </ListItemIcon>
                                    <ListItemText primary="Agenda personnelle" />
                                </ListItem>
                            </MenuItem>
                        </List>
                    </Tooltip>
                    <Divider />
                <List>
                    <Tooltip title="RDV en attente" placement="right" >
                        <List>
                            <MenuItem style={{ marginLeft : '-0.8rem'}} component={Link} to='/medecin/enAttente' selected={path === "/medecin/enAttente" }>
                                <ListItem  key="RDV en attente">
                                    <ListItemIcon> <HourglassEmpty/></ListItemIcon>
                                    <ListItemText primary="RDV en attente" />
                                </ListItem>
                            </MenuItem>
                        </List>
                    </Tooltip>
                </List>
                <Divider />
                    <Tooltip title="RDV confirmées" placement="right" >
                        <List>
                            <MenuItem style={{ marginLeft : '-0.8rem'}} component={Link} to='/medecin/confirme' selected={path === "/medecin/confirme"}>
                                <ListItem  key="RDV confirmées">
                                    <ListItemIcon><AssignmentTurnedIn/>   </ListItemIcon>
                                    <ListItemText primary="RDV confirmées" />
                                </ListItem>
                            </MenuItem>
                        </List>
                    </Tooltip>
            </Drawer> : null }

        </div>
    );
}
