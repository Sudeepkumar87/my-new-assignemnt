import {GET_API_REQUEST,POST_Login_REQUEST,SEARCH_API_REQUEST} from "../../reducer/api/GetApiAction"

const initialState={

    isLoading:false,
    error:null,
    Login:[],
    

}


const getReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_API_REQUEST:
        return{
            ...state,
            isLoading:true,
            error:null
        }
        case POST_Login_REQUEST :
          
            return{
                ...state,
                isLoading:true,
                error:null,
                Login:action.payload 
            }
            case SEARCH_API_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    error:null
                };
     
        default :
       return state;
    }

}

export default getReducer
