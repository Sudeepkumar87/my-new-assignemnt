// import {getApiCall,LoginDataResponse} from "../../Api"

import axios from "axios";
const baseUrl = "https://hn.algolia.com/api/v1/search";





export const GET_API_REQUEST = "GET_API_REQUEST";
export const POST_Login_REQUEST = "POST_Login_REQUEST";
export const SEARCH_API_REQUEST ="SEARCH_API_REQUEST"

export const GetApiRequest = () => {
    return {
      type: GET_API_REQUEST,
    };
  };

export const LoginApiRequest = (data) => {
  return {
    type: POST_Login_REQUEST,
     payload:data
  };
};

export const SearchApiRequest = () => {
  return {
    type: SEARCH_API_REQUEST,
  };
};
export const SearchGetApi = (props) => {
  const { url, pageNumber, tags, query } = props;
  
  return async (dispatch) => {
    dispatch(SearchApiRequest());

    let selectedUrl = "";
    if(query){
      selectedUrl = `${baseUrl}?query=${url}&page=${pageNumber}&tags=`;
    }
    if (!query) {
      selectedUrl = `${baseUrl}?query=${url}&page=${pageNumber}&tags=${tags}`;
    }

    if(tags){
      selectedUrl = `${baseUrl}?query=${url}&page=${pageNumber}&tags=${tags}`;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    };

    try {
      const response = await axios.get(selectedUrl, { headers: headers });

      return response.data;

    } catch (error) {
      console.error("Error in SearchGetApi", error); 
      throw error; 
    }
  };
};



// export const SearchGetApi = (props) => {
//   const { url, pageNumber, tags, query } = props;
  
//   return async (dispatch) => {
//     dispatch(SearchApiRequest()); 

//     let selectedUrl = "";
//     if(query){
//       selectedUrl = `${baseUrl}?query=${url}&page=${pageNumber}&tags=`;
//     }
//     if (!query) {
    
//       selectedUrl = `${baseUrl}?query=${url}&page=${pageNumber}&tags=${tags}`;
   
//     }

//     if(tags){
//       selectedUrl=`${baseUrl}?query=${url}&page=${pageNumber}&tags=${tags}`
//     }


//     const headers = {
//       'Content-Type': 'application/json',
//       "Access-Control-Allow-Origin": '*' 
//     };
  

//     try {
    
//       const response = await axios.get(selectedUrl,);

//       return response.data;

//     } catch (error) {
//       console.error("Error in SearchGetApi", error); 
//       throw error; 
//     }
//   };
// };


// export const SearchGetApi = (props) => {
//   const { url, pageNumber,tags} = props;
//   return async (dispatch) => {
//     dispatch(SearchApiRequest()); 
//     try {
//       const response = await axios.get(`${baseUrl}?query=${url}&page=${pageNumber}&${tags}`);
     


//       console.log("response", response.data); 
//       return response.data; 
//     } catch (error) {
//       console.error("Error in SearchGetApi", error);
//       throw error; 
//     }
//   };
// };





export const MainGetApi = () => {
  return async (dispatch) => {
    dispatch(GetApiRequest());
    const response = await axios.get(baseUrl);
    return response.data
  };
};
export const postLoginData = (dataSummary) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_Login_REQUEST', payload: dataSummary });
      const response = await LoginApiRequest(dataSummary);
      const responseData=response?.payload
  
  };
};




