/* importing core styles */
import { makeStyles } from '@material-ui/core/styles';

/* globals */
const drawerWidth = 300;

/* Style obj */
export const useStylesApp = makeStyles((theme) => ({

    root: { //main app
        display: 'flex',
    },

    loader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding : 'auto',
        position : 'fixed' ,
        left:"0px",
        top: "0px",
        width: "100%",
        height: "100%",

    },

    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },

    toolbarIcon: { //drawer burger
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
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

    menuButton: { //appbar resizer
        marginRight: 36,
    },

    menuButtonHidden: {
        display: 'none',
    },

    title: {
        flexGrow: 1,
    },

    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,

        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },

    list_items: {
        color: "#FFDD00" ,
    },

    appBarSpacer: theme.mixins.toolbar,

    content: {
        /* flexGrow: 1,
        height: '100vh',
        overflow: 'auto', */
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

    fixedHeight: {
        height: 240,
    },//end Layouts !


}));


