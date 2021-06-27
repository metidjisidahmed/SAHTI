const initialState = {
    loading:true,
    error : false ,
    data : [{
        id : null,
        userName : 'Metidji Sid Ahmed',
        email : 'is_metidji@esi.dz',
        password : 'zyraveigar',
        accountType  : 'Adherant',
        appointment : null
    }]
}

export default function userReducer (state = initialState, action) {

    switch(action.type){
        default: return state
    }

}

