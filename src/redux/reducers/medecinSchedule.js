import moment from 'moment';


const appointments = [
    {
        title: 'Travail ( Lundi )',
        startDate: new Date(2021, 5, 1, 8, 0),
        endDate: new Date(2021, 5, 1, 16, 0),
        id: 0,
        location: 'Room 1',
        rRule : 'FREQ=WEEKLY;BYDAY=MO',
        isDayWork : true
    },
    {
        title: 'Travail ( Mardi)',
        startDate: new Date(2021, 5, 8, 8, 0),
        endDate: new Date(2021, 5, 8, 16, 0),
        id: 1,
        location: 'Room 1',
        rRule : 'FREQ=WEEKLY;BYDAY=TU',
        isDayWork : true
    },
    {
        title: 'Travail ( Mercredi)',
        startDate: new Date(2021, 5, 9, 8, 0),
        endDate: new Date(2021, 5, 9, 16, 0),
        id: 2,
        location: 'Room 1',
        rRule : 'FREQ=WEEKLY;BYDAY=WE',
        isDayWork : true
    },
    {
        title: 'Travail ( JEUDI)',
        startDate: new Date(2021, 5, 8, 8, 0),
        endDate: new Date(2021, 5, 8, 16, 0),
        id: 3,
        location: 'Room 1',
        rRule : 'INTERVAL=1;BYDAY=TH',
        isDayWork : true
    },
    {
        title: 'Travail ( Dimanche )',
        startDate: new Date(2021, 5, 1, 8, 0),
        endDate: new Date(2021, 5, 1, 16, 0),
        id: 4,
        location: 'Room 1',
        rRule : 'FREQ=WEEKLY;BYDAY=SU',
        isDayWork : true
    }


];



export const initialScheduleArr= appointments;

let initialState={
    loading : false ,
    error : false ,
    data : initialScheduleArr
}

export default function medecinSchedule (state = initialState, action) {

    switch (action.type) {
        default:
            return state
    }

}

