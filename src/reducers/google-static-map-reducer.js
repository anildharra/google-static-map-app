export default function(state={},action){

    switch(action.type){
        case 'GET_MAP':
            return {...state,map:action.payload}
            case 'GET_ARTISTS_ALL':
                return {...state,artistList:action.payload}
            case 'GET_MAP_IMAGE':
                return {...state,mapImageSrc:action.payload}
        default:
            return state;
    }

}