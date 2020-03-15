export default function(state={},action){

    switch(action.type){
        case 'GET_USER':
            return {...state,user:action.payload}
        case 'GET_ALL_USERS':
            return {...state,users:action.payload}
        default:
            return state;
    }

}