import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {useSelector} from "react-redux";
import {Face, Healing, Help, LocalHospital, SettingsPhone} from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {InputLabel} from "@material-ui/core";
import moment from "moment";
import 'moment/locale/en-gb';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FolderList() {
    const classes = useStyles();
    const user = useSelector(state=>state.user);
    const appointment = user.data.appointment;
    return (
        <List className={classes.root}>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircle/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Age" secondary={appointment.age} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LocalHospital />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Etat" secondary={appointment.etat} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Help />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Entourage Suspects ?" secondary={appointment.suspects ? 'Oui' : 'Non'} />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Healing />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary=" Situation vis-à-vis de la pandémie" secondary={appointment.situation} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SettingsPhone/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Numéro de téléphone" secondary={appointment.phoneNumber} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Face/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nom de médecin" secondary={appointment.medecinName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Face/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Le jour de la vaccination" secondary={moment(appointment.startDate).format('LL')} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Face/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="L'heure de la vaccination'" secondary={`${moment(appointment.startDate).format('LT')} - ${moment(appointment.endDate).format('LT')}`  } />
            </ListItem>
        </List>
    );
}
